<?php
/*
Plugin Name: Great Index
Plugin URI: http://www.zeevm.co.il
Description: creates a beautiful show/hide index. used for many purposes like business directory/profession directory and more. easy to ust. see screenshots.
Version: 0.2
Author: ze'ev ma'ayan, Eliran Efron
Author URI: http://www.zeevm.co.il
License: A "Slug" license name e.g. GPL2
/*  TM zeev.co.il */
//##########################################  
//create custom post type of the index  
//##########################################  
function portfolio_register() {
    $labels = array(
        'name' => _x('Index', 'post type general name'),
        'singular_name' => _x('index', 'index'),
        'add_new' => _x('Add New', 'Index item'),
        'add_new_item' => __('Add New Index Item'),
        'edit_item' => __('Edit Index Item'),
        'new_item' => __('New Index Item'),
        'view_item' => __('View Index Item'),
        'search_items' => __('Search Index Items'),
        'not_found' =>  __('Nothing found'),
        'not_found_in_trash' => __('Nothing found in Trash'),
        'parent_item_colon' => ''
    );
    $args = array(
        'labels' => $labels,
        'public' => true,
        'publicly_queryable' => true,
        'show_ui' => true,
        'query_var' => true,
        'rewrite' => true,
        'capability_type' => 'post',
        'hierarchical' => false,
        'has_archive' => true,
        'menu_position' => 8,
        'supports' => array('title','editor','thumbnail')
    ); 
    register_post_type( 'portfolio' , $args );
}
add_action('init', 'portfolio_register');
function create_portfolio_taxonomies() {
    $labels = array(
        'name'              => _x( 'Categories', 'taxonomy general name' ),
        'singular_name'     => _x( 'portfolio', 'taxonomy singular name' ),
        'search_items'      => __( 'Search Categories' ),
        'all_items'         => __( 'All Categories' ),
        'parent_item'       => __( 'Parent Category' ),
        'parent_item_colon' => __( 'Parent Category:' ),
        'edit_item'         => __( 'Edit Category' ),
        'update_item'       => __( 'Update Category' ),
        'add_new_item'      => __( 'Add New Category' ),
        'new_item_name'     => __( 'New Category Name' ),
        'menu_name'         => __( 'Categories' ),
    );
    $args = array(
        'hierarchical'      => true, // Set this to 'false' for non-hierarchical taxonomy (like tags)
        'labels'            => $labels,
        'show_ui'           => true,
        'show_admin_column' => true,
        'query_var'         => true,
        'rewrite'           => array( 'slug' => 'categories' ),
    );
    register_taxonomy( 'portfolio_categories', array( 'portfolio' ), $args );
}
add_action( 'init', 'create_portfolio_taxonomies', 0 );
//##########################################  
//create shortcode things
//##########################################
function signOffText() {?>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js" type="text/javascript"></script>
<link rel="stylesheet" href="<?php echo plugins_url(); ?>/great-index/css/jquery-ui-out.css">
<script src="<?php echo plugins_url(); ?>/great-index/js/showhide.js" type="text/javascript"></script>
<script type="text/javascript">
$(document).ready(function(){
//##########################################  
//control the speed of the open/close categories
//##########################################
   $('.show_hide').showHide({			 
		speed: 400,  // speed you want the toggle to happen	
		easing: '',  // the animation effect you want. Remove this line if you dont want an effect and if you haven't included jQuery UI
		changeText: 1, // if you dont want the button text to change, set this to 0
		showText: 'View',// the button text to show when a div is closed
		hideText: 'Close' // the button text to show when a div is open				 
	}); 
});
//##########################################  
//change A class when clickes (change color)
//##########################################
</script>
<?php
//##########################################  
//create the categorie stuff
//##########################################
$taxonomy = 'portfolio_categories';
$args = array('taxonomy' => 'portfolio_categories'); 
$categories = get_categories( $args );
if ( $categories && !is_wp_error( $categories ) ) :
?>
<div id="tabs">
	<?php $counter = 0; foreach ( $categories as $category ) {?>
 <li class="index-cat"><a href="#" class="show_hide" class="show_hide" rel="#slidingDiv_<?php echo $counter; ?>"><?php echo $category->name; ?></a></li>
    <div class="slidingDiv" id="slidingDiv_<?php echo $counter; ?>" style="display:none">
    <?php	    
//##########################################  
//create the post list inside every category
//##########################################
	   	 	global $post;
			$myposts = get_posts(array(
				'post_type' => 'portfolio', 
			    'numberposts'   => -1, // get all posts.
			    'tax_query'     => array(
			        array(
			            'taxonomy'  => 'portfolio_categories',
			            'field'     => 'id',
			            'terms'     => $category->cat_ID
			        ),
			    )
			));
			foreach ( $myposts as $post ){
				setup_postdata( $post );
		?>
				<li class="inner"><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></li>
		<?php
			}
			wp_reset_postdata();
		?>	
    </div> 
	<?php $counter++; } ?>
    <?php $counter = 0; foreach ( $categories as $category ) {?>
    <?php $counter++; } ?>
</div>
<?php endif; } 
add_shortcode('great-index', 'signOffText'); 
//##########################################  
// add the costume admin things into the post
//##########################################
add_action("admin_init", "admin_init");
add_filter( 'the_content', 'wpse_the_content' );
function wpse_the_content( $content ) {  if( is_singular('portfolio') ){
 ?>	
<h2><?php echo get_post_meta( get_the_ID(), 'title', true ) ?></h2>
<br/>
<iframe width="98%" height="250" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.it/maps?q=<?php echo get_post_meta( get_the_ID(), 'Location', true ) ?>&output=embed"></iframe>
<div class="great-index-content">
		<?php
		if(has_post_thumbnail()) { ?>
                    <div class="entry-thumbnail">
                        <?php the_post_thumbnail();?>
                    </div>
            <?php } else { ?>
                <div class="entry-thumbnail">
                   <img src="<?php echo plugins_url(); ?>/great-index/images/default-img.png" alt="Image Unavailable" />
                </div>
            <?php } ?>
<?php if ( get_post_meta( get_the_ID(), 'Location', true ) ) : ?>
<p class="details" id="location" >Address: <a href="http://maps.google.com/maps?q=<?php echo get_post_meta( get_the_ID(), 'Location', true ) ?>" target="_blank"><?php echo get_post_meta( get_the_ID(), 'Location', true ) ?></a></p>
<p class="details" id="phone" >Phone: <a href="tel:<?php echo get_post_meta( get_the_ID(), 'Phone', true ) ?>"><?php echo get_post_meta( get_the_ID(), 'Phone', true ) ?></a></p>
<p class="details" id="email" >Email: <a href="mailto:<?php echo get_post_meta( get_the_ID(), 'Email', true ) ?>"><?php echo get_post_meta( get_the_ID(), 'Email', true ) ?></a></p>
<p class="details" id="website" >Website: <a href="<?php echo get_post_meta( get_the_ID(), 'Website', true ) ?>" target="_blank"><?php echo get_post_meta( get_the_ID(), 'Website', true ) ?></a></p>
</div>
<?php endif; ?>
<link rel="stylesheet" href="<?php echo plugins_url(); ?>/great-index/css/jquery-ui-in.css">
 <?php   }
    return $content;
}
//##########################################  
// create the costume fields inside the costume post type  
//##########################################
    add_action("admin_init", "admin_init");  
    add_action('save_post', 'save_price');  
    function admin_init(){  
        add_meta_box("portfolio-meta", "portfolio Options", "meta_options", "portfolio", "normal", "low");  
    }  
    function meta_options(){  
        global $post;  
        $custom = get_post_custom($post->ID);  
		 $title = $custom["title"][0];
        $Location = $custom["Location"][0]; 
$Phone = $custom["Phone"][0];	
$Email = $custom["Email"][0];	
$Website = $custom["Website"][0];		
?> 
    <label>Title: </label><input name="title" value="<?php echo $title; ?>" />
<br/> <br/>
    <label>Location: </label><input name="Location" value="<?php echo $Location; ?>" />
<br/>	<br/>
	    <label>Phone: </label><input name="Phone" value="<?php echo $Phone; ?>" /> 
<br/>	<br/>		
		    <label>Email: </label><input name="Email" value="<?php echo $Email; ?>" />
			<br/>	<br/>		
		    <label>Website: </label><input name="Website" value="<?php echo $Website; ?>" />
<?php  
    }  
function save_price(){  
    global $post; 
update_post_meta($post->ID, "title", $_POST["title"]);  	
    update_post_meta($post->ID, "Location", $_POST["Location"]);  
	 update_post_meta($post->ID, "Phone", $_POST["Phone"]);
	 update_post_meta($post->ID, "Email", $_POST["Email"]);
	 update_post_meta($post->ID, "Website", $_POST["Website"]);
}  
?>