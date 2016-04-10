<?php

/**
 * Registers the entity custom post type (from the *init* hook).
 */
function wl_entity_type_register() {

	$labels = array(
		'name'               => _x( 'Vocabulary', 'post type general name', 'wordlift' ),
		'singular_name'      => _x( 'Entity', 'post type singular name', 'wordlift' ),
		'add_new'            => _x( 'Add New Entity', 'entity', 'wordlift' ),
		'add_new_item'       => __( 'Add New Entity', 'wordlift' ),
		'edit_item'          => __( 'Edit Entity', 'wordlift' ),
		'new_item'           => __( 'New Entity', 'wordlift' ),
		'all_items'          => __( 'All Entities', 'wordlift' ),
		'view_item'          => __( 'View Entity', 'wordlift' ),
		'search_items'       => __( 'Search in Vocabulary', 'wordlift' ),
		'not_found'          => __( 'No entities found', 'wordlift' ),
		'not_found_in_trash' => __( 'No entities found in the Trash', 'wordlift' ),
		'parent_item_colon'  => '',
		'menu_name'          => __( 'Vocabulary', 'wordlift' )
	);

	$args = array(
		'labels'        => $labels,
		'description'   => 'Holds our vocabulary (set of entities) and entity specific data',
		'public'        => true,
		'menu_position' => 20, // after the pages menu.
		'supports'      => array( 'title', 'editor', 'thumbnail', 'excerpt', 'comments' ),
		'has_archive'   => true,
		'menu_icon'		=> WP_CONTENT_URL . '/plugins/wordlift/images/svg/wl-local-storage-icon.svg'
	);

	register_post_type( Wordlift_Entity_Service::TYPE_NAME, $args );
}

add_action( 'init', 'wl_entity_type_register' );

/**
 * Set the main type for the entity using the related taxonomy.
 *
 * @param int $post_id The numeric post ID.
 * @param string $type_uri A type URI.
 */
function wl_set_entity_main_type( $post_id, $type_uri ) {

//	wl_write_log( "wl_set_entity_main_type [ post id :: $post_id ][ type uri :: $type_uri ]" );

	// If the type URI is empty we remove the type.
	if ( empty( $type_uri ) ) {
		wp_set_object_terms( $post_id, null, Wordlift_Entity_Types_Taxonomy_Service::TAXONOMY_NAME );

		return;
	}

	// Get all the terms bound to the wl_entity_type taxonomy.
	$terms = get_terms( Wordlift_Entity_Types_Taxonomy_Service::TAXONOMY_NAME, array(
		'hide_empty' => false,
		'fields'     => 'id=>slug'
	) );

	// Check which term matches the specified URI.
	foreach ( $terms as $term_id => $term_slug ) {
		// Load the type data.
		$type = Wordlift_Schema_Service::get_instance()->get_schema( $term_slug );
		// Set the related term ID.
		if ( $type_uri === $type['uri'] || $type_uri === $type['css_class'] ) {
			wp_set_object_terms( $post_id, (int) $term_id, Wordlift_Entity_Types_Taxonomy_Service::TAXONOMY_NAME );

			return;
		}
	}
}

/**
 * Prints inline JavaScript with the entity types configuration removing duplicates.
 */
function wl_print_entity_type_inline_js() {

	$terms = get_terms( Wordlift_Entity_Types_Taxonomy_Service::TAXONOMY_NAME, array(
		'hide_empty' => false
	) );

	echo <<<EOF
    <script type="text/javascript">
        (function() {
        var t = [];

EOF;

	// Cycle in each WordLift term and get its metadata. The metadata will be printed as a global object in JavaScript
	// to be used by the JavaScript client library.
	foreach ( $terms as $term ) {

		$term_name = $term->name;

		// Load the type data.
		$type = Wordlift_Schema_Service::get_instance()->get_schema( $term->slug );

		// Skip types that are not defined.
		if ( ! empty( $type['uri'] ) ) {

			// Prepare the JSON output then print it to the browser.
			$json = json_encode( array(
				'label'     => $term_name,
				'uri'       => $type['uri'],
				'css'       => $type['css_class'],
				'sameAs'    => $type['same_as'],
				'templates' => ( isset( $type['templates'] ) ? $type['templates'] : array() ),
			) );

			// Output the type data.
			echo "t.push($json);\n";

		}

	}

	echo <<<EOF
            if ('undefined' == typeof window.wordlift) {
                window.wordlift = {}
            }
            window.wordlift.types = t;

        })();
    </script>
EOF;

}

add_action( 'admin_print_scripts', 'wl_print_entity_type_inline_js' );

add_action( 'init', 'wl_entity_type_taxonomy_register', 0 );
