<?php
/**
 * The template for displaying 404 pages (not found)
 *
 * @link https://codex.wordpress.org/Creating_an_Error_404_Page
 *
 * @package gym-master
 */
get_header();
?>
<div id="primary" class="content-area">

	<main id="main" class="site-main">

		<div id="content" class="site-content">

			<div id="primary">

				<main id="main" class="site-main">

					<section class="error-404 not-found">
						
						<div class="section-bg-img" style="background-image: url('<?php echo esc_url(get_theme_mod('gym_master_404_image','')); ?>') ";>
						</div>
						<div class="container wow fadeInUp animated" data-wow-delay="0.5s">
							<h2><?php  esc_html_e('404','gym-master')?></h2>
							<h4>
								<?php  esc_html_e('Page Not Found','gym-master')?>
							</h4>
							<a class="button" href="<?php echo esc_url( home_url( '/' ) ); ?>"><span><?php echo esc_html__('back to home','gym-master') ?></span></a>

						</div>

					</section>

				</main><!--.site-main-->

			</div><!--#primary-->

		</div><!--.site-content-->

	</main><!-- #main -->

</div><!-- #primary -->
<?php get_footer();
