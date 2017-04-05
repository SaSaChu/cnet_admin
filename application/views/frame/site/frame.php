<!DOCTYPE html>
<html class="no-js">
  <head>
    <?php echo isset ($meta_list) ? $meta_list : ''; ?>

    <title><?php echo isset ($title) ? $title : ''; ?></title>
    
    <link rel="icon" type="image/x-icon" href="<?php echo base_url ('resource', 'image', 'fav.png');?>" />

<?php echo isset ($css_list) ? $css_list : ''; ?>

<?php echo isset ($js_list) ? $js_list : ''; ?>

  </head>
  <body lang="zh-tw">
    <?php echo isset ($hidden_list) ? $hidden_list : ''; ?>

    <div id='top'>
      <div class='container'>
        <div>+90 216 592 98 00</div>
        <form action='<?php echo base_url ('search');?>' method='get'>
          <input type='search' name='q' placeholder='<?php echo Lang::get ('frame', 'search_input');?>...' value='<?php echo isset ($q) && $q ? $q : '';?>' />
          <button typ='submit' class='icon-search'></button>
        </form>
        <span class='lang'>
          <select id='lang_select' data-links='<?php echo json_encode ($links = array_combine (column_array ($links = array_map (function ($link) { return $link->to_array (); }, Lang::all (array ('select' => 'id, name, link, code'))), 'id'), $links));?>' data-url='<?php echo base_url ('lang');?>'>
      <?php foreach ($links as $code => $lang) { ?>
              <option value='<?php echo $code;?>' <?php echo Lang::current ()->id == $code ? ' selected' : '';?>><?php echo $lang['name'];?></option>
      <?php } ?>
          </select>
          <label class='icon-keyboard_arrow_down'></label>
        </span>
      </div>
    </div>

    <header id='header'>
      <input type='checkbox' id='menu_ckb' >
      <div class='container'>
        <a class='logo' href='<?php echo base_url ();?>'>
          <img src='<?php echo base_url ('resource', 'image', 'logo.png');?>'>
        </a>
        <div class='menu n6'>
          <div>
            <a<?php echo isset ($now) && $now && $now == 'index' ? ' class="active"' : '';?> href='<?php echo base_url ();?>'><?php echo Lang::get ('frame', 'pages', 'index');?></a>
            <a<?php echo isset ($now) && $now && $now == 'about' ? ' class="active"' : '';?> href='<?php echo base_url ('about');?>'><?php echo Lang::get ('frame', 'pages', 'about');?></a>
            <a<?php echo isset ($now) && $now && $now == 'news' ? ' class="active"' : '';?> href='<?php echo base_url ('news-list');?>'><?php echo Lang::get ('frame', 'pages', 'news');?></a>
            <a<?php echo isset ($now) && $now && $now == 'support' ? ' class="active"' : '';?> href='<?php echo base_url ();?>'><?php echo Lang::get ('frame', 'pages', 'support');?></a>
            <a<?php echo isset ($now) && $now && $now == 'product' ? ' class="active"' : '';?> href='<?php echo base_url ('products');?>'><?php echo Lang::get ('frame', 'pages', 'product');?></a>
            <a<?php echo isset ($now) && $now && $now == 'partner' ? ' class="active"' : '';?> href='<?php echo base_url ('partners');?>'><?php echo Lang::get ('frame', 'pages', 'partner');?></a>
          </div>
        </div>
        <label class='icon-menu' for='menu_ckb'></label>
      </div>
    </header>

