<nav id='nav'>
  <div class='container'>
    <h1><?php echo Lang::get ('search', 'title');?>：「<?php echo $q;?>」</h1>
  </div>
</nav>

<div id='main' class='n1'>
  <div class='container'>
<?php
    foreach ($products as $product) { ?>
      <a href='<?php echo base_url ('product', $product->id);?>' class='product'>
        <img src='<?php echo $product->cover1->url ('500x500c');?>'>
        <h3><?php echo $product->title;?></h3>
      </a>
<?php
    } ?>
    <div class="pagination"><?php echo $pagination;?></div>
  </div>
</div>