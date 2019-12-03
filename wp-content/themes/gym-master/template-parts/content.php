<?php
/**
 * Template part for displaying posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package gym-master
 */
 $archive_section_button_text = esc_html(get_theme_mod('gym_master_archive_submit',esc_html__('Read More','gym-master')));
 $post_formate =	get_post_format( get_the_ID() ); 
?>

<div id="post-<?php the_ID(); ?>" <?php post_class( 'blog-item' ); ?>>
	<div class="blog-item">		
		<div class="blog-thumbnail post-formate <?php echo esc_attr( $post_formate );?>">
			 <figure>
				<?php gym_master_post_thumbnail(); ?>
			</figure>
		</div>
		
		<div class="blog-contain">
	        <header class="entry-header">
			<?php 
				
			the_title( '<h3 class="entry-title"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h3>' );
				
			?>
	        </header>
	        <?php
	        $post_formate =	get_post_format( get_the_ID() ); 
	        ?>
	        <div class="entry-meta">

				<?php 
					gym_master_posted_by();

					gym_master_posted_on(); 
				?>
	            
	        </div>
	        <div class="entry-content">
	       		<?php 
	       			 echo esc_html(wp_trim_words(get_the_content(),20,'...')); 
       			?> 
       		</div><!-- .entry-content -->
	   			<?php if (get_theme_mod('gym_master_archive_section_redmore_optons','no')=='yes') { ?>
	   				<?php if($archive_section_button_text){ ?>
	   					<div class="read-more"><a href="<?php the_permalink(); ?>"><?php echo esc_html($archive_section_button_text); ?></a></div>
	   				<?php } ?> 
				<?php } ?>
		</div>
	</div>
</div><!-- #post-<?php the_ID(); ?> -->
