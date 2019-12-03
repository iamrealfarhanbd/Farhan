<?php
/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package gym-master
 */
?>
<div class="post-item-wrap">
    <div class="post-image">
        <figure>
            <?php
            if (has_post_thumbnail()): ?>
                <figure class="course-thumbnail">   
                    <?php the_post_thumbnail();?>
                </figure>
            <?php endif; ?>
        </figure>
    </div>
    <div class="entry-content">
        <?php 
        the_title( '<h2 class="entry-title">', '</h2>' );
        ?>
        <?php 
            the_content( '<p class="entry-content">', '</p>' );
         ?>
    </div>  
</div><!--.post-item-wrap-->