<?php
/**
 * Theme Customizer Custom
 *
 * @package gym-master
 */
/**
 * Add new options the Theme Customizer.
 *
 * @param WP_Customize_Manager $wp_customize Theme Customizer object.
 */
function gym_master_custom_customize_register( $wp_customize ) { 

	require get_template_directory() . '/inc/customizer/sanitizer.php';
  
  /****************  Add Deafult  Pannel   ***********************/

  // Gym Master Category Posts List.
  $gym_master_category_lists = gym_master_category_lists();

	$wp_customize->add_panel('gym_master_default_setups',
		array(
			'priority' => 10,
			'capability' => 'edit_theme_options',
			'theme_supports' => '',
			'title' => esc_html__('Default/Basic Setting','gym-master'),
	));

	/****************  Add Default Sections to General Panel ************/
  
	$wp_customize->get_section('title_tagline')->panel = 'gym_master_default_setups'; //priority 20
	$wp_customize->get_section('colors')->panel = 'gym_master_default_setups'; //priority 40
	$wp_customize->get_section('background_image')->panel = 'gym_master_default_setups'; //priority 80
	$wp_customize->get_section('static_front_page')->panel = 'gym_master_default_setups'; //priority 120

	$wp_customize->get_section( 'header_image' )->panel = 'gym_master_general_panel';
	$wp_customize->get_section( 'header_image' )->title = esc_html__( 'Header Breadcrub Image', 'gym-master' );
	$wp_customize->get_section( 'header_image' )->priority = '25';

	/************************  Site Identity  ******************/

	$wp_customize->add_setting('site_identity_options', 
	    array(
	    'default'           => 'title-text',
	    'sanitize_callback' => 'gym_master_sanitize_select'
	    )
	);
	$wp_customize->add_control('site_identity_options', 
	    array(    
	    'priority' => 20,  
	    'label'     => esc_html__('Choose Options', 'gym-master'),
	    'section'   => 'title_tagline',
	    'settings'  => 'site_identity_options',
	    'type'      => 'radio',
	    'choices'   =>  array(
	          'logo-only'     => esc_html__('Logo Only', 'gym-master'),
	          'logo-text'     => esc_html__('Logo + Tagline', 'gym-master'),
	          'title-only'    => esc_html__('Title Only', 'gym-master'),
	          'title-text'    => esc_html__('Title + Tagline', 'gym-master')
	        )
	    )
	);

	/***********************************  Starting Main Slider **************************************/

	$wp_customize->add_panel('gym_master_homepage_setups',
	 array(
	   'priority' => 16,
	   'capability' => 'edit_theme_options',
	   'theme_supports' => '',
	   'title' => esc_html__('Front Page Setting ','gym-master'),
	   ));

	$wp_customize->add_section('gym_master_banner_setups',
	  array(
	    'priority' => 1,
	    'capability' => 'edit_theme_options',
	    'theme_supports' => '',
	    'title' => esc_html__('Slider Section','gym-master'),
	    'panel' => 'gym_master_homepage_setups'
	  ));

	//Banner  Enable/Disable

	$wp_customize->add_setting('gym_master_slider_option',
	      array(
	          'default'           =>  'no',
	          'sanitize_callback' =>  'gym_master_sanitize_select',
	          )
	      );
	$wp_customize->add_control('gym_master_slider_option',
	    array(
	          'description'   =>  esc_html__('Enable/Disable Slider Section','gym-master'),
	          'section'       =>  'gym_master_banner_setups',
	          'setting'       =>  'gym_master_slider_option',
	          'priority'      =>  1,
	          'type'          =>  'radio',
	          'choices'        =>  array(
	              'yes'   =>  esc_html__('Yes','gym-master'),
	              'no'    =>  esc_html__('No','gym-master')
	            )
	       )
	   );

	  //Select Category For Slider  Section

	$wp_customize->add_setting('gym_master_slider_section_cat',
	  array(
	      'default'           =>  0,
	      'sanitize_callback' =>  'gym_master_sanitize_category_select',
	      )
	    );
	$wp_customize->add_control('gym_master_slider_section_cat',
	      array(
	      'priority'      =>  2,
	      'label'         =>  esc_html__('Select Category For Slider Section','gym-master'),
	      'section'       =>  'gym_master_banner_setups',
	      'setting'       =>  'gym_master_slider_section_cat',
	      'type'          =>  'select',
	      'choices'       =>  $gym_master_category_lists,
	    )
	  );
    //Slider Read More Text
    $wp_customize->add_setting('gym_master_slider_readmore',
			array(
				'default'           =>  esc_html__('Learn More','gym-master'),
				'sanitize_callback' =>  'sanitize_text_field',
			)
			);
    $wp_customize->add_control('gym_master_slider_readmore',
    		array(
	            'priority'      =>  3,
	            'label'         =>  esc_html__('Learn More Text','gym-master'),
	            'section'       =>  'gym_master_banner_setups',
	            'setting'       =>  'gym_master_slider_readmore',
	            'type'          =>  'text',  
            )                                     
	 );

	 // Slider Post Number Count
	$wp_customize->add_setting('gym_master_slider_num', 
	      array(
	        'default' => 5,
	          'sanitize_callback' => 'gym_master_integer_sanitize',
	      )
	  );
	    
	 $wp_customize->add_control('gym_master_slider_num',
	    array(
	    	'priority'      =>  4,
	        'type' => 'number',
	        'label' => esc_html__('No. of Slider','gym-master'),
	        'section' => 'gym_master_banner_setups',
	        'setting' => 'gym_master_slider_num',
	        'input_attrs' => array(
	        'min' => 1,
	        'max' => 9,
	      ),
	    )
	  );	

	/***********************************  Starting Service Sections **************************************/ 

	$wp_customize->add_section('gym_master_service_setups',
	  array(
	    'priority' => 1,
	    'capability' => 'edit_theme_options',
	    'theme_supports' => '',
	    'title' => esc_html__('Service Section','gym-master'),
	    'panel' => 'gym_master_homepage_setups'
	  ));

	// Service Section Enable/Disable
	$wp_customize->add_setting('gym_master_service_option',
	      array(
	          'default'           =>  'no',
	          'sanitize_callback' =>  'gym_master_sanitize_select',
	          )
	      );
	$wp_customize->add_control('gym_master_service_option',
	    array(
	          'description'   =>  esc_html__('Enable/Disable Service Section','gym-master'),
	          'section'       =>  'gym_master_service_setups',
	          'setting'       =>  'gym_master_service_option',
	          'priority'      =>  1,
	          'type'          =>  'radio',
	          'choices'        =>  array(
	              'yes'   =>  esc_html__('Yes','gym-master'),
	              'no'    =>  esc_html__('No','gym-master')
	            )
	       )
	   );
	// Service Section Title And Descriptions
	$wp_customize->add_setting('gym_master_servie_page',
	  array(
	    'default'           =>  0,
	    'sanitize_callback' =>  'gym_master_sanitize_dropdown_pages',
	  )
	);

	$wp_customize->add_control('gym_master_servie_page',
	  array(
	    'priority'=>    2,
	    'label'   =>    esc_html__( 'Select Page For  Service Section','gym-master' ),
	    'description'   =>  esc_html__('It will Display Service Section Title And Description. ','gym-master'),
	    'section' =>    'gym_master_service_setups',
	    'setting' =>    'gym_master_servie_page',
	    'type'    =>    'dropdown-pages',
	  )                                     
	);	
 
  //Select Category For Service Section
  $wp_customize->add_setting('gym_master_service_section_cat',
    array(
        'default'           =>  0,
        'sanitize_callback' =>  'gym_master_sanitize_select',
        )
      );
    if ( !class_exists( 'Gym_Master_Components' ) ) { 
      $wp_customize->add_control('gym_master_service_section_cat',
            array(
              'priority'      =>  3,
              'label'         =>  esc_html__('Select Category For Service Section ','gym-master'),
              'section'       =>  'gym_master_service_setups',
              'setting'       =>  'gym_master_service_section_cat',
              'type'          =>  'select',
              'choices'       =>  $gym_master_category_lists,
          )
        );
  } else{
    $wp_customize->add_control(new Gym_Master_Dropdown_Service_Taxonomies_Control( $wp_customize, 'gym_master_service_section_cat',
          array(
            'label'    => esc_html__( 'Select Category', 'gym-master' ),
            'section'  => 'gym_master_service_setups',
            'settings' => 'gym_master_service_section_cat',
            'priority'      =>  3,
            )
          )
    );

  }

    //Servcie Read More Text
    $wp_customize->add_setting('gym_master_services_readmore',
			array(
				'default'           =>  esc_html__('View Details','gym-master'),
				'sanitize_callback' =>  'sanitize_text_field',
			)
			);
    $wp_customize->add_control('gym_master_services_readmore',
    		array(
	            'priority'      =>  3,
	            'label'         =>  esc_html__('Learn More Text','gym-master'),
	            'section'       =>  'gym_master_service_setups',
	            'setting'       =>  'gym_master_services_readmore',
	            'type'          =>  'text',  
            )                                     
	 );

     // Post Number Count
    $wp_customize->add_setting('gym_master_service_num', 
          array(
            'default' => 5,
              'sanitize_callback' => 'gym_master_integer_sanitize',
          )
      );
        
     $wp_customize->add_control('gym_master_service_num',
        array(
        	'priority'      =>  5,
            'type' => 'number',
            'label' => esc_html__('No. of Service Post','gym-master'),
            'section' => 'gym_master_service_setups',
            'setting' => 'gym_master_service_num',
            'input_attrs' => array(
            'min' => 1,
            'max' => 9,
          ),
        )
      );

    /***********************************  Starting Process Sections **************************************/  

    $wp_customize->add_section('gym_master_process_setups',
      array(
        'priority' => 2,
        'capability' => 'edit_theme_options',
        'theme_supports' => '',
        'title' => esc_html__('Process Section','gym-master'),
        'panel' => 'gym_master_homepage_setups'
      ));

    // Process Section Enable/Disable
    $wp_customize->add_setting('gym_master_process_option',
          array(
              'default'           =>  'no',
              'sanitize_callback' =>  'gym_master_sanitize_select',
              )
          );
    $wp_customize->add_control('gym_master_process_option',
        array(
              'description'   =>  esc_html__('Enable/Disable Process Section','gym-master'),
              'section'       =>  'gym_master_process_setups',
              'setting'       =>  'gym_master_process_option',
              'priority'      =>  1,
              'type'          =>  'radio',
              'choices'        =>  array(
                  'yes'   =>  esc_html__('Yes','gym-master'),
                  'no'    =>  esc_html__('No','gym-master')
                )
           )
       );

    //Process  Section Title And Descriptions
    $wp_customize->add_setting('gym_master_process_page',
      array(
        'default'           =>  0,
        'sanitize_callback' =>  'gym_master_sanitize_dropdown_pages',
      )
    );

    $wp_customize->add_control('gym_master_process_page',
      array(
        'priority'=>    2,
        'label'   =>    esc_html__( 'Select Page For  Process Section','gym-master' ),
        'description'   =>  esc_html__('It will Display Process Section Title And Description. ','gym-master'),
        'section' =>    'gym_master_process_setups',
        'setting' =>    'gym_master_process_page',
        'type'    =>    'dropdown-pages',
      )                                     
    );
      //Select Category For Process Section
    $wp_customize->add_setting('gym_master_process_section_cat',
      array(
          'default'           =>  0,
          'sanitize_callback' =>  'gym_master_sanitize_category_select',
          )
        );
    $wp_customize->add_control('gym_master_process_section_cat',
          array(
          'priority'      =>  3,
          'label'         =>  esc_html__('Select Category For Process Section','gym-master'),
          'section'       =>  'gym_master_process_setups',
          'setting'       =>  'gym_master_process_section_cat',
          'type'          =>  'select',
          'choices'       =>  $gym_master_category_lists,
        )
      );

    $wp_customize->add_setting('gym_master_process_image',
      array(
        'default' => '',
        'sanitize_callback' => 'esc_url_raw'
      )
    );
    $wp_customize->add_control(new WP_Customize_Image_Control( $wp_customize,'gym_master_process_image',
      array(
        'label'      => esc_html__( ' Process Section Background Image ', 'gym-master' ),
        'section'    => 'gym_master_process_setups',
        'settings'   => 'gym_master_process_image',
        'priority' => 4,
      )
    )
    );
     // Post Number Count
    $wp_customize->add_setting('gym_master_process_num', 
          array(
            'default' => 5,
              'sanitize_callback' => 'gym_master_integer_sanitize',
          )
      );
        
     $wp_customize->add_control('gym_master_process_num',
        array(
        	'priority'      =>  5,
            'type' => 'number',
            'label' => esc_html__('No. of Posts','gym-master'),
            'section' => 'gym_master_process_setups',
            'setting' => 'gym_master_process_num',
            'input_attrs' => array(
            'min' => 1,
            'max' => 9,
          ),
        )
      );

    /***********************************  Starting info Sections **************************************/  

    $wp_customize->add_section('gym_master_info_setups',
      array(
        'priority' => 2,
        'capability' => 'edit_theme_options',
        'theme_supports' => '',
        'title' => esc_html__('Info Section','gym-master'),
        'panel' => 'gym_master_homepage_setups'
      ));

    //Section Enable/Disable
    $wp_customize->add_setting('gym_master_info_option',
          array(
              'default'           =>  'no',
              'sanitize_callback' =>  'gym_master_sanitize_select',
              )
          );
    $wp_customize->add_control('gym_master_info_option',
        array(
              'description'   =>  esc_html__('Enable/Disable Info Section','gym-master'),
              'section'       =>  'gym_master_info_setups',
              'setting'       =>  'gym_master_info_option',
              'priority'      =>  1,
              'type'          =>  'radio',
              'choices'        =>  array(
                  'yes'   =>  esc_html__('Yes','gym-master'),
                  'no'    =>  esc_html__('No','gym-master')
                )
           )
       );

    //Section Title And Descriptions
    $wp_customize->add_setting('gym_master_info_page',
      array(
        'default'           =>  0,
        'sanitize_callback' =>  'gym_master_sanitize_dropdown_pages',
      )
    );

    $wp_customize->add_control('gym_master_info_page',
      array(
        'priority'=>    2,
        'label'   =>    esc_html__( 'Select Page For  Info Section','gym-master' ),
        'description'   =>  esc_html__('It will Display info Section Title And Description. ','gym-master'),
        'section' =>    'gym_master_info_setups',
        'setting' =>    'gym_master_info_page',
        'type'    =>    'dropdown-pages',
      )                                     
    );
    // Counter Page First
    $wp_customize->add_setting('gym_master_counter_page_one',
      array(
        'default'           =>  0,
        'sanitize_callback' =>  'gym_master_sanitize_dropdown_pages',
     )
    );

    $wp_customize->add_control('gym_master_counter_page_one',
      array(
        'priority'=>    2,
        'label'   =>    esc_html__( 'Select Page For Counter One','gym-master' ),
        'description'   =>  esc_html__('This Page Will Display Feature Image And Title .','gym-master'),
        'section' =>    'gym_master_info_setups',
        'setting' =>    'gym_master_counter_page_one',
        'type'    =>    'dropdown-pages',
       )                                     
      );
    // Counter Number First
    $wp_customize->add_setting('first_counter_number', 
      array(
        'default' => 100,
        'sanitize_callback' => 'gym_master_sanitize_number',
        'transport' => 'refresh'
      )
    );    
    $wp_customize->add_control('first_counter_number',
    array(
      'priority'=>    3,
      'type' => 'number',
      'label' => esc_html__( 'counter Number One', 'gym-master' ),
      'section' => 'gym_master_info_setups',
      'priority' => '4'
       )
    );

     // Counter Page Second 
    $wp_customize->add_setting('gym_master_counter_page_two',
      array(
        'default'           =>  0,
        'sanitize_callback' =>  'gym_master_sanitize_dropdown_pages',
     )
    );

    $wp_customize->add_control('gym_master_counter_page_two',
      array(
        'priority'=>    4,
        'label'   =>    esc_html__( 'Select Page For Counter Two','gym-master' ),
        'description'   =>  esc_html__('This Page Will Display Feature Image And Title .','gym-master'),
        'section' =>    'gym_master_info_setups',
        'setting' =>    'gym_master_counter_page_two',
        'type'    =>    'dropdown-pages',
       )                                     
      );

    // Counter Number Two
    $wp_customize->add_setting('second_counter_two', 
      array(
        'default' => 200,
        'sanitize_callback' => 'gym_master_sanitize_number',
        'transport' => 'refresh'
      )
    );    
    $wp_customize->add_control('second_counter_two',
    array(
      'priority'=>    5,
      'type' => 'number',
      'label' => esc_html__( 'Counter Number Two', 'gym-master' ),
      'section' => 'gym_master_info_setups',
       )
    );


     // Counter Page Three
    $wp_customize->add_setting('gym_master_counter_page_three',
      array(
        'default'           =>  0,
        'sanitize_callback' =>  'gym_master_sanitize_dropdown_pages',
     )
    );

    $wp_customize->add_control('gym_master_counter_page_three',
      array(
        'priority'=>    5,
        'label'   =>    esc_html__( 'Select Page For Counter Three','gym-master' ),
        'description'   =>  esc_html__('This Page Will Display Feature Image And Title .','gym-master'),
        'section' =>    'gym_master_info_setups',
        'setting' =>    'gym_master_counter_page_three',
        'type'    =>    'dropdown-pages',
       )                                     
      );

    // Counter Number Three
    $wp_customize->add_setting('third_counter_three', 
      array(
        'default' => 300,
        'sanitize_callback' => 'gym_master_sanitize_number',
        'transport' => 'refresh'
      )
    );    
    $wp_customize->add_control('third_counter_three',
    array(
      'priority'=>    6,
      'type' => 'number',
      'label' => esc_html__( 'Counter Number Three', 'gym-master' ),
      'section' => 'gym_master_info_setups',
       )
    );

    // Counter Page Four
    $wp_customize->add_setting('gym_master_counter_page_four',
      array(
        'default'           =>  0,
        'sanitize_callback' =>  'gym_master_sanitize_dropdown_pages',
     )
    );

    $wp_customize->add_control('gym_master_counter_page_four',
      array(
        'priority'=>    7,
        'label'   =>    esc_html__( 'Select Page For Counter Four','gym-master' ),
        'description'   =>  esc_html__('This Page Will Display Feature Image And Title .','gym-master'),
        'section' =>    'gym_master_info_setups',
        'setting' =>    'gym_master_counter_page_four',
        'type'    =>    'dropdown-pages',
       )                                     
      );

    // Counter Number Four
    $wp_customize->add_setting('four_counter_four', 
      array(
        'default' => 400,
        'sanitize_callback' => 'gym_master_sanitize_number',
        'transport' => 'refresh'
      )
    );    
    $wp_customize->add_control('four_counter_four',
    array(
      'priority'=>    8,
      'type' => 'number',
      'label' => esc_html__( 'Counter Number Four', 'gym-master' ),
      'section' => 'gym_master_info_setups',
       )
    );

    $wp_customize->add_setting('gym_master_info_image',
      array(
        'default' => '',
        'sanitize_callback' => 'esc_url_raw'
      )
    );
    $wp_customize->add_control(new WP_Customize_Image_Control( $wp_customize,'gym_master_info_image',
      array(
        'label'      => esc_html__( 'Info Section Background Image ', 'gym-master' ),
        'section'    => 'gym_master_info_setups',
        'settings'   => 'gym_master_info_image',
        'priority' => 89,
      )
    )
    );
   
     /***********************************  Starting Video Sections **************************************/  

     $wp_customize->add_section('gym_master_video_setups',
       array(
         'priority' => 2,
         'capability' => 'edit_theme_options',
         'theme_supports' => '',
         'title' => esc_html__('Video Section','gym-master'),
         'panel' => 'gym_master_homepage_setups'
       ));

     //Section Enable/Disable
     $wp_customize->add_setting('gym_master_video_option',
           array(
               'default'           =>  'no',
               'sanitize_callback' =>  'gym_master_sanitize_select',
               )
           );
     $wp_customize->add_control('gym_master_video_option',
         array(
               'description'   =>  esc_html__('Enable/Disable Video Section','gym-master'),
               'section'       =>  'gym_master_video_setups',
               'setting'       =>  'gym_master_video_option',
               'priority'      =>  1,
               'type'          =>  'radio',
               'choices'        =>  array(
                   'yes'   =>  esc_html__('Yes','gym-master'),
                   'no'    =>  esc_html__('No','gym-master')
                 )
            )
        );
      $wp_customize->add_setting('video_section_text',
        array(
            'default'           =>  esc_html__('Fitness Video Tutorial','gym-master'),
            'sanitize_callback' =>  'sanitize_text_field',
          )
      );

      $wp_customize->add_control('video_section_text',
        array(
            'priority'      =>  2,
            'label'         =>  esc_html__('Fitness Video Tutorial Text','gym-master'),
            'section'       =>  'gym_master_video_setups',
            'setting'       =>  'video_section_text',
            'type'          =>  'text',  
          )                                     
      );

      $wp_customize->add_setting('gym_master_video_image',
        array(
          'default' => '',
          'sanitize_callback' => 'esc_url_raw'
        )
      );
      $wp_customize->add_control(new WP_Customize_Image_Control( $wp_customize,'gym_master_video_image',
        array(
          'label'      => esc_html__( 'Video Section Background Image ', 'gym-master' ),
          'section'    => 'gym_master_video_setups',
          'settings'   => 'gym_master_video_image',
          'priority' => 4,
        )
      )
      );

      $wp_customize->add_setting('gym_master_frontpage_vedio_option',
        array(
              'capability'        => 'edit_theme_options',
              'default'           => '',
              'sanitize_callback' => 'esc_url_raw',
          )
      );

      $wp_customize->add_control('gym_master_frontpage_vedio_option',
        array(
          'priority'      =>  4,
          'label'         => esc_html__( 'Type Video URL For Video Section.', 'gym-master' ),
          'description'   => esc_html__( 'Use Link from youtube', 'gym-master' ),
          'section'       => 'gym_master_video_setups',
          'settings'      => 'gym_master_frontpage_vedio_option',
          'type'          => 'url'
        )
      );

    /***********************************  Starting Team  Sections **************************************/  

    $wp_customize->add_section('gym_master_team_setups',
      array(
        'priority' => 2,
        'capability' => 'edit_theme_options',
        'theme_supports' => '',
        'title' => esc_html__('Team Section','gym-master'),
        'panel' => 'gym_master_homepage_setups'
      ));

    //Section Enable/Disable
    $wp_customize->add_setting('gym_master_team_option',
          array(
              'default'           =>  'no',
              'sanitize_callback' =>  'gym_master_sanitize_select',
              )
          );
    $wp_customize->add_control('gym_master_team_option',
        array(
              'description'   =>  esc_html__('Enable/Disable Team Section','gym-master'),
              'section'       =>  'gym_master_team_setups',
              'setting'       =>  'gym_master_team_option',
              'priority'      =>  1,
              'type'          =>  'radio',
              'choices'        =>  array(
                  'yes'   =>  esc_html__('Yes','gym-master'),
                  'no'    =>  esc_html__('No','gym-master')
                )
           )
       );
    //Section Title And Descriptions
    $wp_customize->add_setting('gym_master_team_page',
      array(
        'default'           =>  0,
        'sanitize_callback' =>  'gym_master_sanitize_dropdown_pages',
      )
    );

    $wp_customize->add_control('gym_master_team_page',
      array(
        'priority'=>    2,
        'label'   =>    esc_html__( 'Select Page For Team Section','gym-master' ),
        'description'   =>  esc_html__('It will Display Team Section Title And Description. ','gym-master'),
        'section' =>    'gym_master_team_setups',
        'setting' =>    'gym_master_team_page',
        'type'    =>    'dropdown-pages',
      )                                     
    );
      //Select Category For Team Section
      $wp_customize->add_setting('gym_master_team_section_cat',
        array(
            'default'           =>  0,
            'sanitize_callback' =>  'gym_master_sanitize_select',
            )
          );
        if ( !class_exists( 'Gym_Master_Components' ) ) { 
          $wp_customize->add_control('gym_master_team_section_cat',
                array(
                  'priority'      =>  3,
                  'label'         =>  esc_html__('Select Category For Team Section ','gym-master'),
                  'section'       =>  'gym_master_team_setups',
                  'setting'       =>  'gym_master_team_section_cat',
                  'type'          =>  'select',
                  'choices'       =>  $gym_master_category_lists,
              )
            );
      } else{
        $wp_customize->add_control(new Gym_Master_Dropdown_Team_Taxonomies_Control( $wp_customize, 'gym_master_team_section_cat',
              array(
                'label'    => esc_html__( 'Select Category', 'gym-master' ),
                'section'  => 'gym_master_team_setups',
                'settings' => 'gym_master_team_section_cat',
                'priority'      =>  3,
                )
              )
        );

      }

       // Post Number Count
      $wp_customize->add_setting('gym_master_team_num', 
            array(
              'default' => 5,
                'sanitize_callback' => 'gym_master_integer_sanitize',
            )
        );
          
       $wp_customize->add_control('gym_master_team_num',
          array(
            'priority'      =>  5,
              'type' => 'number',
              'label' => esc_html__('No. of Posts','gym-master'),
              'section' => 'gym_master_team_setups',
              'setting' => 'gym_master_team_num',
              'input_attrs' => array(
              'min' => 1,
              'max' => 9,
            ),
          )
        );

     $wp_customize->add_setting('gym_master_team_image',
       array(
         'default' => '',
         'sanitize_callback' => 'esc_url_raw'
       )
     );
     $wp_customize->add_control(new WP_Customize_Image_Control( $wp_customize,'gym_master_team_image',
       array(
         'label'      => esc_html__( 'Team Section Background Image ', 'gym-master' ),
         'section'    => 'gym_master_team_setups',
         'settings'   => 'gym_master_team_image',
         'priority' => 4,
       )
     )
     );

    /***********************************  Starting Testimoial  Sections **************************************/  

    $wp_customize->add_section('gym_master_testimonial_setups',
      array(
        'priority' => 2,
        'capability' => 'edit_theme_options',
        'theme_supports' => '',
        'title' => esc_html__('Testimonial Section','gym-master'),
        'panel' => 'gym_master_homepage_setups'
      ));

    //Section Enable/Disable
    $wp_customize->add_setting('gym_master_testiminial_option',
          array(
              'default'           =>  'no',
              'sanitize_callback' =>  'gym_master_sanitize_select',
              )
          );
    $wp_customize->add_control('gym_master_testiminial_option',
        array(
              'description'   =>  esc_html__('Enable/Disable Testimonial Section','gym-master'),
              'section'       =>  'gym_master_testimonial_setups',
              'setting'       =>  'gym_master_testiminial_option',
              'priority'      =>  1,
              'type'          =>  'radio',
              'choices'        =>  array(
                  'yes'   =>  esc_html__('Yes','gym-master'),
                  'no'    =>  esc_html__('No','gym-master')
                )
           )
       );  

    //Select Category For Testimonial Section
   $wp_customize->add_setting('gym_master_testimonial_section_cat',
        array(
            'default'           =>  0,
            'sanitize_callback' =>  'gym_master_sanitize_select',
            )
          );
        if ( !class_exists( 'Gym_Master_Components' ) ) { 
          $wp_customize->add_control('gym_master_testimonial_section_cat',
                array(
                  'priority'      =>  3,
                  'label'         =>  esc_html__('Select Category For Testimonial Section ','gym-master'),
                  'section'       =>  'gym_master_testimonial_setups',
                  'setting'       =>  'gym_master_testimonial_section_cat',
                  'type'          =>  'select',
                  'choices'       =>  $gym_master_category_lists,
              )
            );
      } else{
        $wp_customize->add_control(new Gym_Master_Dropdown_Testimonial_Taxonomies_Control( $wp_customize, 'gym_master_testimonial_section_cat',
              array(
                'label'    => esc_html__( 'Select Category', 'gym-master' ),
                'section'  => 'gym_master_testimonial_setups',
                'settings' => 'gym_master_testimonial_section_cat',
                'priority'      =>  3,
                )
              )
        );

      }


     // Post Number Count
    $wp_customize->add_setting('gym_master_testimonial_num', 
          array(
            'default' => 5,
              'sanitize_callback' => 'gym_master_integer_sanitize',
          )
      );
        
     $wp_customize->add_control('gym_master_testimonial_num',
        array(
          'priority'      =>  5,
            'type' => 'number',
            'label' => esc_html__('No. of Posts','gym-master'),
            'section' => 'gym_master_testimonial_setups',
            'setting' => 'gym_master_testimonial_num',
            'input_attrs' => array(
            'min' => 1,
            'max' => 9,
          ),
        )
      ); 

    $wp_customize->add_setting('gym_master_testimonial_image',
      array(
        'default' => '',
        'sanitize_callback' => 'esc_url_raw'
      )
    );
    $wp_customize->add_control(new WP_Customize_Image_Control( $wp_customize,'gym_master_testimonial_image',
      array(
        'label'      => esc_html__( 'Testimonial Section Background Image ', 'gym-master' ),
        'section'    => 'gym_master_testimonial_setups',
        'settings'   => 'gym_master_testimonial_image',
        'priority' => 4,
      )
    )
    ); 


  /***********************************  Starting Call To Sections **************************************/   

  $wp_customize->add_section('gym_master_call_to_setups',
    array(
      'priority' => 2,
      'capability' => 'edit_theme_options',
      'theme_supports' => '',
      'title' => esc_html__('Call To Section','gym-master'),
      'panel' => 'gym_master_homepage_setups'
    ));

  //Section Enable/Disable
  $wp_customize->add_setting('gym_master_call_to_option',
        array(
            'default'           =>  'no',
            'sanitize_callback' =>  'gym_master_sanitize_select',
            )
        );
  $wp_customize->add_control('gym_master_call_to_option',
      array(
            'description'   =>  esc_html__('Enable/Disable Call To Section','gym-master'),
            'section'       =>  'gym_master_call_to_setups',
            'setting'       =>  'gym_master_call_to_option',
            'priority'      =>  1,
            'type'          =>  'radio',
            'choices'        =>  array(
                'yes'   =>  esc_html__('Yes','gym-master'),
                'no'    =>  esc_html__('No','gym-master')
              )
         )
     );  

  $wp_customize->add_setting('gym_master_call_to_section_cat',
    array(
        'default'           =>  0,
        'sanitize_callback' =>  'gym_master_sanitize_category_select',
        )
      );
  $wp_customize->add_control('gym_master_call_to_section_cat',
        array(
        'priority'      =>  3,
        'label'         =>  esc_html__('Select Category For Call To Section','gym-master'),
        'section'       =>  'gym_master_call_to_setups',
        'setting'       =>  'gym_master_call_to_section_cat',
        'type'          =>  'select',
        'choices'       =>  $gym_master_category_lists,
      )
    );

  //Call To Read More Text
  $wp_customize->add_setting('gym_master_call_to_readmore',
    array(
      'default'           =>  esc_html__('View Details','gym-master'),
      'sanitize_callback' =>  'sanitize_text_field',
    )
    );
  $wp_customize->add_control('gym_master_call_to_readmore',
      array(
            'priority'      =>  3,
            'label'         =>  esc_html__('Learn More Text','gym-master'),
            'section'       =>  'gym_master_call_to_setups',
            'setting'       =>  'gym_master_call_to_readmore',
            'type'          =>  'text',  
          )                                     
 );
 $wp_customize->add_setting('gym_master_call_to_image',
   array(
     'default' => '',
     'sanitize_callback' => 'esc_url_raw'
   )
 );
 $wp_customize->add_control(new WP_Customize_Image_Control( $wp_customize,'gym_master_call_to_image',
   array(
     'label'      => esc_html__( 'Call To Section Background Image ', 'gym-master' ),
     'section'    => 'gym_master_call_to_setups',
     'settings'   => 'gym_master_call_to_image',
     'priority' => 4,
   )
 )
 ); 
 $wp_customize->add_setting('gym_master_call_num', 
       array(
         'default' => 5,
           'sanitize_callback' => 'gym_master_integer_sanitize',
       )
   );
     
  $wp_customize->add_control('gym_master_call_num',
     array(
       'priority'      =>  5,
         'type' => 'number',
         'label' => esc_html__('No. of Posts','gym-master'),
         'section' => 'gym_master_call_to_setups',
         'setting' => 'gym_master_call_num',
         'input_attrs' => array(
         'min' => 1,
         'max' => 9,
       ),
     )
   ); 

  if ( class_exists( 'Gym_Master_Components' ) ) {

    /***********************************  Starting Shedule Sections **************************************/  

    $wp_customize->add_section('gym_master_shedule_setups',
      array(
        'priority' => 2,
        'capability' => 'edit_theme_options',
        'theme_supports' => '',
        'title' => esc_html__('Shedule Section','gym-master'),
        'panel' => 'gym_master_homepage_setups'
      ));

    //Section Enable/Disable
    $wp_customize->add_setting('gym_master_shedule_option',
          array(
              'default'           =>  'no',
              'sanitize_callback' =>  'gym_master_sanitize_select',
              )
          );
    $wp_customize->add_control('gym_master_shedule_option',
        array(
              'description'   =>  esc_html__('Enable/Disable Shedule Section','gym-master'),
              'section'       =>  'gym_master_shedule_setups',
              'setting'       =>  'gym_master_shedule_option',
              'priority'      =>  1,
              'type'          =>  'radio',
              'choices'        =>  array(
                  'yes'   =>  esc_html__('Yes','gym-master'),
                  'no'    =>  esc_html__('No','gym-master')
                )
           )
       ); 

    //Section Title And Descriptions
    $wp_customize->add_setting('gym_master_shedule_page',
      array(
        'default'           =>  0,
        'sanitize_callback' =>  'gym_master_sanitize_dropdown_pages',
      )
    );

    $wp_customize->add_control('gym_master_shedule_page',
      array(
        'priority'=>    2,
        'label'   =>    esc_html__( 'Select Page For Shedule Section ','gym-master' ),
        'description'   =>  esc_html__('It will Display Shedule Section Title And Description. ','gym-master'),
        'section' =>    'gym_master_shedule_setups',
        'setting' =>    'gym_master_shedule_page',
        'type'    =>    'dropdown-pages',
      )                                     
    ); 

    //Select Category For Shedule Section
    $wp_customize->add_setting('gym_master_sdhedule_section_cat',
      array(
          'default'           =>  0,
          'sanitize_callback' =>  'gym_master_sanitize_select',
          )
        );
      $wp_customize->add_control(new Gym_Master_Dropdown_Service_Taxonomies_Control( $wp_customize, 'gym_master_sdhedule_section_cat',
            array(
              'label'    => esc_html__( 'Select Category', 'gym-master' ),
              'section'  => 'gym_master_shedule_setups',
              'settings' => 'gym_master_sdhedule_section_cat',
              'priority'      =>  3,
              )
            )
      );

    $wp_customize->add_setting('gym_master_shedule_num', 
          array(
            'default' => 5,
              'sanitize_callback' => 'gym_master_integer_sanitize',
          )
      );
        
     $wp_customize->add_control('gym_master_shedule_num',
        array(
          'priority'      =>  5,
            'type' => 'number',
            'label' => esc_html__('No. of Posts','gym-master'),
            'section' => 'gym_master_shedule_setups',
            'setting' => 'gym_master_shedule_num',
            'input_attrs' => array(
            'min' => 1,
            'max' => 9,
          ),
        )
      ); 
     
    $wp_customize->add_setting('gym_master_schedule_image',
      array(
        'default' => '',
        'sanitize_callback' => 'esc_url_raw'
      )
    );
    $wp_customize->add_control(new WP_Customize_Image_Control( $wp_customize,'gym_master_schedule_image',
      array(
        'label'      => esc_html__( 'Schedule Section Background Image ', 'gym-master' ),
        'section'    => 'gym_master_shedule_setups',
        'settings'   => 'gym_master_schedule_image',
        'priority' => 7,
      )
    )
    );   

    $wp_customize->add_setting('gym_master_schedule_bg_image',
    array(
      'default' => '',
      'sanitize_callback' => 'esc_url_raw'
    )
    );
    $wp_customize->add_control(new WP_Customize_Image_Control( $wp_customize,'gym_master_schedule_bg_image',
    array(
      'label'      => esc_html__( 'Schedule Section Main  Image ', 'gym-master' ),
      'section'    => 'gym_master_shedule_setups',
      'settings'   => 'gym_master_schedule_bg_image',
      'priority' => 10,
       )
     )
    ); 
}
 /***********************************  Starting Blog Sections **************************************/ 

 $wp_customize->add_section('gym_master_blog_setups',
   array(
     'priority' => 2,
     'capability' => 'edit_theme_options',
     'theme_supports' => '',
     'title' => esc_html__('Blog Section','gym-master'),
     'panel' => 'gym_master_homepage_setups'
   ));

 //Section Enable/Disable
 $wp_customize->add_setting('gym_master_blog_option',
       array(
           'default'           =>  'no',
           'sanitize_callback' =>  'gym_master_sanitize_select',
           )
       );
 $wp_customize->add_control('gym_master_blog_option',
     array(
           'description'   =>  esc_html__('Enable/Disable Blog Section','gym-master'),
           'section'       =>  'gym_master_blog_setups',
           'setting'       =>  'gym_master_blog_option',
           'priority'      =>  1,
           'type'          =>  'radio',
           'choices'        =>  array(
               'yes'   =>  esc_html__('Yes','gym-master'),
               'no'    =>  esc_html__('No','gym-master')
             )
        )
    ); 

 //Section Title And Descriptions
   $wp_customize->add_setting('gym_master_blo_page',
     array(
       'default'           =>  0,
       'sanitize_callback' =>  'gym_master_sanitize_dropdown_pages',
     )
   );

   $wp_customize->add_control('gym_master_blo_page',
     array(
       'priority'=>    2,
       'label'   =>    esc_html__( 'Select Page For Blog Section ','gym-master' ),
       'description'   =>  esc_html__('It will Display Blog Section Title And Description. ','gym-master'),
       'section' =>    'gym_master_blog_setups',
       'setting' =>    'gym_master_blo_page',
       'type'    =>    'dropdown-pages',
     )                                     
   ); 
  $wp_customize->add_setting('gym_master_slider_blog_cat',
    array(
        'default'           =>  0,
        'sanitize_callback' =>  'gym_master_sanitize_category_select',
        )
      );
  $wp_customize->add_control('gym_master_slider_blog_cat',
        array(
        'priority'      =>  2,
        'label'         =>  esc_html__('Select Category For Blog Section','gym-master'),
        'section'       =>  'gym_master_blog_setups',
        'setting'       =>  'gym_master_slider_blog_cat',
        'type'          =>  'select',
        'choices'       =>  $gym_master_category_lists,
      )
    );

   // Post Number Count
  $wp_customize->add_setting('gym_master_blog_num', 
        array(
          'default' => 5,
            'sanitize_callback' => 'gym_master_integer_sanitize',
        )
    );
      
   $wp_customize->add_control('gym_master_blog_num',
      array(
        'priority'      =>  5,
          'type' => 'number',
          'label' => esc_html__('No. of Posts','gym-master'),
          'section' => 'gym_master_blog_setups',
          'setting' => 'gym_master_blog_num',
          'input_attrs' => array(
          'min' => 1,
          'max' => 9,
        ),
      )
    ); 
   //Slider Read More Text
	$wp_customize->add_setting('gym_master_blog_readmore',
	array(
	  'default'           =>  esc_html__('Read More','gym-master'),
	  'sanitize_callback' =>  'sanitize_text_field',
	)
	);
	$wp_customize->add_control('gym_master_blog_readmore',
	  array(
	        'priority'      =>  6,
	        'label'         =>  esc_html__('Read More Text','gym-master'),
	        'section'       =>  'gym_master_blog_setups',
	        'setting'       =>  'gym_master_blog_readmore',
	        'type'          =>  'text',  
	       )                                     
	);
	$wp_customize->add_setting('gym_master_blog_image',
	  array(
	    'default' => '',
	    'sanitize_callback' => 'esc_url_raw'
	  )
	);
	$wp_customize->add_control(new WP_Customize_Image_Control( $wp_customize,'gym_master_blog_image',
	  array(
	    'label'      => esc_html__( 'Blog Section Background Image ', 'gym-master' ),
	    'section'    => 'gym_master_blog_setups',
	    'settings'   => 'gym_master_blog_image',
	    'priority' => 7,
	  )
	)
	);

	//Section Enable/Disable
	$wp_customize->add_setting('gym_master_blog_date_option',
	      array(
	          'default'           =>  'no',
	          'sanitize_callback' =>  'gym_master_sanitize_select',
	          )
	      );
	$wp_customize->add_control('gym_master_blog_date_option',
	    array(
	          'description'   =>  esc_html__('Enable/Disable Blog Date Section','gym-master'),
	          'section'       =>  'gym_master_blog_setups',
	          'setting'       =>  'gym_master_blog_date_option',
	          'priority'      =>  8,
	          'type'          =>  'radio',
	          'choices'        =>  array(
	              'yes'   =>  esc_html__('Yes','gym-master'),
	              'no'    =>  esc_html__('No','gym-master')
	            )
	       )
	   );    
	//Section Enable/Disable
	$wp_customize->add_setting('gym_master_blog_user_option',
	      array(
	          'default'           =>  'no',
	          'sanitize_callback' =>  'gym_master_sanitize_select',
	          )
	      );
	$wp_customize->add_control('gym_master_blog_user_option',
	    array(
	          'description'   =>  esc_html__('Enable/Disable Blog User Section','gym-master'),
	          'section'       =>  'gym_master_blog_setups',
	          'setting'       =>  'gym_master_blog_user_option',
	          'priority'      =>  8,
	          'type'          =>  'radio',
	          'choices'        =>  array(
	              'yes'   =>  esc_html__('Yes','gym-master'),
	              'no'    =>  esc_html__('No','gym-master')
	            )
	       )
	   );    


  /***********************************  Starting Footer Sections  **************************************/

  $wp_customize->add_panel('gym_master_footer_panel',
   array(
     'priority' => 77,
     'capability' => 'edit_theme_options',
     'theme_supports' => '',
     'title' => esc_html__('Footer Setting ','gym-master'),
     ));

  $wp_customize->add_section('gym_master_footer_setups',
    array(
      'priority' => 2,
      'capability' => 'edit_theme_options',
      'theme_supports' => '',
      'title' => esc_html__('Footer Section','gym-master'),
      'panel' => 'gym_master_footer_panel'
    ));

  //Section Enable/Disable
  $wp_customize->add_setting('gym_master_footer_option',
        array(
            'default'           =>  'no',
            'sanitize_callback' =>  'gym_master_sanitize_select',
            )
        );
  $wp_customize->add_control('gym_master_footer_option',
      array(
            'description'   =>  esc_html__('Enable/Disable Top Footer Section','gym-master'),
            'section'       =>  'gym_master_footer_setups',
            'setting'       =>  'gym_master_footer_option',
            'priority'      =>  1,
            'type'          =>  'radio',
            'choices'        =>  array(
                'yes'   =>  esc_html__('Yes','gym-master'),
                'no'    =>  esc_html__('No','gym-master')
              )
         )
     ); 
  //Section Enable/Disable
  $wp_customize->add_setting('gym_master_button_footer_option',
        array(
            'default'           =>  'yes',
            'sanitize_callback' =>  'gym_master_sanitize_select',
            )
        );
  $wp_customize->add_control('gym_master_button_footer_option',
      array(
            'description'   =>  esc_html__('Enable/Disable  Footer Section','gym-master'),
            'section'       =>  'gym_master_footer_setups',
            'setting'       =>  'gym_master_button_footer_option',
            'priority'      =>  2,
            'type'          =>  'radio',
            'choices'        =>  array(
                'yes'   =>  esc_html__('Yes','gym-master'),
                'no'    =>  esc_html__('No','gym-master')
              )
         )
     ); 
  //Section Enable/Disable
  $wp_customize->add_setting('gym_master_footer_social_option',
        array(
            'default'           =>  'no',
            'sanitize_callback' =>  'gym_master_sanitize_select',
            )
        );
  $wp_customize->add_control('gym_master_footer_social_option',
      array(
            'description'   =>  esc_html__('Enable/Disable Footer Social Section','gym-master'),
            'section'       =>  'gym_master_footer_setups',
            'setting'       =>  'gym_master_footer_social_option',
            'priority'      =>  2,
            'type'          =>  'radio',
            'choices'        =>  array(
                'yes'   =>  esc_html__('Yes','gym-master'),
                'no'    =>  esc_html__('No','gym-master')
              )
         )
     ); 
  $wp_customize->add_setting('gym_master_footer_image',
    array(
      'default' => '',
      'sanitize_callback' => 'esc_url_raw'
    )
  );
  $wp_customize->add_control(new WP_Customize_Image_Control( $wp_customize,'gym_master_footer_image',
    array(
      'label'      => esc_html__( 'Footer Section Background Image ', 'gym-master' ),
      'section'    => 'gym_master_footer_setups',
      'settings'   => 'gym_master_footer_image',
      'priority' => 7,
    )
  )
  ); 
 
  /***********************************  Archive Settings **********************************************/


  $wp_customize->add_panel('gym_master_archive_section', 
    array(
      'capabitity' => 'edit_theme_options',
      'priority' => 38,
      'title' => esc_html__('Archive Settings', 'gym-master')
      )
  );

  $wp_customize->add_section('gym_master_archive',
        array(
          'title' => esc_html__('Archive Sidebar Settings', 'gym-master'),
          'panel' => 'gym_master_archive_section'
          )
      );

    $wp_customize->add_setting('gym_master_archive_setting_sidebar_option',
        array(
          'default' =>  'right-sidebar',
          'sanitize_callback' =>  'gym_master_sanitize_select'
          )
        );  

    $wp_customize->add_control('gym_master_archive_setting_sidebar_option',
        array(
          'description' => esc_html__('Choose the sidebar Layout for the archive page','gym-master'),
          'section' => 'gym_master_archive',
          'type'    =>  'radio',
          'choices' =>  array(
              'left-sidebar' =>  esc_html__('Sidebar Left','gym-master'),
              'right-sidebar' =>  esc_html__('Sidebar Right','gym-master'),
              'both-sidebar' =>  esc_html__('Sidebar Both','gym-master'),
              'no-sidebar' =>  esc_html__('Sidebar No','gym-master'),
            )
          )
      );

      $wp_customize->add_setting('gym_master_archive_section_redmore_optons',
        array(
          'default'           =>  'no',
          'sanitize_callback' =>  'gym_master_sanitize_select',
        )
      );
      $wp_customize->add_control('gym_master_archive_section_redmore_optons',
        array(
          'description'   =>  esc_html__('Enable/Disable Read More','gym-master'),
          'section'       =>  'gym_master_archive',
          'setting'       =>  'gym_master_archive_section_redmore_optons',
          'priority'      =>  5,
          'type'          =>  'radio',
          'choices'        =>  array(
          'yes'   =>  esc_html__('Yes','gym-master'),
          'no'    =>  esc_html__('No','gym-master')
        )
      )
      );
      $wp_customize->add_setting('gym_master_archive_submit',array(
                    'default'           =>  esc_html__('Read More ','gym-master'),
                    'sanitize_callback' =>  'sanitize_text_field',
                    )
                );

     $wp_customize->add_control('gym_master_archive_submit',array(
                    'priority'      =>  4,
                    'label'         =>  esc_html__('Read More ','gym-master'),
                    'section'       =>  'gym_master_archive',
                    'setting'       =>  'gym_master_archive_submit',
                    'type'          =>  'text',  
                    )                                     
                );

    /***********************************  Starting General  Settings  **************************************/

   $wp_customize->add_panel('gym_master_general_panel',
    array(
      'priority' => 77,
      'capability' => 'edit_theme_options',
      'theme_supports' => '',
      'title' => esc_html__('General Setting ','gym-master'),
      ));

   $wp_customize->add_section('gym_master_general_setups',
     array(
       'priority' => 2,
       'capability' => 'edit_theme_options',
       'theme_supports' => '',
       'title' => esc_html__('General Section','gym-master'),
       'panel' => 'gym_master_general_panel'
     ));

   $wp_customize->add_setting('general_section_options_section',
     array(
       'default'           =>  'yes',
       'sanitize_callback' =>  'gym_master_sanitize_select',
     )
   );
   $wp_customize->add_control('general_section_options_section',
     array(
       'description'   =>  esc_html__('Enable/Disable Header Breadcrmb','gym-master'),
       'section'       =>  'gym_master_general_setups',
       'setting'       =>  'general_section_options_section',
       'priority'      => 8,
       'type'          =>  'radio',
       'choices'        =>  array(
       'yes'   =>  esc_html__('Yes','gym-master'),
       'no'    =>  esc_html__('No','gym-master')
         )
     )
   ); 
     
  $wp_customize->add_setting('pagination_theme_options', 
     array(
	     'default'       => 'default',
	     'type'              => 'theme_mod',
	     'capability'        => 'edit_theme_options',
	     'sanitize_callback' => 'gym_master_sanitize_select'
     )
  );

  $wp_customize->add_control('pagination_theme_options', 
     array(    
	     'label'   => esc_html__('Pagination Options', 'gym-master'),
	     'section'   => 'gym_master_general_setups',
	     'settings'  => 'pagination_theme_options',
	     'type'    => 'radio',
	     'choices'   => array(   
	       'default'     => esc_html__('Default', 'gym-master'),             
	       'numeric'     => esc_html__('Numeric', 'gym-master'),   
	       ),  
     )
  ); 

	/***********************************  404 Page Starting  **************************************/

	$wp_customize->add_section('gym_master_404_settings',
		array(
			'priority' => 1,
			'capability' => 'edit_theme_options',
			'theme_supports' => '',
			'title' => esc_html__('404 Page ','gym-master'),
			'panel' => 'gym_master_general_panel'
		));

  	$wp_customize->add_setting('gym_master_404_image',
  	  array(
  	    'default' => '',
  	    'sanitize_callback' => 'esc_url_raw'
  	  )
  	);
  	$wp_customize->add_control(new WP_Customize_Image_Control( $wp_customize,'gym_master_404_image',
  	  array(
  	    'label'      => esc_html__( '404 Page Background Image ', 'gym-master' ),
  	    'section'    => 'gym_master_404_settings',
  	    'settings'   => 'gym_master_404_image',
  	    'priority' => 4,
  	  )
  	)
  	);   


 }
add_action( 'customize_register', 'gym_master_custom_customize_register' );