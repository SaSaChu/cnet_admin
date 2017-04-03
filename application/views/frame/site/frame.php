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
        <form>
          <input type='search' name='search' placeholder='我要搜尋...' />
          <button typ='submit' class='icon-search'></button>
        </form>
        <span class='lang'>
          <select>
            <option>中文</option>
            <option>英文</option>
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
            <a href='' class='active'>首頁</a>
            <a href=''>關於我們</a>
            <a href=''>最新消息</a>
            <a href=''>支持</a>
            <a href=''>產品</a>
            <a href=''>我們的合作夥伴</a>
          </div>
        </div>
        <label class='icon-menu' for='menu_ckb'></label>
      </div>
    </header>

<?php echo isset ($content) ? $content : ''; ?>

    <div id='about'>
      <div class='container'>
        <div><h3>Kurumsal</h3><a href="">Kurumsal</a><a href="">Kurumsal</a><a href="">Kurumsal</a></div>
        <div><h3>Kurumsal</h3><a href="">Kurumsal</a><a href="">Kurumsal</a><a href="">Kurumsal</a></div>
        <div><h3>Kurumsal</h3><a href="">Kurumsal</a><a href="">Kurumsal</a><a href="">Kurumsal</a></div>
      </div>
    </div>

    <footer id='footer'>
      <div class='container'>
        <div>© 2015 Copyright, CNet Technology Corporation. All Rights Reserved.</div>
        <div><img src="<?php echo base_url ('resource', 'image', 'valid-html5.png');?>"><img src="<?php echo base_url ('resource', 'image', 'argede.png');?>"></div>
      </div>
    </footer>
  </body>
</html>