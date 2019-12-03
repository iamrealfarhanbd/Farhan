<?php
/**
 * Gym Master functions and definitions
 *
 * @package gym-master
 */

//=========================== Page Breadcrumbs ===================//

function gym_master_sanitize_bradcrumb($input){
    $all_tags = array(
        'a'=>array(
            'href'=>array()
        )
     );
    return wp_kses($input,$all_tags);
    
}

// Gym Master Minimal breadcrumbs settingg


if ( ! function_exists( 'gym_master_breadcrumbs' ) ) :

    function gym_master_breadcrumbs() {
       global $post;
    $showOnHome = 0; // 1 - show breadcrumbs on the homepage, 0 - don't show

    $delimiter = '&gt;';

    $showCurrent = 1; // 1 - show current post/page title in breadcrumbs, 0 - don't show
    $homeLink = esc_url( home_url() );

    if (is_home() || is_front_page()) {

        if ($showOnHome == 1)
            echo '<li id="" class="trail-item trail-begin"><a href="' . esc_url($homeLink) . '">' . esc_html__('Home', 'gym-master') . '</a></li>';
    } else {

        echo '<li  class="trail-item trail-begin" rel="home"> <a href="' . esc_url($homeLink) . '">' . esc_html__('Home', 'gym-master') . '</a> </li>';

        if (is_category()) {
            $thisCat = get_category(get_query_var('cat'), false);
            if ($thisCat->parent != 0)
                echo esc_html(get_category_parents($thisCat->parent, TRUE, '  ') );
            echo '<li class="trail-end"> "' . esc_html(single_cat_title('', false)) . '"' . '</li>';
        } elseif (is_search()) {
            echo '<li class="trail-items trail-end">' . esc_html__('Search results for','gym-master'). '"' . get_search_query() . '"' . '</li>';
        }elseif (is_day()) {
            echo '<a href="' . esc_url(get_year_link(get_the_time('Y'))) . '">' . esc_html(get_the_time('Y')) . '</a> ' . esc_html($delimiter) . ' ';
            echo '<a href="' . esc_url(get_month_link(get_the_time('Y')), esc_html(get_the_time('m'))) . '">' . esc_html(get_the_time('F')) . '</a> ' . esc_html($delimiter) . ' ';
            echo '<span class="trail-items">' . esc_html(get_the_time('d')) . '</span>';
        } elseif (is_month()) {
            echo '<li class="trail-items">  <a href="' . esc_url(get_year_link(get_the_time('Y'))) . '">' . esc_html(get_the_time('Y')) . '</a> </li>';
            echo '<li class="trail-end">' . esc_html(get_the_time('F')) . '</li>';
        } elseif (is_year()) {
            echo '<li class="trail-end">' . esc_html(get_the_time('Y')) . '</li>';
        } elseif (is_single() && !is_attachment()) {
            if (get_post_type() != 'post') {
                $post_type = get_post_type_object(get_post_type());
                $slug = $post_type->rewrite;
                echo '<li><a href="' . esc_url($homeLink) . '/' . esc_attr($slug['slug']) . '/">' . esc_html($post_type->labels->singular_name) . '</a></li>';
                if ($showCurrent == 1)
                    echo '  ' . '<li class="trail-item trail-end">' . esc_html(get_the_title()) . '</li>';
            } else {
                $cat = get_the_category();
                $cat = $cat[0];
                $cats = wp_kses_post(get_category_parents($cat, TRUE, ' ') );
                if ($showCurrent == 0)
                    $cats = preg_replace("#^(.+)\s$delimiter\s$#", "$1", $cats);
                echo '<li class ="trail-items ">';
                echo wp_kses_post(gym_master_sanitize_bradcrumb($cats) );
                echo "</li>";
                if ($showCurrent == 1)
                    echo '<li class="trail-items trail-end">' . esc_html(get_the_title()) . '</li>';
            }
        } elseif (!is_single() && !is_page() && get_post_type() != 'post' && !is_404()) {
            $post_type = get_post_type_object(get_post_type() );
            if($post_type){
                echo '<li class="trail-items trail-end">' . esc_html($post_type->labels->singular_name) . '</li>';
            }
        } elseif (is_attachment()) {
            if ($showCurrent == 1) echo ' ' . '<li class="trail-items trail-end">' . esc_html(get_the_title()) . '</li>';
        } elseif (is_page() && !$post->post_parent) {
            if ($showCurrent == 1)
                echo '<li class="trail-items trail-end">' . esc_html(get_the_title()) . '</li>';
        } elseif (is_page() && $post->post_parent) {
            $parent_id = $post->post_parent;
            $breadcrumbs = array();
            while ($parent_id) {
                $page = get_page($parent_id);
                $breadcrumbs[] = '<li class="trail-items"> <a href="' . esc_url(get_permalink($page->ID)) . '">' . esc_html(get_the_title($page->ID)) . '</a> </li>';
                $parent_id = $page->post_parent;
            }
            $breadcrumbs = array_reverse($breadcrumbs);
            for ($i = 0; $i < count($breadcrumbs); $i++) {
                echo '<li class="trail-items" >'.wp_kses_post(gym_master_sanitize_bradcrumb($breadcrumbs[$i])).'</li>';
                
            }
            if ($showCurrent == 1)
                echo '<li class="trail-items trail-end">' . esc_html(get_the_title()) . '</li>';
        } elseif (is_tag()) {
            echo '<li class="trail-items trail-end">' . esc_html__('Posts tagged','gym-master').' "' . esc_html(single_tag_title('', false)) . '"' . '</li>';
        } elseif (is_author()) {
            global $author;
            $userdata = get_userdata($author);
            echo '<li class="trail-items trail-end">' . esc_html__('Articles posted by ','gym-master'). esc_html($userdata->display_name) . '</li>';
        } elseif (is_404()) {
            echo '<li class="trail-items trail-end">' . esc_html__('Error 404','gym-master') . '</li>';
        }
    }

    }
endif;


 if ( ! function_exists( 'gym_master_page_title' ) ) :

function gym_master_page_title(){
    ?>
        <?php if (get_theme_mod('general_section_options_section','no')=='yes') {  ?>  

            <div class="page-title-wrap"  style="background-image: url(<?php header_image(); ?>);">
    				<div role="navigation" aria-label="Breadcrumbs" class="breadcrumb-trail breadcrumbs">
    					<div class="container">

    						<ul class="trail-items">
    							<?php gym_master_breadcrumbs(); ?>
    						</ul>

    					</div>
    				</div>
            </div>
         <?php } ?>
    <?php
    }

endif;

add_action('gym_master_title','gym_master_page_title');