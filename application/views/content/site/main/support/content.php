<nav id='nav'>
  <div class='container'>
    <h1><?php echo Lang::get ('support', 'title');?></h1>
  </div>
</nav>

<div id='main' class='n2'>
  <div class='container'>
    <div class='left'>
      <div class='items' style='height: 150px;'>
        <p><?php echo Lang::get ('support', 'item');?></p>
      </div>
      <img src='<?php echo base_url ('resource', 'image', 'cnetflag.png');?>'>
    </div>
    <div class='right'>
        <article class='active'>
          <h2><?php echo Lang::get ('support', 'detail', 'title');?></h2>
            
          <div>
            <p class='icon-phone'><?php echo Lang::get ('support', 'detail', 'tel');?></p>
            <p class='icon-mail-envelope-closed'><?php echo Lang::get ('support', 'detail', 'email');?></p>
            <p class='icon-pin-alt'><?php echo Lang::get ('support', 'detail', 'address');?></p>
          </div>
          <div>
      <?php if (file_exists (FCPATH . implode (DIRECTORY_SEPARATOR, array ('resource', 'image', 'maps', Lang::current ()->code . '.png')))) { ?>
              <img src='<?php echo base_url ('resource', 'image', 'maps', Lang::current ()->code . '.png');?>'>
      <?php } ?>
          </div>
        </article>
    </div>
  </div>
</div>