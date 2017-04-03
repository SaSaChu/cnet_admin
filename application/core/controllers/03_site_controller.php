<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

/**
 * @author      OA Wu <comdan66@gmail.com>
 * @copyright   Copyright (c) 2016 OA Wu Design
 */

class Site_controller extends Oa_controller {

  public function __construct () {
    parent::__construct ();

    $this
         ->set_componemt_path ('component', 'site')
         ->set_frame_path ('frame', 'site')
         ->set_content_path ('content', 'site')
         ->set_public_path ('public')

         ->set_title ("CNET 管理後台")

         ->_add_meta ()
         ->_add_css ()
         ->_add_js ()
         ;
  }

  private function _add_meta () {
    return $this->add_meta (array ('name' => 'viewport', 'content' => 'width=device-width, user-scalable=no'));
  }

  private function _add_css () {
    return $this
    ->add_css ('https://fonts.googleapis.com/css?family=Open+Sans:400italic,400,700')
    //             ->add_css (base_url ('resource', 'css', 'site', 'Content', 'bootstrap.css'))
    //             ->add_css (base_url ('resource', 'css', 'site', 'font-awesome-4.2.0', 'css', 'font-awesome.css'))
    //             ->add_css (base_url ('resource', 'css', 'site', 'Content', 'custom.css'))
    //             ->add_css (base_url ('resource', 'css', 'site', 'Content', 'jquery.bxslider.css'))
    //             ->add_css (base_url ('resource', 'css', 'site', 'Content', 'colorbox.css'))
    //             ->add_css (base_url ('resource', 'css', 'site', 'Content', 'vote.css'))
    //             // ->add_css (base_url ('resource', 'css', 'site', 'new', 'css98a2.css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,700,300,600,800,400&amp;subset=latin,cyrillic-ext,greek,greek-ext,vietnamese,latin-ext,cyrillic'))
                ;
  }

  private function _add_js () {
    return $this->add_js (base_url ('resource', 'javascript', 'jquery_v1.10.2', 'jquery-1.10.2.min.js'))
                // ->add_js (base_url ('resource', 'javascript', 'jquery-rails_d2015_03_09', 'jquery_ujs.js'))
                // ->add_js (base_url ('resource', 'javascript', 'site', 'jquery.cookie.js'))
                // ->add_js (base_url ('resource', 'javascript', 'site', 'modernizr.custom.59931.js'))
                // ->add_js (base_url ('resource', 'javascript', 'site', 'bootstrap.js'))
                // ->add_js (base_url ('resource', 'javascript', 'site', 'jquery.bxslider.js'))
                // ->add_js (base_url ('resource', 'javascript', 'site', 'jquery.colorbox.js'))
                // ->add_js (base_url ('resource', 'javascript', 'site', 'jquery.slimscroll.js'))
                // ->add_js (base_url ('resource', 'javascript', 'site', 'scroll.sneak.js'))
                // ->add_js (base_url ('resource', 'javascript', 'site', 'custom.js'))
                // ->add_js (base_url ('resource', 'javascript', 'site', 'def.js'))
                ;
  }
}