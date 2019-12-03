<?php
/**
 * The sidebar containing the main widget area
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package gym-master
 */

global $post;
if ( is_search()|| is_archive() || is_category() ){
	$post_class = get_theme_mod('gym_master_archive_setting_sidebar_option','right-sidebar');
} elseif ( is_singular() ){
	$post_class =  get_post_meta( $post->ID, 'gym_master_sidebar_layout', true );	
	if ( empty( $post_class ) ){
		$post_class = 'right-sidebar';
	}	
} else{
	$post_class = 'right-sidebar';
}
if ( 'no-sidebar' == $post_class || ! is_active_sidebar( 'gym-master-sidebar-right' ) ) {
	return;
}

if($post_class=='right-sidebar' || $post_class=='both-sidebar'){
?>

	<div id="secondary" class="widget-area widget-area-right">

		<?php if ( is_active_sidebar( 'gym-master-sidebar-right' ) ) :
			dynamic_sidebar( 'gym-master-sidebar-right' ); 
		endif; ?>
		
	</div>

<?php } ?>