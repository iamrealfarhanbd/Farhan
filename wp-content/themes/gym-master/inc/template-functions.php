<?php
/**
 * Functions which enhance the theme by hooking into WordPress
 *
 * @package gym-master
 */

/**
 * Adds custom classes to the array of body classes.
 *
 * @param array $classes Classes for the body element.
 * @return array
 */

function gym_master_body_classes( $classes ) {
	
	// Adds a class of hfeed to non-singular pages.
	if ( ! is_singular() ) {
		$classes[] = 'hfeed';
	}

	global $post;
	$post_id = "";
	if(is_front_page()){
	    $post_id = get_option('page_on_front');
	}else{
	    if($post)
	    $post_id = $post->ID;
	}	
 
	if ( is_singular() ){
		
		$page_id = get_post_meta( $post->ID , 'gym_master_sidebar_layout', true ) ;
		if(is_front_page()){
			$post_id = get_option('page_on_front');
		}elseif( is_singular( 'services' ) ){
			
			$classes[] = 'no-sidebar';
		}elseif( empty( $page_id ) ){
			
			$classes[] = 'right-sidebar';
		}else{
			$classes[] = get_post_meta( $post->ID , 'gym_master_sidebar_layout', true ) ;
		}
		}else{
			$classes[] = get_theme_mod('gym_master_archive_setting_sidebar_option','right-sidebar');
		}
		return $classes;
	
}
add_filter( 'body_class', 'gym_master_body_classes' );

/**
 * Add a pingback url auto-discovery header for single posts, pages, or attachments.
 */
function gym_master_pingback_header() {
	
	if ( is_singular() && pings_open() ) {
		printf( '<link rel="pingback" href="%s">', esc_url( get_bloginfo( 'pingback_url' ) ) );
	}
}
add_action( 'wp_head', 'gym_master_pingback_header' );

