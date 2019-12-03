<?php
/**
* Intro Section
*
* @package gym-master
* 
*/
if (get_theme_mod('gym_master_info_option','no')=='yes') {  ?>
	<?php
	$image = get_theme_mod('gym_master_info_image',''); 
	$bg_class = '';
	if ( !empty( $image ) ){
		$bg_class = 'background-image';
	}
	?>
	<section class="client-info-section <?php echo esc_attr( $bg_class );?>">

		<?php if( !empty( $image) ) { ?>
	   		 <div class="section-bg-img" style="background-image: url( <?php echo esc_url($image); ?> )"></div>	
		<?php } ?>

	    <div class="container">
	        <div class="client-info-left">
	            <div class="section-intro  animated wow fadeInDown" data-wow-delay="0.5s">

	            	<?php $info_page  = get_theme_mod('gym_master_info_page',0); ?>

	            	<!-- ************************** Title  And Subtitle*****************-->
	            	<?php   if( !empty( $info_page ) ): 

	            		$args = array (                                 
	            		'page_id'           => absint( $info_page ),
	            		'post_status'       => 'publish',
	            		'post_type'         => 'page',
	            		);

	            	$loop_info = new WP_Query($args);

	            	if ( $loop_info->have_posts() ) : ?>

		                <header class="entry-header">

		                	<?php while ($loop_info->have_posts()) : $loop_info->the_post();?>
			                    <h2 class="entry-title"><?php the_title(); ?></h2>
			                    <h4 class="entry-subtitle"><span><?php echo esc_html(wp_trim_words(get_the_content(),13,'...')); ?></span></h4>

                    		 <?php endwhile; 
                     		   wp_reset_postdata();?>

		                </header>

		            <?php endif;
		            endif;
		            ?>     
	            </div>

	            <!-- ************************** Starting Inner Here *****************-->
	           <div class="client-info-wrap">

	               <div class="client-info-content  animated wow fadeInUp" data-wow-delay="0.5s">

		               	<?php 
							$counter_page  = get_theme_mod('gym_master_counter_page_one',0);
							$first_counter_number = get_theme_mod('first_counter_number',100);
		               	  ?>
						<!-- ************************** Counter Title Subtitle and Features Image First  *****************-->

						<?php   if( !empty( $counter_page ) ): 

							$args = array (                                 
							'page_id'           => absint( $counter_page ),
							'post_status'       => 'publish',
							'post_type'         => 'page',
							);

							$loop = new WP_Query($args);

							if ( $loop->have_posts() ) : ?>	

								<?php while ($loop->have_posts()) : $loop->the_post();?>
				
				                   <h3 class="entry-title">

				                       <span class="count"> <?php echo absint($first_counter_number); ?> </span>

				                     	<a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>

				                   </h3>

				                   <div class="entry-content">
				                   		<?php echo esc_html(wp_trim_words(get_the_content(),13,'...')); ?>
				                   	</div>

			                   <?php endwhile; 
					 		   wp_reset_postdata();?>

			            <?php endif;

			            endif;

			            ?> 
		                   
	               </div>

	               <?php 
	                $counter_page_two  = get_theme_mod('gym_master_counter_page_two',0);
	                $second_counter_number = get_theme_mod('second_counter_two',200);
	                ?>
					
					<!-- ************************** Counter Title Subtitle and Features Image First  *****************-->

					<?php   if( !empty( $counter_page_two ) ): 

						$args = array (                                 
						'page_id'           => absint( $counter_page_two ),
						'post_status'       => 'publish',
						'post_type'         => 'page',
						);

						$loop = new WP_Query($args);

						if ( $loop->have_posts() ) : ?>	

							<?php while ($loop->have_posts()) : $loop->the_post();?>

				               <div class="client-info-content  animated wow fadeInUp" data-wow-delay="0.5s">
				                   <h3 class="entry-title">
				                       <span class="count"> <?php echo absint($second_counter_number); ?> </span>
				                 	  <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
				               		</h3>
				                   <div class="entry-content"><?php echo esc_html(wp_trim_words(get_the_content(),13,'...')); ?> </div>
				               </div>

                           <?php endwhile; 
        		 		   wp_reset_postdata();?>  

        		 	<?php endif;

        		 	endif;

        		 	?> 	    
					
	               <?php 
	               	$counter_page_three  = get_theme_mod('gym_master_counter_page_three',0);
	                $third_counter_three = get_theme_mod('third_counter_three',300);
	                ?>
					
					<!-- ************************** Counter Title Subtitle and Features Image First  *****************-->

					<?php   if( !empty( $counter_page_three ) ): 

						$args = array (                                 
						'page_id'           => absint( $counter_page_three ),
						'post_status'       => 'publish',
						'post_type'         => 'page',
						);

						$loop = new WP_Query($args);

						if ( $loop->have_posts() ) : ?>	

							<?php while ($loop->have_posts()) : $loop->the_post();?>  

				               <div class="client-info-content  animated wow fadeInUp" data-wow-delay="0.5s">
				                   <h3 class="entry-title">
				                       <span class="count"> <?php echo absint($third_counter_three); ?> </span>

				                	   <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>

				             		</h3>

				                   <div class="entry-content"> <?php echo esc_html(wp_trim_words(get_the_content(),13,'...')); ?> </div>

				               </div>

		                   <?php endwhile; 
				 		   wp_reset_postdata();?>  
					 		   
					 	<?php endif;

					 	endif;

					 	?>

					<?php 
					 $counter_page_four  = get_theme_mod('gym_master_counter_page_four',0);
					 $fourth_counter_number = get_theme_mod('four_counter_four',400);
					 ?>	

					 <!-- ************************** Counter Title Subtitle  *****************-->

					<?php   if( !empty( $counter_page_four ) ): 

						$args = array (                                 
						'page_id'           => absint( $counter_page_four ),
						'post_status'       => 'publish',
						'post_type'         => 'page',
						);

						$loop = new WP_Query($args);

						if ( $loop->have_posts() ) : ?>	

						<?php while ($loop->have_posts()) : $loop->the_post();?>  

			               <div class="client-info-content  animated wow fadeInUp" data-wow-delay="0.5s">
			                   <h3 class="entry-title">
			                       <span class="count"> <?php echo absint($fourth_counter_number); ?>  </span>
			                 		<a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
			              		</h3>
			                   <div class="entry-content"> <?php echo esc_html(wp_trim_words(get_the_content(),13,'...')); ?></div>
			               </div>

	                   <?php endwhile; 
			 		   wp_reset_postdata();?>  

			 	<?php endif;

			 	endif;
			 	?> 	    
	           </div>
	        </div>
	    </div>
	</section><!--.client-info-section-->
<?php } ?>		