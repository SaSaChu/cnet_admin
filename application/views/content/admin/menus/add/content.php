<div class='panel'>
  <header>
    <h2>新增選單</h2>
    <a href='<?php echo base_url ($uri_1);?>' class='icon-x'></a>
  </header>


  <form class='form' method='post' action='<?php echo base_url ($uri_1);?>'>

    <div class='row n2'>
      <label>* 語系</label>
      <div>
        <select name='lang_id'>
    <?php if ($langs = Lang::all (array ('select' => 'id, name'))) {
            foreach ($langs as $lang) { ?>
              <option value='<?php echo $lang->id;?>'<?php echo (isset ($posts['lang_id']) ? $posts['lang_id'] : 0) == $lang->id ? ' selected': '';?>><?php echo $lang->name;?></option>
      <?php }
          }?>
        </select>
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
