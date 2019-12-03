<?php
/**
 * Gym Master Metabox
 *
 * @package gym-master
 */

add_action('add_meta_boxes', 'gym_master_add_sidebar_layout_box');

function gym_master_add_sidebar_layout_box()
{
    add_meta_box(
             'gym_master_sidebar_layout', // $id
             esc_html__( 'Sidebar Layout','gym-master' ),
             'gyn_master_sidebar_layout_callback', // $callback
             'page', // $page
             'normal', // $context
             'high' // $priority
         ); 
    add_meta_box(
             'gym_master_sidebar_layout', // $id
             esc_html__( 'Sidebar Layout for Posts','gym-master' ),
             'gyn_master_sidebar_layout_callback', // $callback
             'post', // $page
             'normal', // $context
             'high' // $priority
         );
    add_meta_box(
             'gym_master_sidebar_layout', // $id
             esc_html__( 'Sidebar Layout for Post Types','gym-master' ),
             'gyn_master_sidebar_layout_callback', // $callback
             'teams', // $page
             'normal', // $context
             'high' // $priority
         );

}

$gym_master_sidebar_layout = array(

    'left-sidebar' => array(
        'value'     => 'left-sidebar',
        'label'     => esc_html__( 'Left sidebar', 'gym-master' ),
        'thumbnail' => get_template_directory_uri() . '/inc/images/sidebar-left.png'
        ), 
    'right-sidebar' => array(
        'value' => 'right-sidebar',
        'label' => esc_html__( 'Right sidebar (default)', 'gym-master' ),
        'thumbnail' => get_template_directory_uri() . '/inc/images/sidebar-right.png'
        ),
    'both-sidebar' => array(
        'value'     => 'both-sidebar',
        'label'     => esc_html__( 'Both Sidebar', 'gym-master' ),
        'thumbnail' => get_template_directory_uri() . '/inc/images/sidebar-both.png'
        ),
    
    'no-sidebar' => array(
        'value'     => 'no-sidebar',
        'label'     => esc_html__( 'No sidebar', 'gym-master' ),
        'thumbnail' => get_template_directory_uri() . '/inc/images/sidebar-no.png'
        )   

    );

//==================================================== Sidebar layout ================================================//

function gyn_master_sidebar_layout_callback(){ 

    global $post , $gym_master_sidebar_layout;
    wp_nonce_field( basename( __FILE__ ), 'gym_master_sidebar_layout_nonce' ); 
    ?>
    <table class="form-table">
        <tr>
            <td colspan="4"><em class="f13"><?php echo esc_html__('Choose Sidebar Template','gym-master');?></em></td>
        </tr>

        <tr>
            <td>
                <?php  
                foreach($gym_master_sidebar_layout as $field){  
                    $gym_master_sidebar_metalayout = get_post_meta( $post->ID, 'gym_master_sidebar_layout', true ); ?>
                    <div class="radio-image-wrapper" style="float:left; margin-right:30px;">
                        <label class="description">
                         <span><img src="<?php echo esc_url( $field['thumbnail'] ); ?>" alt="" /></span></br>
                         <input type="radio" name="gym_master_sidebar_layout" value="<?php echo esc_attr($field['value']); ?>" <?php checked( $field['value'], $gym_master_sidebar_metalayout ); if(empty($gym_master_sidebar_metalayout) && $field['value']=='right-sidebar'){ echo "checked='checked'";} ?>/>&nbsp;<?php echo esc_html($field['label']); ?>
                        </label>
                    </div>
                <?php } // end foreach 
                ?>
                <div class="clear"></div>
            </td>
        </tr>
    </table>
    
<?php } 

//==========================================================================================================//

/**
 * save the custom metabox data
 * @hooked to save_post hook
 */
function gym_master_save_sidebar_layout( $post_id ) { 
    
    global $gym_master_sidebar_layout, $post; 
    // Verify the nonce before proceeding.
    if ( !isset( $_POST[ 'gym_master_sidebar_layout_nonce' ] ) || !wp_verify_nonce( sanitize_key($_POST[ 'gym_master_sidebar_layout_nonce' ]), basename( __FILE__ ) ) )
        return;
    // Stop WP from clearing custom fields on autosave
    if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE)  
        return;
    
    if ( isset( $_POST['post_type'] ) && 'page' == $_POST['post_type']) {  
        if (!current_user_can( 'edit_page', $post_id ) )  
            return $post_id;  
    } elseif (!current_user_can( 'edit_post', $post_id ) ) {  
        return $post_id;  
    }  
    
    foreach ($gym_master_sidebar_layout as $field) {  
        //Execute this saving function
        $old = get_post_meta( $post_id, 'gym_master_sidebar_layout', true); 
        $new = sanitize_text_field( wp_unslash( $_POST['gym_master_sidebar_layout'] ) );
        if ($new && $new != $old) {  
            update_post_meta($post_id, 'gym_master_sidebar_layout', $new);  
        } elseif ('' == $new && $old) {  
            delete_post_meta($post_id,'gym_master_sidebar_layout', $old);  
        } 
     } // end foreach   
 }
 
 add_action('save_post', 'gym_master_save_sidebar_layout');
