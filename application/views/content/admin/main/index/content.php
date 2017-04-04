<div class='panel'>
  <header>
    <h2>基本資料</h2>
  </header>


  <form class='form'>
    <div class='row n2'>
      <label>管理員</label>
      <div>：<?php echo User::current ()->account;?></div>
    </div>

    <div class='row n2'>
      <label>登入次數</label>
      <div>：<?php echo number_format (User::current ()->login_count);?> 次</div>
    </div>

    <div class='row n2'>
      <label>上次登入</label>
      <div>：<?php echo User::current ()->logined_at->format ('Y-m-d H:i:s');?></div>
    </div>
  </form>
</div>
