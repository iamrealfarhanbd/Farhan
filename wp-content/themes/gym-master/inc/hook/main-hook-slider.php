<?php
/**
 * Gym Master Slider  Functions And Definations
 *
 * @package gym-master
 */
 function gym_master_slider_callback(){
 	
 	if(get_theme_mod( 'gym_master_slider_option','no' ) == 'yes'):
 	$slider = get_theme_mod('gym_master_slider_section_cat',0);
 	$number = get_theme_mod('gym_master_slider_num',5);
 	$slider_readmore = esc_html(get_theme_mod( 'gym_master_slider_readmore',esc_html__('Learn More','gym-master') ) );	
?>
	<section class="featured-slider ">
		
		<?php
			if( !empty( $slider) ) {
				$loop = new WP_Query(
				array(
				'post_type' => 'post',    
				'category_name' => esc_html($slider),
				'posts_per_page' => absint( $number ),  
				)
				);
			}else{
			$loop = new WP_Query( array( 'post_type'=>'post','posts_per_page'=>absint( $number ), ) );
		}   
		?>
	    <div class="featured-banner">

	    	<?php
	    	if($loop->have_posts() ) {

	    		while($loop->have_posts() ) {
		    		$loop->the_post();
		    		$image = wp_get_attachment_url( get_post_thumbnail_id(), 'gym-master-slider-image', false );
		    		?>
			        <div class="featured-item" style="background-image: url( <?php  echo esc_url($image); ?> ) ">
			            <div class="feature-contain-wrap" >
			                <div class="container">
			                    <div class="feature-contain">
			                        <h2 class="entry-title">
			                            <?php the_title();?>
			                        </h2>
										<?php if(!empty($slider_readmore)){
										?>
										<a href="<?php the_permalink();?>" class="button"><span><?php echo esc_html($slider_readmore); ?></span></a>
										<?php
										}
										?>
			                    </div>
			                </div>
			            </div>
			        </div>
			       <?php 
		       }
		       wp_reset_postdata();
		       }
		       ?> 

	    </div><!--featured slider-->

	</section><!-- featured-slider ends here -->

<?php endif;   ?>
	
 <?php }
 add_action('gym_master_slider_callback_action','gym_master_slider_callback');		