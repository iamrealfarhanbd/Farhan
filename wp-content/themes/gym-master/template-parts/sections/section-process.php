<?php
/**
* Process Section
*
* @package gym-master
* 
*/
if (get_theme_mod('gym_master_process_option','no')=='yes') {  ?>
	<?php
	$image = get_theme_mod('gym_master_process_image','');
	$bg_class = '';
	if ( !empty( $image ) ){
		$bg_class = 'background-image';
	} 
	?>
	<section class="process-section <?php echo esc_attr( $bg_class );?>">
		<?php if( !empty( $image) ) { ?>
	   		 <div class="section-bg-img" style="background-image: url( <?php echo esc_url($image); ?> )"></div>	
		<?php } ?>
	    <div class="container">
	        <div class="process-section-right">

	        	<?php $process_page  = get_theme_mod('gym_master_process_page',0); ?>

	        	<!-- ************************** Title  And Subtitle*****************-->

	        	<?php   if( !empty( $process_page ) ): 

	        		$args = array (                                 
	        		'page_id'           => absint( $process_page ),
	        		'post_status'       => 'publish',
	        		'post_type'         => 'page',
	        		);

	        	$loop_process = new WP_Query($args);

	        	if ( $loop_process->have_posts() ) : ?>

		            <div class="section-intro animated wow fadeInDown" data-wow-delay="0.5s">
		            	<?php while ($loop_process->have_posts()) : $loop_process->the_post();?>
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
		         <!-- ************************** Starting Caegory Here *****************-->
		         <?php
		         $process_section_cat = get_theme_mod('gym_master_process_section_cat',0);
		         $number = get_theme_mod('gym_master_process_num',5);
		         ?>
		            <div class="process-content-wrap">
		            	<?php
		            	if( !empty( $process_section_cat) ) {
		            		$loop = new WP_Query(
		            		array(
		            			'post_type' => 'post',    
		            			'category_name' => esc_html($process_section_cat),
		            			'posts_per_page' => absint( $number ),  
		            			)
		            		);
		            	}else{
		            	$loop = new WP_Query( array( 'post_type'=>'post','posts_per_page'=>absint( $number ), ) );
		            	}   
		            	if($loop->have_posts() ) {

		            	while($loop->have_posts() ) {
		            	$loop->the_post(); 
		            	?>
			                <div class="process-content  animated wow fadeInUp" data-wow-delay="0.5s">
			                    <h3 class="entry-title"> <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
			                    <div class="entry-content"><?php echo esc_html(wp_trim_words(get_the_content(),15,'&hellip;')); ?></div>
			                </div>
			            <?php 
			            } 
			            wp_reset_postdata();
		            	}
	            	?>
		            </div>

	        </div>
	    </div>
	</section><!--.process-section-->

	<?php } ?>	