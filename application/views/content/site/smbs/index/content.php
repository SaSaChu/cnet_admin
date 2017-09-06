<nav id='nav'>
  <div class='container'>
    <h1><?php echo Lang::get ('smbs', 'title');?></h1>
  </div>
</nav>

<div id='main' class='n2'>
  <div class='container'>
    <div class='left'>
      <div class='items'>
  <?php foreach (SmbSolution::all () as $solution) { ?>
          <a href='<?php echo $solution->url ();?>'><?php echo $solution->menu;?></a>
  <?php } ?>
      </div>
      <img src='<?php echo base_url ('resource', 'image', 'cnetflag.png');?>'>
    </div>
    <div class='right'>
      <div class='banner'>
        <img src='<?php echo $obj ? $obj->cover->url () : '';?>'>
        <div><?php echo $obj ? $obj->title1 : '';?></div>
        <span><?php echo nl2br($obj ? $obj->sub_title1 : '');?></span>
      </div>

      <div class='b2'>
        <div><?php echo $obj ? $obj->title2 : '';?></div>
        <span><?php echo nl2br($obj ? $obj->sub_title2 : '');?></span>
      </div>

      <div class='ms'>
  <?php foreach (SmbSolution::all () as $solution) { ?>
          <a href='<?php echo $solution->url ();?>'>
            <div class='ic'><img src='<?php echo $solution->cover->url ();?>' /></div>
            <b><?php echo $solution->mini_title ();?></b>
            <span><?php echo $solution->sub_title;?></span>
          </a>
  <?php } ?>
      </div>

    </div>
  </div>
</div>