<?php echo isset ($content) ? $content : ''; ?>

    <div id='about'>
      <div class='container'>
        <div>
          <h3><?php echo Lang::get ('frame', 'about', '0', 'name');?></h3>
          <a<?php echo Lang::get ('frame', 'about', '0', 'subs', 'cnet', 'href') ? " href='" . Lang::get ('frame', 'about', '0', 'subs', 'cnet', 'href') . "'" : '';?>><?php echo Lang::get ('frame', 'about', '0', 'subs', 'cnet', 'text');?></a>
          <a<?php echo Lang::get ('frame', 'about', '0', 'subs', 'mission', 'href') ? " href='" . Lang::get ('frame', 'about', '0', 'subs', 'mission', 'href') . "'" : '';?>><?php echo Lang::get ('frame', 'about', '0', 'subs', 'mission', 'text');?></a>
          <a<?php echo Lang::get ('frame', 'about', '0', 'subs', 'customers', 'href') ? " href='" . Lang::get ('frame', 'about', '0', 'subs', 'customers', 'href') . "'" : '';?>><?php echo Lang::get ('frame', 'about', '0', 'subs', 'customers', 'text');?></a>
          <a<?php echo Lang::get ('frame', 'about', '0', 'subs', 'customer_happiness', 'href') ? " href='" . Lang::get ('frame', 'about', '0', 'subs', 'customer_happiness', 'href') . "'" : '';?>><?php echo Lang::get ('frame', 'about', '0', 'subs', 'customer_happiness', 'text');?></a>
          <a<?php echo Lang::get ('frame', 'about', '0', 'subs', 'sales_marketing', 'href') ? " href='" . Lang::get ('frame', 'about', '0', 'subs', 'sales_marketing', 'href') . "'" : '';?>><?php echo Lang::get ('frame', 'about', '0', 'subs', 'sales_marketing', 'text');?></a>
          <a<?php echo Lang::get ('frame', 'about', '0', 'subs', 'service', 'href') ? " href='" . Lang::get ('frame', 'about', '0', 'subs', 'service', 'href') . "'" : '';?>><?php echo Lang::get ('frame', 'about', '0', 'subs', 'service', 'text');?></a>
          <a<?php echo Lang::get ('frame', 'about', '0', 'subs', 'production', 'href') ? " href='" . Lang::get ('frame', 'about', '0', 'subs', 'production', 'href') . "'" : '';?>><?php echo Lang::get ('frame', 'about', '0', 'subs', 'production', 'text');?></a>
        </div>
        <div>
          <h3><?php echo Lang::get ('frame', 'about', '1', 'name');?></h3>
          <a<?php echo Lang::get ('frame', 'about', '1', 'subs', 'home_page', 'href') ? " href='" . Lang::get ('frame', 'about', '1', 'subs', 'home_page', 'href') . "'" : '';?>><?php echo Lang::get ('frame', 'about', '1', 'subs', 'home_page', 'text');?></a>
          <a<?php echo Lang::get ('frame', 'about', '1', 'subs', 'products', 'href') ? " href='" . Lang::get ('frame', 'about', '1', 'subs', 'products', 'href') . "'" : '';?>><?php echo Lang::get ('frame', 'about', '1', 'subs', 'products', 'text');?></a>
          <a<?php echo Lang::get ('frame', 'about', '1', 'subs', 'our_partners', 'href') ? " href='" . Lang::get ('frame', 'about', '1', 'subs', 'our_partners', 'href') . "'" : '';?>><?php echo Lang::get ('frame', 'about', '1', 'subs', 'our_partners', 'text');?></a>
          <a<?php echo Lang::get ('frame', 'about', '1', 'subs', 'news', 'href') ? " href='" . Lang::get ('frame', 'about', '1', 'subs', 'news', 'href') . "'" : '';?>><?php echo Lang::get ('frame', 'about', '1', 'subs', 'blog', 'text');?></a>
          <a<?php echo Lang::get ('frame', 'about', '1', 'subs', 'corporate', 'href') ? " href='" . Lang::get ('frame', 'about', '1', 'subs', 'corporate', 'href') . "'" : '';?>><?php echo Lang::get ('frame', 'about', '1', 'subs', 'corporate', 'text');?></a>
          <a<?php echo Lang::get ('frame', 'about', '1', 'subs', 'support', 'href') ? " href='" . Lang::get ('frame', 'about', '1', 'subs', 'support', 'href') . "'" : '';?>><?php echo Lang::get ('frame', 'about', '1', 'subs', 'support', 'text');?></a>
          <a<?php echo Lang::get ('frame', 'about', '1', 'subs', 'contact', 'href') ? " href='" . Lang::get ('frame', 'about', '1', 'subs', 'contact', 'href') . "'" : '';?>><?php echo Lang::get ('frame', 'about', '1', 'subs', 'contact', 'text');?></a>
        </div>
        <div>
          <h3><?php echo Lang::get ('frame', 'about', '2', 'name');?></h3>
          <a<?php echo Lang::get ('frame', 'about', '2', 'subs', 'address', 'href') ? " href='" . Lang::get ('frame', 'about', '2', 'subs', 'address', 'href') . "'" : '';?>><?php echo Lang::get ('frame', 'about', '2', 'subs', 'address', 'text');?></a>
          <a<?php echo Lang::get ('frame', 'about', '2', 'subs', 'phone', 'href') ? " href='" . Lang::get ('frame', 'about', '2', 'subs', 'phone', 'href') . "'" : '';?>><?php echo Lang::get ('frame', 'about', '2', 'subs', 'phone', 'text');?></a>
          <a<?php echo Lang::get ('frame', 'about', '2', 'subs', 'mail', 'href') ? " href='" . Lang::get ('frame', 'about', '2', 'subs', 'mail', 'href') . "'" : '';?>><?php echo Lang::get ('frame', 'about', '2', 'subs', 'mail', 'text');?></a>
        </div>
      </div>
    </div>

    <footer id='footer'>
      <div class='container'>
        <div><?php echo Lang::get ('frame', 'copyright');?></div>
        <div><img src="<?php echo base_url ('resource', 'image', 'valid-html5.png');?>"><img src="<?php echo base_url ('resource', 'image', 'argede.png');?>"></div>
      </div>
    </footer>
  </body>
</html>