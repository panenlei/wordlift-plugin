<?php

/*
 * Function in charge of diplaying the [wl-faceted-search]
 */
function wl_shortcode_faceted_search( $atts ) {
    
    $div_id = 'wordlift-faceted-entity-search-widget';
    
    wp_enqueue_style( 'wordlift-faceted-search-css', plugins_url('css/wordlift-faceted-entity-search-widget.css', __FILE__) );
 
    wp_enqueue_script( 'angularjs', plugins_url( 'bower_components/angular/angular.min.js', __FILE__ ) );

    wp_enqueue_script( 'wordlift-faceted-search', plugins_url('js/wordlift-faceted-entity-search-widget.js', __FILE__) );
    wp_localize_script( 'wordlift-faceted-search', 'wl_faceted_search_params', array(
            'ajax_url'   => admin_url('admin-ajax.php'),
            'action'     => 'wl_faceted_search',
            'entity_id'  => get_the_ID(),
            'div_id'     => $div_id
        )
    );
    
    return '<div id="' . $div_id . '" style="width:100%">
        Ciao Marcyyyyyyyyyy
    </div>';  
}
add_shortcode( 'wl-faceted-search', 'wl_shortcode_faceted_search' );


/*
 * Ajax call for the faceted search widget
 */
function wl_shortcode_faceted_search_ajax()
{

    $entity_id = $_REQUEST['entity_id'];
    //$depth   = $_REQUEST['depth'];

    header( 'Content-Type: application/json' );

    $result  = wl_get_referencing_posts( $entity_id );

    echo json_encode( $result );

    wp_die();
}
add_action('wp_ajax_wl_faceted_search', 'wl_shortcode_faceted_search_ajax');
add_action('wp_ajax_nopriv_wl_faceted_search', 'wl_shortcode_faceted_search_ajax');
