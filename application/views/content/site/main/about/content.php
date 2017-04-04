<nav id='nav'>
  <div class='container'>
    <h1>Kurumsal</h1>
  </div>
</nav>

<div id='main' class='n2'>
  <div class='container'>
    <div class='left'>
      <div class='items'>
  <?php foreach (Lang::get ('about', 'items') as $item) { ?>
          <a><?php echo $item;?></a>
  <?php } ?>
      </div>
      <img src='<?php echo base_url ('resource', 'image', 'cnetflag.png');?>'>
    </div>
    <div class='right'>
<?php foreach (Lang::get ('about', 'details') as $detail) { ?>
        <article>
          <h2><?php echo $detail['title'];?></h2>
    <?php foreach ($detail['contents'] as $content) { ?>
            <p><?php echo $content;?></p>
    <?php } ?>
        </article>
<?php } ?>
    </div>
  </div>
</div>