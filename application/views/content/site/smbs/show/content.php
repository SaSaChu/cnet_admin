<nav id='nav'>
  <div class='container'>
    <h1><?php echo Lang::get ('support', 'title');?></h1>
  </div>
</nav>

<div id='main' class='n2'>
  <div class='container'>
    <div class='left'>
      <div class='items'>
  <?php foreach (SmbSolution::all () as $solution) { ?>
          <a href='<?php echo $solution->url ();?>'<?php echo $solution->id == $obj->id ? ' class="active"' : '';?>><?php echo $solution->menu;?></a>
  <?php } ?>
      </div>
      <img src='<?php echo base_url ('resource', 'image', 'cnetflag.png');?>'>
    </div>
    <div class='right'>
      <div class='title'><?php echo $obj->title;?></div>
      <div class='sub_title'><?php echo $obj->sub_title;?></div>
      <div class='content'><?php echo $obj->content;?></div>
    </div>
  </div>
</div>