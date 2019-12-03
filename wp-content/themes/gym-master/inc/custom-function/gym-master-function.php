<?php
/**
 * Gym Master functions and definitions
 *
 * @package gym-master
 */

//================================== Normal Category  ===================================================//

function gym_master_category_lists(){
  $category   = get_categories();
  $cat_list   = array();
  $cat_list[0]= esc_html__('Select category','gym-master');
  foreach ($category as $cat) {
    $cat_list[$cat->slug]  = $cat->name;
  }
  return $cat_list;
}

//========================================== Check Plugins Activations  =======================//

add_action( 'tgmpa_register', 'gym_master_register_required_plugins' );

function gym_master_register_required_plugins() {
  /*
   * Array of plugin arrays. Required keys are name and slug.
   * If the source is NOT from the .org repo, then source is also required.   newsletter
   */
  $plugins = array(
    
  array(
	    'name'        => esc_html__('newsletter','gym-master'),
	    'slug'        => 'newsletter',
	    'is_callable' => false,
    ),

    array(
	    'name'        => esc_html__('MailChimp for WordPress','gym-master'),
	    'slug'        => 'mailchimp-for-wp',
	    'is_callable' => false,
    ),
);
  
$config = array(
    'id'           => 'gym-master',      // Unique ID for hashing notices.
    'default_path' => '',                      // Default absolute path to bundled plugins.
    'menu'         => 'tgmpa-install-plugins', // Menu slug.
    'parent_slug'  => 'themes.php',            // Parent menu slug.
    'capability'   => 'edit_theme_options',    // Capability needed to view plugin install page
    'has_notices'  => true,                    // Show admin notices or not.
    'dismissable'  => true,                    // If false, a user cannot dismiss the nag message.
    'dismiss_msg'  => '',                      // If 'dismissable' is false.
    'is_automatic' => false,                   // Automatically activate plugins.
    'message'      => '',                      // Message to output right before the plugins table.
  );

  tgmpa( $plugins, $config );
}



