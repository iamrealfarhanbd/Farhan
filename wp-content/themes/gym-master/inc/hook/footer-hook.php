<?php
/**
 * Gym Master Header Functions And Definations
 *
 * @package gym-master
 */
function gym_master_footer_hook_callback(){ ?>

	<footer id="colophon" class="site-footer">
		<?php
		if (get_theme_mod('gym_master_footer_option','no')=='yes') {
			$image = get_theme_mod('gym_master_footer_image','');
		 ?>
		    <div class="footer-top  default-padding" >
		    	<?php if( !empty( $image) ) { ?>
			        <div class="footer-bg-img" style="background-image: url( <?php echo esc_url($image); ?> ) ">
			        </div>
		        <?php } ?>
		        <div class="container">
		        	<?php if ( is_active_sidebar( 'gym-master-footer' ) ) : ?>
			        	<div class="widget-wrapper-top">
			        		 <div class="subcrib-wrapper">
			        			<?php dynamic_sidebar('gym-master-footer'); ?>
			        		</div>
			        	</div>
			        <?php endif; ?>	
		        	<div class="footer-info-section">
		        		<?php if ( is_active_sidebar( 'gym-master-footer-two' ) ) : ?>
		        			 <div class="map">
		        			 	 <?php dynamic_sidebar('gym-master-footer-two'); ?>  
			        	  	</div>
		        	  	 <?php endif; ?>
		        	  	 <?php if ( is_active_sidebar( 'gym-master-footer-three' ) ) : ?>	
			        	    <div class="widget-holder">
			        	    	<?php dynamic_sidebar('gym-master-footer-three'); ?>
			        	    </div>
		        	    <?php endif; ?>
		        	</div>
		        </div>
		    </div>
		<?php } ?>    
		<?php if (get_theme_mod('gym_master_button_footer_option','yes')=='yes') { ?>
	    <div class="footer-bottom">
	        <div class="container">
	        	<?php  if (get_theme_mod('gym_master_footer_social_option','no')=='yes') {
	        	  if ( has_nav_menu( 'social-media' ) ) : ?>
		            <div class="footer-bottom-top">
		                <div class="social-links">
							<ul>
								<?php wp_nav_menu( array(
								'theme_location'  => 'social-media',
								'fallback_cb'     => 'wp_page_menu',
								) ); ?>
							</ul>
		                </div>
		            </div>
	              <?php endif; ?>
	            <?php } ?>

				<?php 
					$powered_by_text = sprintf( esc_html__( 'Theme of %s', 'gym-master' ), '<a target="_blank" rel="designer" href="https://rigorousthemes.com/">Rigorous Themes</a>' ); 
				?>	
				<div class="site-generator">
		            <span class="copy-right"><?php echo wp_kses_post($powered_by_text); 
		            if ( function_exists( 'the_privacy_policy_link' ) ) {
							the_privacy_policy_link( ' | ' );
					}?></span>
				</div>
				
	        </div>
	    </div>
	<?php } ?>
	</footer><!-- footer ends here -->
<?php }
add_action('gym_master_footer_callback_action','gym_master_footer_hook_callback');		
