<?php
/**
* Blog  Section
*
* @package gym-master
* 
*/
?>
<?php 
if (get_theme_mod('gym_master_blog_option','no')=='yes') { 
	$image = get_theme_mod('gym_master_blog_image','');
	$bg_class = '';
	if ( !empty( $image ) ){
		$bg_class = 'background-image';
	}
	?>
	<section class="blog-section default-padding <?php echo esc_attr( $bg_class );?>" >
		<?php if( !empty( $image) ) { ?>
	   		 <div class="section-bg-img" style="background-image: url( <?php echo esc_url($image); ?> ) "></div>
		<?php } ?>
		
	    <div class="container">

	    	<?php $blog_page  = get_theme_mod('gym_master_blo_page',0); ?>

	    	<!-- ************************** Title  And Subtitle*****************-->

			<?php   if( !empty( $blog_page ) ): 

				$args = array (                                 
				'page_id'           => absint( $blog_page ),
				'post_status'       => 'publish',
				'post_type'         => 'page',
				);

				$loop_blog = new WP_Query($args);

				if ( $loop_blog->have_posts() ) : ?>

			        <div class="section-intro wow fadeInDown" data-wow-delay="0.5s">
			        	<?php while ($loop_blog->have_posts()) : $loop_blog->the_post();?>
							
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
		        
		        <div class="blog-wrap wow fadeInDown" data-wow-delay="0.5s">
		        	<?php
		        	$blog_section_cat = get_theme_mod('gym_master_slider_blog_cat',0);
		        	$number = get_theme_mod('gym_master_blog_num',5);
		        	$readmore = get_theme_mod( 'gym_master_blog_readmore',esc_html__('Read More','gym-master') );
		        	?>
		            <div class="row">
			        	<?php
			        	if( !empty( $blog_section_cat) ) {
			        		$loop = new WP_Query(
			        		array(
			        			'post_type' => 'post',    
			        			'category_name' => esc_html($blog_section_cat),
			        			'posts_per_page' => absint( $number ),  
			        			)
			        		);
			        	}else{
			        	$loop = new WP_Query( array( 'post_type'=>'post','posts_per_page'=>absint( $number ), ) );
			        	}   
			        	if($loop->have_posts() ) {

			    		while($loop->have_posts() ) {
				    		$loop->the_post();
				    		$post_formate =	get_post_format( get_the_ID() ); 
				    		$image = wp_get_attachment_url( get_post_thumbnail_id());
				    		
							?>
			                <div class="blog-details">

			                    <div class="blog-item">

			                        <div class="blog-thumbnail post-formate <?php echo esc_attr( $post_formate );?>">
			                            <figure>
			                            	 <img src="<?php echo esc_url($image);?>" />
			                            </figure>
			                        </div>
			                        <div class="blog-contain">
			                            <header class="entry-header">
			                                <h3 class="entry-title">
			                                    <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
			                                </h3>
			                            </header>

			                            <div class="entry-meta">

			                            	<?php if (get_theme_mod('gym_master_blog_user_option','no')=='yes') { ?>
				                                <?php gym_master_posted_by(); ?>
			                            	<?php } ?>

			                                <?php if (get_theme_mod('gym_master_blog_date_option','no')=='yes') { ?>
				                              <?php  gym_master_posted_on(); ?>
			                            	<?php } ?>

			                            </div>

			                            <div class="enrty-content">
			                               <?php echo esc_html(wp_trim_words(get_the_content(),16,'.')); ?> 
			                            </div>
			                            <?php if(!empty($readmore)){ ?>
			                            	 <div class="read-more">
				                            	 <a href="<?php the_permalink();?>"><?php echo esc_html( $readmore );?>
				                            	</a>
			                            	</div>
			                            <?php } ?>	
			                        </div>
			                    </div>
			                    
			                </div>

			            <?php 
			          	  } 
		           	 wp_reset_postdata();
	            	}
	         		?>                                        
		            </div>
		        </div>
	    </div>
	    
	</section><!--.blog-section-->

<?php } ?>	