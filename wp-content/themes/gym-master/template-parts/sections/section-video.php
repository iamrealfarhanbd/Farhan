<?php
/**
* Video Section
*
* @package gym-master
* 
*/
if (get_theme_mod('gym_master_video_option','no')=='yes') {  ?>
	<?php
	$image = get_theme_mod('gym_master_video_image',''); 
	$bg_class = '';
	if ( !empty( $image ) ){
		$bg_class = 'background-image';
	}
	?>
	<section class="video-section <?php echo esc_attr( $bg_class );?>">
    	<?php if( !empty( $image) ) { ?>
       		 <div class="section-bg-img" style="background-image: url( <?php echo esc_url($image); ?> )"></div>	
    	<?php } ?>
	    <div class="container">
	    	<?php
			$vedio_link = get_theme_mod( 'gym_master_frontpage_vedio_option','');
			$video_text = get_theme_mod( 'video_section_text',esc_html__('Fitness Video Tutorial','gym-master') );
			?>
	        <div class="video-section-wrap animated wow fadeInLeft" data-wow-delay="0.5s">
	        	<?php if($vedio_link){ ?>
	                <a class="popup-video" href="<?php echo esc_url($vedio_link);?>"> 
	                 	<i class="fa fa-caret-right" aria-hidden="true"></i>
	                </a>
	            <?php } ?>
	            <?php if(!empty($video_text)){ ?>
	           		 <h2 class="entry-title"><?php echo esc_html( $video_text );?></h2>
	            <?php } ?>
	        </div>

	    </div>
	    
	</section><!--.video-section-->

<?php } ?>		
