<?php
/**
* Call To Section
*
* @package gym-master
* 
*/
if (get_theme_mod('gym_master_call_to_option','no')=='yes') {  ?>
	<?php
	$image = get_theme_mod('gym_master_call_to_image',''); 
	$bg_class = '';
	if ( !empty( $image ) ){
		$bg_class = 'background-image';
	}
	?>
	<section class="cta-section <?php echo esc_attr( $bg_class );?>">

		<?php if( !empty( $image) ) { ?>
	   		 <div class="section-bg-img" style="background-image: url( <?php echo esc_url($image); ?> )"></div>	
		<?php } ?>

	    <div class="container">

	    	<!-- ************************** Starting Caegory Here *****************-->

	    	<?php
	    	$call_to_section_cat = get_theme_mod('gym_master_call_to_section_cat',0);
	    	$number = get_theme_mod('gym_master_call_num',5);
	    	$readmore = get_theme_mod( 'gym_master_call_to_readmore',esc_html__('View Detail','gym-master') );
	    	?>
	        <div class="cta-wrap">
	        	<?php
	        	if( !empty( $call_to_section_cat) ) {
	        		$loop = new WP_Query(
	        		array(
	        			'post_type' => 'post',    
	        			'category_name' => esc_html($call_to_section_cat),
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
		            <div class="cta-item">
		                <div class="section-intro animated wow fadeInDown" data-wow-delay="0.5s">
		                    <header class="entry-header">
		                        <h2 class="entry-title"><?php the_title(); ?></h2>
		                        <h4 class="entry-subtitle"><span><?php echo esc_html(wp_trim_words(get_the_content(),15,'&hellip;')); ?></span></h4>
		                    </header>
		                </div>
	                 	<?php if(!empty($readmore)){ ?>
			                <a href="<?php the_permalink();?>" class="button">
			                	<span><?php echo esc_html( $readmore );?></span>
			                </a>
		                 <?php } ?>
		            </div>

		            <?php 
		          	  } 
	           	 wp_reset_postdata();
            	}
         		?>     
	        </div>
	    </div>

	</section><!--.cta-section-->

	<?php } ?>		