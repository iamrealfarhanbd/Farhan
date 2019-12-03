<?php
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package gym-master
 */

get_header();
?>
<div class="container">

	<div id="primary">

		<main id="main" class="site-main">

			<?php
			while ( have_posts() ) :
				the_post();

				get_template_part( 'template-parts/content', 'page' );

				// If comments are open or we have at least one comment, load up the comment template.
				if ( comments_open() || get_comments_number() ) :
					comments_template();
				endif;

			endwhile; // End of the loop.
			?>

		</main><!-- #main -->
		
	</div><!-- #primary -->
	
	<?php
	global $post;

	$sidebar = get_post_meta($post->ID, 'gym_master_sidebar_layout', true);

	if ( empty( $sidebar ) ){
		$sidebar = 'right-sidebar';
	}
	$custom_class = 'custom-col-8';
	if( 'no-sidebar' == $sidebar ){
		$custom_class = 'custom-col-12';
	} elseif ( 'both-sidebar' == $sidebar ) {
		$custom_class = 'custom-col-4';
	}else{
		$custom_class = 'custom-col-8';
	}
	if($sidebar=='both-sidebar' || $sidebar=='left-sidebar'){
		get_sidebar('left');
	} 
	if($sidebar=='both-sidebar' || $sidebar=='right-sidebar'){
		get_sidebar();
	}
	?> 
		 
	
</div>
<?php
get_footer();
