<?php
/**
 * gym-master Theme Customizer Hook
 *
 * @package gym-master
 */


function gym_master_customizer_hook_callback(){ 



	class Gym_Master_Multiple_Dropdown_Taxonomies_Control extends WP_Customize_Control {

		/**
		* Type of control.
		*
		* @var string
		*/
		public $type = 'dropdown-taxonomies';

		/**
		* Taxonomy to list.
		*
		* @var string
		*/
		public $taxonomy = '';

		/**
		* Check if multiple.
		*
		* @var bool
		*/
		public $multiple = false;

		/**
		* Constructor.
		*
		* @param WP_Customize_Manager $manager Customizer bootstrap instance.
		* @param string               $id      Control ID.
		* @param array                $args    Optional. Arguments to override class property defaults.
		*/
		public function __construct( $manager, $id, $args = array() ) {

			$taxonomy = 'services';
			if ( isset( $args['taxonomy'] ) ) {

				$taxonomy_exist = taxonomy_exists( esc_attr( $args['taxonomy'] ) );
				if ( true === $taxonomy_exist ) {
					$taxonomy = esc_attr( $args['taxonomy'] );
				}

			}
			$args['taxonomy'] = $taxonomy;
			$this->taxonomy = esc_attr( $taxonomy );

			if ( isset( $args['multiple'] ) ) {
				$this->multiple = ( true === $args['multiple'] ) ? true : false;
			}

			parent::__construct( $manager, $id, $args );
		}

		/**
		* Render content.
		*/
		public function render_content() {

			$tax_args = array(
			'hierarchical' => 0,
			'taxonomy'     => $this->taxonomy,
			);
			$all_taxonomies = get_categories( $tax_args );
			$multiple_text = ( true === $this->multiple ) ? 'multiple' : '';
			$value = $this->value();
			?>
			<label>

				<span class="customize-control-title"><?php echo esc_html( $this->label ); ?></span>
				<?php if ( ! empty( $this->description ) ) : ?>
				<span class="description customize-control-description"><?php echo esc_attr( $this->description ); ?></span>
				<?php endif; ?>

				<select <?php $this->link(); ?> <?php echo esc_attr( $multiple_text ); ?>>
					<?php
					printf( '<option value="%s" %s>%s</option>', '', selected( $value, '', false ), esc_html__( '&mdash; All &mdash;', 'gym-master' ) );
					?>
					<?php if ( ! empty( $all_taxonomies ) ) : ?>
					<?php foreach ( $all_taxonomies as $key => $tax ) : ?>
					<?php
					printf( '<option value="%s" %s>%s</option>', esc_attr( $tax->term_id ), selected( $value, $tax->term_id, false ), esc_html( $tax->name ) );
					?>
					<?php endforeach; ?>
					<?php endif; ?>
				</select>

			</label>
			<?php
			}
	}

	class Gym_Master_Dropdown_Service_Taxonomies_Control extends WP_Customize_Control {

	/**
	* Render the control's content.
	*
	* @since 1.0.0
	*/
	public function render_content() {

			$dropdown = wp_dropdown_categories(
			array(
			'name'              => 'gym-master-categories-' . $this->id,
			'echo'              => 0,
			'show_option_none'  => esc_html__( '&mdash; Select &mdash;', 'gym-master' ),
			'option_none_value' => '0',
			'selected'          => $this->value(),
			'hide_empty'        => 0,
			'taxonomy'          => 'services-category'                  

			)
			); 

			$dropdown = str_replace( '<select', '<select ' . $this->get_link(), $dropdown );

			printf(
			'<label class="customize-control-select"><span class="customize-control-title">%s</span> %s <span class="description customize-control-description"></span>%s </label>',
			esc_html($this->label),
			esc_html($this->description),
			$dropdown

			);
		}
	}



	class Gym_Master_Dropdown_Team_Taxonomies_Control extends WP_Customize_Control {

	/**
	* Render the control's content.
	*
	* @since 1.0.0
	*/
	public function render_content() {
		$dropdown = wp_dropdown_categories(
			array(
			'name'              => 'gym-master-categories-' . $this->id,
			'echo'              => 0,
			'show_option_none'  => esc_html__( '&mdash; Select &mdash;', 'gym-master' ),
			'option_none_value' => '0',
			'selected'          => $this->value(),
			'hide_empty'        => 0,
			'taxonomy'          => 'team-categories'                  

			)
			); 

			$dropdown = str_replace( '<select', '<select ' . $this->get_link(), $dropdown );

			printf(
			'<label class="customize-control-select"><span class="customize-control-title">%s</span> %s <span class="description customize-control-description"></span>%s </label>',
			esc_html($this->label),
			esc_html($this->description),
			$dropdown

			);
		}
	}


	class Gym_Master_Dropdown_Testimonial_Taxonomies_Control extends WP_Customize_Control {

			/**
			* Render the control's content.
			*
			* @since 1.0.0
			*/

			public function render_content() {
				
			$dropdown = wp_dropdown_categories(
				array(
				'name'              => 'gym-master-categories-' . $this->id,
				'echo'              => 0,
				'show_option_none'  => esc_html__( '&mdash; Select &mdash;', 'gym-master' ),
				'option_none_value' => '0',
				'selected'          => $this->value(),
				'hide_empty'        => 0,
				'taxonomy'          => 'testimonials-categories'                  

				)
			); 

			$dropdown = str_replace( '<select', '<select ' . $this->get_link(), $dropdown );

			printf(
			'<label class="customize-control-select"><span class="customize-control-title">%s</span> %s <span class="description customize-control-description"></span>%s </label>',
			esc_html($this->label),
			esc_html($this->description),
			$dropdown

			);
			}
			
		}


}
add_action('gym_master_customizer_callback_action','gym_master_customizer_hook_callback');		
