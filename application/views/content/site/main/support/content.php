<nav id='nav'>
  <div class='container'>
    <h1><?php echo Lang::get ('support', 'title');?></h1>
  </div>
</nav>

<div id='main' class='n2'>
  <div class='container'>
    <div class='left'>
      <div class='items' style='height: 150px;'>
      </div>
      <img src='<?php echo base_url ('resource', 'image', 'cnetflag.png');?>'>
    </div>
    <div class='right'>
<?php foreach (Lang::get ('support', 'details') as $detail) { ?>
        <article class='active'>
          <h2><?php echo $detail['title'];?></h2>
    <?php foreach ($detail['contents'] as $content) { ?>
            <p><?php echo $content;?></p>
    <?php } ?>
        </article>
<?php } ?>
    </div>
  </div>
</div>