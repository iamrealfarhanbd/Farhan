<?php
/**
 * Class TemplateParser
 *
 * @package LiveChat\Services
 */

namespace LiveChat\Services;

/**
 * Class TemplateParser
 *
 * @package LiveChat\Services
 */
class TemplateParser {
	/**
	 * Regex used for searching template variables.
	 *
	 * @var string
	 */
	private $variable_regex = '/{{\s(\w*)\s}}/';
	/**
	 * Directory where template files are stored.
	 *
	 * @var string|null
	 */
	private $templates_dir = null;
	/**
	 * Array of template vars and its values.
	 *
	 * @var array
	 */
	private $context = array();

	/**
	 * TemplateParser constructor.
	 *
	 * @param string $templates_dir Directory where template files are stored.
	 */
	public function __construct( $templates_dir ) {
		$this->templates_dir = dirname( __FILE__ ) . '/' . $templates_dir;
	}

	/**
	 * Gets template file content.
	 *
	 * @param string $template_file_name Name of the template file.
	 * @return string
	 */
	private function get_template_file_contents( $template_file_name ) {
		// phpcs:disable WordPress.WP.AlternativeFunctions.file_get_contents_file_get_contents
		$content = file_get_contents( $this->templates_dir . '/' . $template_file_name );
		// phpcs:enable
		return $content ? $content : '';
	}

	/**
	 * Looks for template variables occurrences in file.
	 *
	 * @param array $match Array passed from preg_replace_callback function.
	 * @return string
	 */
	private function replacer( $match ) {
		return array_key_exists( $match[1], $this->context ) ? $this->context[ $match[1] ] : '';
	}

	/**
	 * Parses given template based on context.
	 *
	 * @param string $template_file_name Name of the template file.
	 * @param array  $context Array of template variable values.
	 * @param bool   $render Flag responsible for printing parsed template file.
	 * @return string|string[]|null
	 */
	public function parse_template( $template_file_name, $context, $render = true ) {
		$this->context         = $context;
		$template_file_content = $this->get_template_file_contents( $template_file_name );

		$parsed_template_file = preg_replace_callback(
			$this->variable_regex,
			array( $this, 'replacer' ),
			$template_file_content
		);

		if ( $render ) {
			// phpcs:disable WordPress.Security.EscapeOutput.OutputNotEscaped
			echo $parsed_template_file;
			// phpcs:enable
		}

		return $parsed_template_file;
	}

	/**
	 * Returns an instance of TemplateParser
	 *
	 * @param string $templates_dir Directory where template files are stored.
	 *
	 * @return TemplateParser
	 */
	public static function create( $templates_dir ) {
		return new TemplateParser( $templates_dir );
	}
}
