<?php
/**
 * Services: Attachment Service.
 *
 * Provide functions to manipulate attachments.
 *
 * @since   3.10.0
 * @package Wordlift
 */

/**
 * Define the {@link Wordlift_Attachment_Service} class.
 *
 * @since   3.10.0
 * @package Wordlift
 */
class Wordlift_Attachment_Service {

	/**
	 * Get an attachment ID given a URL.
	 *
	 * Inspired from https://wpscholar.com/blog/get-attachment-id-from-wp-image-url/
	 *
	 * @since 3.10.0
	 *
	 * @param string $url The attachment URL.
	 *
	 * @return int|false Attachment ID on success, false on failure
	 */
	function get_attachment_id( $url ) {

		// Get the upload directory data, we need the base URL to check whether
		// the URL we received is within WP.
		$dir = wp_upload_dir();

		// If the image is not inside WP's base url, return.
		if ( false === strpos( $url, $dir['baseurl'] . '/' ) ) {
			return false;
		}

		// Get the filename, the extension is kept.
		$filename = basename( $url );

		// Query for attachments with the specified filename.
		$query = new WP_Query( array(
			'post_type'   => 'attachment',
			'post_status' => 'inherit',
			'fields'      => 'ids',
			'meta_query'  => array(
				array(
					'value'   => $filename,
					'compare' => 'LIKE',
					'key'     => '_wp_attachment_metadata',
				),
			),
		) );

		// If there are no posts, return.
		if ( $query->have_posts() ) {
			foreach ( $query->posts as $attachment_id ) {

				// Get the attachment metadata, we need the filename.
				$metadata          = wp_get_attachment_metadata( $attachment_id );
				$original_filename = basename( $metadata['file'] );

				// Get the cropped filenames, or an empty array in case there are no files.
				$sizes_filenames = isset( $metadata['sizes'] ) ? wp_list_pluck( $metadata['sizes'], 'file' ) : array();

				// If the provided filename matches the attachment filename (or one of its resized images), return the id.
				if ( $original_filename === $filename || in_array( $filename, $sizes_filenames ) ) {
					return $attachment_id;
				}
			}
		}

		// If we got here, we couldn't find any attachment.
		return false;
	}


	public function get_embeds( $content ) {

		// Go over all the images included in the post content, check if they are
		// in the DB, and if so include them.
		$images = array();
		if ( ! preg_match_all( '#<img [^>]*src="([^\\">]*)"[^>]*>#', $content, $images ) ) {
			return array();
		}

		// Map the image URLs to attachment ids.
		$ids = array_map( function ( $url ) {
			return $this->get_attachment_id( $url );
		}, $images[1] );

		// Filter out not found ids (i.e. id is false).
		return array_filter( $ids, function ( $item ) {
			return ! $item;
		} );
	}

	public function get_gallery( $post ) {

		// As the above for images in galleries.
		// Code inspired by http://wordpress.stackexchange.com/questions/80408/how-to-get-page-post-gallery-attachment-images-in-order-they-are-set-in-backend
		$pattern = get_shortcode_regex();

		if ( preg_match_all( '/' . $pattern . '/s', $$post->post_content, $matches )
		     && array_key_exists( 2, $matches )
		     && in_array( 'gallery', $matches[2] )
		) {

			$keys = array_keys( $matches[2], 'gallery' );

			foreach ( $keys as $key ) {
				$atts = shortcode_parse_atts( $matches[3][ $key ] );

				if ( is_array( $atts ) && array_key_exists( 'ids', $atts ) ) {
					// gallery images insert explicitly by their ids.

					foreach ( explode( ',', $atts['ids'] ) as $attachment_id ) {
						// since we do not check for actual image existance
						// when generating the json content, check it now
						if ( wp_get_attachment_image_src( $attachment_id, 'full' ) ) {
							$ids[ $attachment_id ] = true;
						}
					}
				} else {
					// gallery shortcode with no ids uses all the images
					// attached to the post.
					$images = get_attached_media( 'image', $post->ID );
					foreach ( $images as $attachment ) {
						$ids[ $attachment->ID ] = true;
					}
				}
			}
		}

		return array_keys( $ids );
	}

}