<!DOCTYPE html>
<html lang="zh">
  <head>
    <?php echo isset ($meta_list) ? $meta_list : ''; ?>

    <title><?php echo isset ($title) ? $title : ''; ?></title>

<?php echo isset ($css_list) ? $css_list : ''; ?>

<?php echo isset ($js_list) ? $js_list : ''; ?>

  </head>
  <body lang="zh-tw">
    <?php echo isset ($hidden_list) ? $hidden_list : ''; ?>

    <div id='container' class=''>
      <div id='main_row'>
        <div id='left_side'>
          
          <header>
            <a href='<?php echo base_url ();?>'>C</a>
            <span>CNET 管理後台!</span>
          </header>

          <div id='login_user'>
            <figure class='_i'>
              <img src="<?php echo User::current ()->avatar ();?>">
            </figure>
            <div>
              <span>Hi, 您好!</span>
              <span><?php echo User::current ()->account;?></span>
            </div>
          </div>

          <ul id='main_menu'>
            <li>
              <label data-cnt='0'>
                <input type='checkbox' />
                <span class='icon-u'>管理區</span>
                <ul>
                  <li><a href="<?php echo $url = base_url ('admin');?>" class='icon-se<?php echo $now_url == $url ? ' active' : '';?>'>後台首頁</a></li>
                  <li><a href="<?php echo $url = base_url ('admin', 'langs');?>" class='icon-se<?php echo $now_url == $url ? ' active' : '';?>'>語系管理</a></li>
                  <li><a href="<?php echo $url = base_url ('admin', 'menus');?>" class='icon-se<?php echo $now_url == $url ? ' active' : '';?>'>選單列表</a></li>
                  <li><a href="<?php echo $url = base_url ('admin', 'blogs');?>" class='icon-se<?php echo $now_url == $url ? ' active' : '';?>'>最新消息</a></li>
                  <li><a href="<?php echo $url = base_url ('admin', 'products');?>" class='icon-se<?php echo $now_url == $url ? ' active' : '';?>'>產品管理</a></li>
                </ul>
              </label>
            </li>
          </ul>

        </div>
        <div id='right_side'>
          <div id='top_side'>
            <button type='button' id='hamburger' class='icon-m'></button>
            <span>
              <a href='<?php echo base_url ('logout');?>' class='icon-o'></a>
            </span>
          </div>
          <div id='main'>
      <?php if ($_flash_danger = Session::getData ('_flash_danger', true)) { ?>
              <div id='_flash_danger'><?php echo $_flash_danger;?></div>
      <?php } else if ($_flash_info = Session::getData ('_flash_info', true)) { ?>
              <div id='_flash_info'><?php echo $_flash_info;?></div>
      <?php }?>
      <?php echo isset ($content) ? $content : ''; ?>
          </div>
          <div id='bottom_side'>
            後台版型設計 by <a href='https://www.zeusdesign.com.tw/' target='_blank'>宙思</a>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>