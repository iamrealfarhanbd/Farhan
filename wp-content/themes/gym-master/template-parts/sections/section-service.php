<?php
/**
* Service Section
*
* @package gym-master
* 
*/
if (get_theme_mod('gym_master_service_option','no')=='yes') {  ?>

	<section class="service-section default-padding">

	    <div class="container">

	    	<?php $service_page  = get_theme_mod('gym_master_servie_page',0); ?>

	    	<!-- ************************** Title  And Subtitle*****************-->

			<?php   if( !empty( $service_page ) ): 

				$args = array (                                 
				'page_id'           => absint( $service_page ),
				'post_status'       => 'publish',
				'post_type'         => 'page',
				);

			$loop_page = new WP_Query($args);

			if ( $loop_page->have_posts() ) : ?>	

		        <div class="section-intro animated wow fadeInDown" data-wow-delay="0.5s">

					<?php while ($loop_page->have_posts()) : $loop_page->the_post();?>

			            <header class="entry-header">
			                <h2 class="entry-title"><?php the_title(); ?></h2>
			                <h4 class="entry-subtitle"><span><?php echo esc_html(wp_trim_words(get_the_content(),10,'...')); ?></span></h4>
			            </header>

					<?php endwhile; 
					wp_reset_postdata();?> 
		        </div>
	        <?php endif;
	        endif;
	        ?>

	        <!-- ************************** Feature Section Category *****************-->

	        <div class="service-wrap">
				<?php
				$service_section_cat = get_theme_mod('gym_master_service_section_cat',0);
				$number = get_theme_mod('gym_master_service_num',5);
				$readmore = get_theme_mod( 'gym_master_services_readmore',esc_html__('View Detail','gym-master') );
				 if ( class_exists( 'Gym_Master_Components' ) ) { 	
					$args = array(
							'post_type' => 'services',
							'posts_per_page' => absint( $number ),  
						);	
						if ( !empty( $service_section_cat ) ){

							$args['tax_query' ] = array(
								array(
									'taxonomy' => 'services-category',
									'field'    => 'term_id',
									'terms'    => absint( $service_section_cat ),  
								)
							);
						}
				} else{
						$args = array(
							'post_type' => 'post', 
							'posts_per_page' => absint( $number ),  
						);	
						if ( !empty( $service_section_cat ) ){
								$args['category_name' ] = esc_html( $service_section_cat );
						}
					}
				$loop = new WP_Query( $args );
				
	            if($loop->have_posts() ) {

	            	while($loop->have_posts() ) {
	            		$loop->the_post(); 
	            		$image = wp_get_attachment_image_src( get_post_thumbnail_id(),'gym-master-service-image', true );?>
				            <div class="service-item animated wow fadeInLeft" data-wow-delay="0.5s">
				                <div class="service-thumbnail">
				                    <figure>
			                    	  <a href="#">
			                            <img src="<?php echo esc_url($image[0]);?>" />
			                           </a> 
				                    </figure>
				                    <?php if(!empty($readmore)){ ?>
				                   		 <a href="<?php the_permalink();?>" class="button">
				                   		 	<span><?php echo esc_html( $readmore );?></span>
				                   		 </a>
									 <?php } ?>
				                </div>
				                <div class="service-content">
				                    <h3 class="entry-title">
				                       <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
				                    </h3>
				                    <div class="entry-content">
				                        <?php echo esc_html(wp_trim_words(get_the_content(),45,'&hellip;')); ?>
				                    </div>
				                </div>
				            </div>
					<?php }
					wp_reset_postdata();
				} ?>            
	        </div>
	    </div>
	</section><!--.service-section-->

<?php } ?>