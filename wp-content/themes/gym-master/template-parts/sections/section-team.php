<?php
/**
* Team Section
*
* @package gym-master
* 
*/
if (get_theme_mod('gym_master_team_option','no')=='yes') {  ?>
	<?php
	$image = get_theme_mod('gym_master_team_image',''); 
	$bg_class = '';
	if ( !empty( $image ) ){
		$bg_class = 'background-image';
	}
	?>
	<section class="team-section default-padding <?php echo esc_attr( $bg_class );?>">
    	<?php if( !empty( $image) ) { ?>
       		 <div class="section-bg-img" style="background-image: url( <?php echo esc_url($image); ?> )"></div>	
    	<?php } ?>
    	
	    <div class="container">

	    	<?php $team_page  = get_theme_mod('gym_master_team_page',0); ?>

	    	<!-- ************************** Title  And Subtitle*****************-->

	    	<?php   if( !empty( $team_page ) ): 

	    		$args = array (                                 
	    		'page_id'           => absint( $team_page ),
	    		'post_status'       => 'publish',
	    		'post_type'         => 'page',
	    		);

	    	$loop_team = new WP_Query($args);

	    	if ( $loop_team->have_posts() ) : ?>

		        <div class="section-intro animated wow fadeInDown" data-wow-delay="0.5s">
		            <header class="entry-header">
		            	<?php while ($loop_team->have_posts()) : $loop_team->the_post();?>
			                <h2 class="entry-title"><?php the_title(); ?></h2>
			                <h4 class="entry-subtitle">
			                	<span>
			                		<?php echo esc_html(wp_trim_words(get_the_content(),10,'...')); ?>
			                	</span>
			                </h4>
	               		 <?php endwhile; 
	                		   wp_reset_postdata();?> 
		            </header>
		        </div>
		        
		     <?php endif;
		     endif;
		     ?>    
	        <div class="team-wrapper animated wow fadeInUp" data-wow-delay="0.5s">
	        	<?php
	        	$team_section_cat = get_theme_mod('gym_master_team_section_cat',0);
	        	$number = get_theme_mod('gym_master_team_num',5);

	        	 if ( class_exists( 'Gym_Master_Components' ) ) { 	
	        		$args = array(
	        				'post_type' => 'teams',
	        				'posts_per_page' => absint( $number ),  
	        			);	
	        			if ( !empty( $team_section_cat ) ){

	        				$args['tax_query' ] = array(
	        					array(
	        						'taxonomy' => 'team-categories',
	        						'field'    => 'term_id',
	        						'terms'    => absint( $team_section_cat ),  
	        					)
	        				);
	        			}
	        	} else{
	        		$args = array(
	        			'post_type' => 'post', 
	        			'posts_per_page' => absint( $number ),  
	        		);	
	        		if ( !empty( $team_section_cat ) ){
	        				$args['category_name' ] = esc_html( $team_section_cat );
	        		}
	        	} 
				$loop = new WP_Query( $args );
	            if($loop->have_posts() ) {

	            	while($loop->have_posts() ) {

	            		$loop->the_post(); 
	            		
					 	$member_designation = get_post_meta( $post->ID, 'member_designation', true );
                        $member_facebook_link = get_post_meta( $post->ID, 'member_facebook_link', true);
                        $member_twitter_link = get_post_meta( $post->ID, 'member_twitter_link', true);
                        $member_google_plus_link = get_post_meta( $post->ID, 'member_google_plus_link', true);
                        $member_instagram_link = get_post_meta( $post->ID, 'member_instagram_link', true);
                        $member_linkedin_link = get_post_meta( $post->ID, 'member_linkedin_link', true);
                        $member_youtube_link = get_post_meta( $post->ID, 'member_youtube_link', true);
                        $member_pinterest_link = get_post_meta( $post->ID, 'member_pinterest_link', true); 
	            		$image = wp_get_attachment_image_src( get_post_thumbnail_id(),'gym-master-team-image', true );?>
					            <div class="team-member">
									<?php
									if($member_facebook_link || 
	                                $member_twitter_link || 
	                                $member_google_plus_link || 
	                                $member_youtube_link || 
	                                $member_instagram_link || 
	                                $member_linkedin_link || 
	                                $member_pinterest_link){ ?>

						                <div class="social-links">
						                    <ul>
						                    	<?php
						                    	if ( !empty( $member_facebook_link ) ){?>
						                    		<li>
						                    				<a target="_blank" href="<?php echo esc_url($member_facebook_link) ?>"></a>
						                    		</li>
						                    	<?php } ?>
						                    	<?php
						                    	 if ( !empty( $member_twitter_link ) ){?>
						                    		<li>
						                    			<a target="_blank" href="<?php echo esc_url($member_twitter_link) ?>"></a>
						                    		</li>
						                    	<?php } ?>
						                    	<?php 
						                    	 if ( !empty( $member_google_plus_link ) ){?>
						                    		<li>
						                    			<a target="_blank" href="<?php echo esc_url($member_google_plus_link) ?>"></a>
						                    		</li>
						                    	<?php } ?>
						                    	<?php
						                    	  if ( !empty( $member_youtube_link ) ){?>
						                    		<li>
						                    			<a target="_blank" href="<?php echo esc_url($member_youtube_link) ?>"></a>
						                    		</li>
						                    	<?php } ?>
						                    	<?php
						                    	 if ( !empty( $member_instagram_link ) ){?>
						                    		<li>
						                    			<a target="_blank" href="<?php echo esc_url($member_instagram_link) ?>"></a>	
						                    		</li>
						                    	<?php } ?>
						                    	<?php
						                    	 if ( !empty( $member_linkedin_link ) ){?>
						                    		<li>
						                    			<a target="_blank" href="<?php echo esc_url($member_linkedin_link) ?>"></a>
						                    			
						                    		</li>
						                    	<?php } ?>
						                    	<?php 
						                       	if ( !empty( $member_pinterest_link ) ){?>
						                    	<li>
						                    	
						                    	   	<a target="_blank" href="<?php echo esc_url($member_pinterest_link) ?>"></a>
						                    		
						                    	</li>
						                    	<?php } ?>
						                    	
						                    </ul>
						                    
						                </div>
						                
						                <?php } ?>

						                <div class="team-image">
						                    <figure>
						                      <img src="<?php echo esc_url($image[0]);?>" />
						                    </figure>
						                </div>
						                <div class="member-info">
						                    <h4 class="member-name"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h4>
						                    <?php if($member_designation){ ?>
						                    	<h6 class="member-position"><?php echo esc_html($member_designation); ?></h6>
						                    <?php } ?>
						                    <a href="<?php the_permalink(); ?>" class="icon"></a>
						                </div>
					            </div>
						<?php }
						wp_reset_postdata();
				} ?>               
	        </div>
	    </div>
	</section><!--.team-section-->

<?php } ?>	