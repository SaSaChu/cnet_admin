<div class='login' id='login'>
  <h1>CNET管理後台 v3</h1>
<?php 
  if (User::current () && !User::current ()->is_login ()) { ?>
    <div class='m'>您已經登入成功。<br/>請<a href='mailto:teresa@zeusdesign.com.tw?subject=[CNET後台] 關於登入問題&body=Hi 管理員,%0D%0A%0D%0A 關於後台登入，請您幫我開啟登入的權限吧..'>管理員</a>為您開啟權限吧！</div>
<?php 
  } else if ($_flash_info = Session::getData ('_flash_info', true)) { ?>
    <div class='m'><?php echo $_flash_info;?></div>
<?php 
  } else if ($_flash_danger = Session::getData ('_flash_danger', true)) { ?>
    <div class='e'><?php echo $_flash_danger;?></div>
<?php 
  } ?>
  <form action='<?php echo base_url ('platform', 'ap_sign_in');?>' method='post'>
    <div class='row'>
      <input type='text' name='account' placeholder='請輸入帳號..' />
    </div>
    <div class='row'>
      <input type='password' name='password' placeholder='請輸入密碼..' />
    </div>
    <button type='submit'>登入</button>
  </form>
</div>
