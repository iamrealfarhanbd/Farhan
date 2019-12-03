<?php
/**
 * Sanitization functions.
 *
 * @package gym-master
 */

//======================== Number Options ==================================// 

function gym_master_sanitize_number( $input ) {
    $output = intval($input);
     return $output;
}

//========= Category  Sanitizations Functions ==================================//

function gym_master_sanitize_category_select($input){

    $gym_master_cat_list = gym_master_category_lists();
    if(array_key_exists($input,$gym_master_cat_list)){
        return $input;
    }
    else{
        return '';
    }
}

//==================================== Integer Sanitizations Functions ==================================//


if ( ! function_exists( 'gym_master_integer_sanitize' ) ) :

/**
 *  Sanitize Multiple Dropdown Taxonomies.
 *  @since 1.0.0
 */
function gym_master_integer_sanitize( $input ) {
    // Make sure we have array.
    $input = (array) $input;

    // Sanitize each array element.
    $input = array_map( 'absint', $input );

    // Remove null elements.
    $input = array_values( array_filter( $input ) );

    return $input;
}

endif;

//page senitizer
if ( ! function_exists( 'gym_master_sanitize_dropdown_pages' ) ) :

    /**
     * Sanitize dropdown pages.
     *
     * @since 1.0.0
     *
     * @param int                  $page_id Page ID.
     * @param WP_Customize_Setting $setting WP_Customize_Setting instance.
     * @return int|string Page ID if the page is published; otherwise, the setting default.
     */
    function gym_master_sanitize_dropdown_pages( $page_id, $setting ) {

        // Ensure $input is an absolute integer.
        $page_id = absint( $page_id );

        // If $page_id is an ID of a published page, return it; otherwise, return the default.
        return ( 'publish' === get_post_status( $page_id ) ? $page_id : $setting->default );

    }

endif;

//================== copyright  ==================================//

if ( ! function_exists( 'gym_master_cpy_sanitize_textarea_content' ) ) :

    /**
     * Sanitize textarea content.
     *
     * @since 1.0.0
     *
     */
    function gym_master_cpy_sanitize_textarea_content( $input, $setting ) {

        return ( stripslashes( wp_filter_post_kses( addslashes( $input ) ) ) );

    }
endif;

//====================== Sidebar   Sanitizations Functions ==================================//
if ( ! function_exists( 'gym_master_sanitize_select' ) ) :

    /**
     * Sanitize select.
     *
     * @since 1.0.0
     *
     * @param mixed                $input The value to sanitize.
     * @param WP_Customize_Setting $setting WP_Customize_Setting instance.
     * @return mixed Sanitized value.
     */
    function gym_master_sanitize_select( $input, $setting ) {

        // Ensure input is a slug.
        $input = sanitize_key( $input );

        // Get list of choices from the control associated with the setting.
        $choices = $setting->manager->get_control( $setting->id )->choices;

        // If the input is a valid key, return it; otherwise, return the default.
        return ( array_key_exists( $input, $choices ) ? $input : $setting->default );

    }

endif;
