<?php
/**
* Shedule Section
*
* @package gym-master
* 
*/
?>
<?php if (get_theme_mod('gym_master_shedule_option','no')=='yes') { ?>
	<?php
	$image = get_theme_mod('gym_master_schedule_image',''); 
	$bg_class = '';
	if ( !empty( $image ) ){
		$bg_class = 'background-image';
	}
	?>
	<section class="timetable-section default-padding <?php echo esc_attr( $bg_class );?>">
		<?php if( !empty( $image) ) { ?>
	   		 <div class="section-bg-img" style="background-image: url( <?php echo esc_url($image); ?> )"></div>	
		<?php } ?>
	    <div class="container">

	        <div class="time-schedule-wrapper">

	        	<?php $schedule_page  = get_theme_mod('gym_master_shedule_page',0); ?>

	        	<!-- ************************** Title  And Subtitle*****************-->
				<?php   if( !empty( $schedule_page ) ): 

					$args = array (                                  
					'page_id'           => absint( $schedule_page ),
					'post_status'       => 'publish',
					'post_type'         => 'page',
					);

				$loop_shedule = new WP_Query($args);

				if ( $loop_shedule->have_posts() ) : ?>

		            <div class="section-intro animated wow fadeInDown" data-wow-delay="0.5s">

		            	<?php while ($loop_shedule->have_posts()) : $loop_shedule->the_post();?>

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

	            <div class="time-schedule">
	            	<?php
	            	$shedule_section_cat = get_theme_mod('gym_master_sdhedule_section_cat',0);
	            	$number = get_theme_mod('gym_master_shedule_num',5);
	            	 if ( class_exists( 'Gym_Master_Components' ) ) { 	
	            		$args = array(
	            				'post_type' => 'services',
	            				'posts_per_page' => absint( $number ),  
	            			);	
	            			if ( !empty( $shedule_section_cat ) ){

	            				$args['tax_query' ] = array(
	            					array(
	            						'taxonomy' => 'services-category',
	            						'field'    => 'term_id',
	            						'terms'    => absint( $shedule_section_cat ),  
	            					)
	            				);
	            			}
	            	} 
	            	
					$loop = new WP_Query( $args );
		            if($loop->have_posts() ) {

		            	while($loop->have_posts() ) {
		            		$loop->the_post(); 

		            		$first_descriptions = get_post_meta( $post->ID, 'gym_master_feature_one', true );

		            		$post_idd = absint( $id );
	            			$postt = get_post( $post_idd );
	            			if( ! $postt instanceof WP_Post ) {
	            			return;
	            			} 
		            		$service_meta_fields = get_post_meta( $post_idd, 'service_meta_fields', true ); 
		            		$service_meta_fields = json_decode($service_meta_fields);

		            		if( !empty( $service_meta_fields->rwspt_plan_name) ) { 
		            		     $count = count($service_meta_fields->rwspt_plan_name); 
		            		}
		            		?>
			                <div class="time-schedule-item animated wow fadeInLeft" data-wow-delay="0.5s">
			                	<?php if($first_descriptions){ ?>
			                   		 <h3 class="entry-title"><?php echo esc_html($first_descriptions); ?></h3>
			                    <?php } ?>
			                    <div class="schedule-content">

									<?php if( !empty( $service_meta_fields->rwspt_plan_name) ) { ?>
									    <?php foreach( $service_meta_fields->rwspt_plan_name as $key=>$val ) : ?>

					                        <div class="schedule-row">

					                        	<?php if( !empty($service_meta_fields->rwspt_plan_name[$key]) ) { ?>
													<span class="day">
												     	 <?php echo esc_html( $service_meta_fields->rwspt_plan_name[$key] ); ?>
													</span>
												<?php } ?> 
												<?php if( !empty( $service_meta_fields->rwspt_three[$key] ) ) { ?>
													<span class="day-time">
														<?php echo esc_html( $service_meta_fields->rwspt_three[$key] ); ?>
													</span>
												<?php } ?>    
												<?php if( !empty( $service_meta_fields->rwspt_price_sym[$key] ) ) { ?>
													<span class="evening-time">
												        <?php echo esc_html( $service_meta_fields->rwspt_price_sym[$key] ); ?>
													</span> 
												 <?php } ?> 

					                   		</div>

									<?php endforeach; ?>
									<?php } ?>

	                    		 </div>
			                </div>
			            	<?php }
			            	wp_reset_postdata();
			            } ?>     
	            </div>

	        </div>

	    </div>

		<?php
			$images = get_theme_mod('gym_master_schedule_bg_image','');
		?>
	    <div class="time-schedule-image">

	        <figure class="animated wow fadeInDown" data-wow-delay="0.5s">
	           <img src="<?php echo esc_url($images);?>" />
	        </figure>

	    </div>

				  

	</section><!--.timetable-section-->

<?php } ?>