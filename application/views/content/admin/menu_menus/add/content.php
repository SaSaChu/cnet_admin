<div class='panel'>
  <header>
    <h2>新增子選單</h2>
    <a href='<?php echo base_url ($uri_1, $parent->id, $uri_2);?>' class='icon-x'></a>
  </header>


  <form class='form' method='post' action='<?php echo base_url ($uri_1, $parent->id, $uri_2);?>'>
    <div class='row n2'>
      <label>* 語系</label>
      <div>
        <input type='hidden' name='lang_id' value='<?php echo $parent->lang->id;?>' />
        <?php echo $parent->lang->name;?>
      </div>
    </div>

    <div class='row n2'>
      <label>* 名稱</label>
      <div>
        <input type='text' name='name' value='<?php echo isset ($posts['name']) ? $posts['name'] : '';?>' placeholder='請輸入名稱..' maxlength='200' pattern='.{1,200}' required title='輸入名稱!' autofocus />
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
