<div class='login' id='login'>
  <h1>CNET管理後台 v3</h1>
<?php 
  if (User::current ()) { ?>
    <div class='m'>您已經登入成功。<br/>請管理員為您開啟權限吧！</div>
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
