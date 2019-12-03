<?php
/**
* Testimonial Section
*
* @package gym-master
* 
*/

if (get_theme_mod('gym_master_testiminial_option','no')=='yes') {  ?>
	
	<?php
	$image = get_theme_mod('gym_master_testimonial_image',''); 
	$bg_class = '';
	if ( !empty( $image ) ){
		$bg_class = 'background-image';
	}
	?>
	<section class="testimonial-section default-padding <?php echo esc_attr( $bg_class );?>">
		
    	<?php if( !empty( $image) ) { ?>
       		 <div class="section-bg-img" style="background-image: url( <?php echo esc_url($image); ?> )"></div>	
    	<?php } ?>

	    <div class="testimonial-wrap  animated wow fadeInDown" data-wow-delay="0.5s">

	    	<!-- ************************** Starting Caegory Here *****************-->
			<?php
			$testimonial_section_cat = get_theme_mod('gym_master_testimonial_section_cat',0);
			$number = get_theme_mod('gym_master_testimonial_num',5);

			 if ( class_exists( 'Gym_Master_Components' ) ) { 	
				$args = array(
						'post_type' => 'testimonials',
						'posts_per_page' => absint( $number ),  
					);	
					if ( !empty( $testimonial_section_cat ) ){

						$args['tax_query' ] = array(
							array(
								'taxonomy' => 'testimonials-categories',
								'field'    => 'term_id',
								'terms'    => absint( $testimonial_section_cat ),  
							)
						);
					}
			} else{
				$args = array(
					'post_type' => 'post', 
					'posts_per_page' => absint( $number ),  
				);	
				if ( !empty( $testimonial_section_cat ) ){
						$args['category_name' ] = esc_html( $testimonial_section_cat );
				}
			}
				$loop = new WP_Query( $args );
				if($loop->have_posts() ) {

					while($loop->have_posts() ) {
						$loop->the_post();
						$member_designation = get_post_meta( $post->ID, 'testimonial_member_designation', true );
						 ?>
						<div class="testimonial-item">
							<div class="testimonial-content">
							    <?php echo esc_html(wp_trim_words(get_the_content(),45,'&hellip;')); ?>
							</div>
							<h3 class="client-name"><?php the_title(); ?></h3>
							<?php if($member_designation){ ?>
								<h6 class="designation"><?php echo esc_html($member_designation); ?></h6>
							<?php } ?>
						</div>
					<?php }
				wp_reset_postdata();
				} ?>         
	    </div>
	</section><!--.testimonial-section-->

<?php } ?>		