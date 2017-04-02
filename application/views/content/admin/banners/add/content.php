<div class='panel'>
  <header>
    <h2>新增 Banner</h2>
    <a href='<?php echo base_url ($uri_1);?>' class='icon-x'></a>
  </header>

  <form class='form full' method='post' action='<?php echo base_url ($uri_1);?>' enctype='multipart/form-data'>
    
    <div class='row n2'>
      <label>* 語系</label>
      <div>
        <select name='lang_id' id='lang_id'>
    <?php if ($langs = Lang::all (array ('select' => 'id, name'))) {
            foreach ($langs as $lang) { ?>
              <option value='<?php echo $lang->id;?>'<?php echo (isset ($posts['lang_id']) ? $posts['lang_id'] : 0) == $lang->id ? ' selected': '';?>><?php echo $lang->name;?></option>
      <?php }
          }?>
        </select>
      </div>
    </div>

    <div class='row n2'>
      <label>* 封面</label>
      <div class='img_row'>
        <div class='drop_img no_cchoice'>
          <img src='' />
          <input type='file' name='cover' />
        </div>
      </div>
    </div>


    <div class='row n2'>
      <label>* 鏈結</label>
      <div>
        <input type='text' name='link' value='<?php echo isset ($posts['link']) ? $posts['link'] : '';?>' placeholder='請輸入鏈結..' maxlength='200' pattern='.{1,200}' required title='輸入鏈結!' autofocus />
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
