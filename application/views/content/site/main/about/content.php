<nav id='nav'>
  <div class='container'>
    <h1>Kurumsal</h1>
  </div>
</nav>

<div id='main' class='n2'>
  <div class='container'>
    <div class='left'>
      <div class='items'>
        <a <?php echo $step == '0' ? ' class="active"' : '';?> href='<?php echo base_url ('about');?>'><?php echo Lang::get ('about', 'items', '0');?></a>
        <a<?php echo $step == '1' ? ' class="active"' : '';?> href='<?php echo base_url ('about', 1);?>'><?php echo Lang::get ('about', 'items', '1');?></a>
        <a<?php echo $step == '2' ? ' class="active"' : '';?> href='<?php echo base_url ('about', 2);?>'><?php echo Lang::get ('about', 'items', '2');?></a>
        <a<?php echo $step == '3' ? ' class="active"' : '';?> href='<?php echo base_url ('about', 3);?>'><?php echo Lang::get ('about', 'items', '3');?></a>
        <a<?php echo $step == '4' ? ' class="active"' : '';?> href='<?php echo base_url ('about', 4);?>'><?php echo Lang::get ('about', 'items', '4');?></a>
        <a<?php echo $step == '5' ? ' class="active"' : '';?> href='<?php echo base_url ('about', 5);?>'><?php echo Lang::get ('about', 'items', '5');?></a>
        <a<?php echo $step == '6' ? ' class="active"' : '';?> href='<?php echo base_url ('about', 6);?>'><?php echo Lang::get ('about', 'items', '6');?></a>
      </div>
      <img src='<?php echo base_url ('resource', 'image', 'cnetflag.png');?>'>
    </div>
    <div class='right'>
      <article>
        <h2><?php echo Lang::get ('about', 'details', $step, 'title');?></h2>
  <?php foreach (Lang::get ('about', 'details', $step, 'contents') as $content) { ?>
          <p><?php echo $content;?></p>
  <?php } ?>
      </article>
    </div>
  </div>
</div>