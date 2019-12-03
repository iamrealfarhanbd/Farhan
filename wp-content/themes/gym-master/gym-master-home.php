<?php
/**
 * The template for displaying all pages.
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site will use a
 * different template.
 *
 * Template Name: Home Page
 * @package gym-master
 */
get_header(); ?>

        <div id="primary" class="content-area">

            <main id="main" class="site-main" role="main">

	            <?php
	        	/** Services Section **/
          	  	get_template_part( 'template-parts/sections/section', 'service' );

	  		  	/** Process Section **/
  	  	  	  	get_template_part( 'template-parts/sections/section', 'process' );

                /** Info Section **/
                get_template_part( 'template-parts/sections/section', 'info' );

                /** Video Section **/
                get_template_part( 'template-parts/sections/section', 'video' );

                /** Team Section **/
                get_template_part( 'template-parts/sections/section', 'team' );

                /** Testimonial Section **/
                get_template_part( 'template-parts/sections/section', 'testimonial' );

                /** Call To Section **/
                get_template_part( 'template-parts/sections/section', 'call-to' );
                if ( class_exists( 'Gym_Master_Components' ) ) {
                    /** Schedule Section **/
                    get_template_part( 'template-parts/sections/section', 'shedule' );
                }
                /** Blog Section **/
                get_template_part( 'template-parts/sections/section', 'blog' );

	          	?>
                
            </main><!-- #main -->
        </div><!-- #primary -->

<?php get_footer();?>
