<div class='panel'>
  <header>
    <h2>新增語系</h2>
    <a href='<?php echo base_url ($uri_1);?>' class='icon-x'></a>
  </header>


  <form class='form' method='post' action='<?php echo base_url ($uri_1);?>'>
    <div class='row n2'>
      <label>* 名稱</label>
      <div>
        <input type='text' name='name' value='<?php echo isset ($posts['name']) ? $posts['name'] : '';?>' placeholder='請輸入名稱..' maxlength='200' pattern='.{1,200}' required title='輸入名稱!' autofocus />
      </div>
    </div>
    <div class='row n2'>
      <label>語言包代碼</label>
      <div>
        <input type='text' name='code' value='<?php echo isset ($posts['code']) ? $posts['code'] : '';?>' placeholder='請輸入代碼..' maxlength='50' />
      </div>
    </div>
    <div class='row n2'>
      <label>鏈結</label>
      <div>
        <input type='text' name='link' value='<?php echo isset ($posts['link']) ? $posts['link'] : '';?>' placeholder='請輸入鏈結..' maxlength='2083' />
      </div>
    </div>

    <div class='btns'>
      <div class='row n2'>
        <label></label>
        <div>
          <button type='reset'>取消</button>
          <button type='submit'>送出</button>
        </div>
      </div>
    </div>
  </form>
</div>
