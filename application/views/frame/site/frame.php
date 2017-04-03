<!DOCTYPE html>
<html class="no-js">
  <head>
    <?php echo isset ($meta_list) ? $meta_list : ''; ?>

    <title><?php echo isset ($title) ? $title : ''; ?></title>
    
    <link rel="icon" type="image/x-icon" href="<?php echo base_url ('resource', 'image', 'fav.png');?>" />

<?php echo isset ($css_list) ? $css_list : ''; ?>

<?php echo isset ($js_list) ? $js_list : ''; ?>

  </head>
  <body lang="zh-tw">
    <?php echo isset ($hidden_list) ? $hidden_list : ''; ?>

    <div id='top'>
      <div class='container'>
        <div>+90 216 592 98 00</div>
        <form>
          <input type='search' name='search' placeholder='我要搜尋...' />
          <button typ='submit' class='icon-search'></button>
        </form>
        <span class='lang'>
          <select>
            <option>中文</option>
            <option>英文</option>
          </select>
          <label class='icon-keyboard_arrow_down'></label>
        </span>
      </div>
    </div>

    <header id='header'>
      <input type='checkbox' id='menu_ckb' >
      <div class='container'>
        <div class='logo'>
          <img src='<?php echo base_url ('resource', 'image', 'logo.png');?>'>
        </div>
        <div class='menu n6'>
          <div>
            <a href='' class='active'>首頁</a>
            <a href=''>關於我們</a>
            <a href=''>最新消息</a>
            <a href=''>支持</a>
            <a href=''>產品</a>
            <a href=''>我們的合作夥伴</a>
          </div>
        </div>
        <label class='icon-menu' for='menu_ckb'></label>
      </div>
    </header>

    <div id='banner'>
      <div class='container'>

        <div class='banners n1'>
          <a href=''>
            <img src='http://127.0.0.1/case/cnet/Storage/Web/Original/9e57c7a0-41d4-4a47-97c2-a230a2254f27.png'>
          </a>
          <a href=''>
            <img src='http://127.0.0.1/case/cnet/Storage/Web/Original/050fd724-9533-41f1-bef8-403ee98dee15.png'>
          </a>
          <a href=''>
            <img src='http://127.0.0.1/case/cnet/Storage/Web/Original/9e57c7a0-41d4-4a47-97c2-a230a2254f27.png'>
          </a>
          <a href=''>
            <img src='http://127.0.0.1/case/cnet/Storage/Web/Original/050fd724-9533-41f1-bef8-403ee98dee15.png'>
          </a>
          <a href=''>
            <img src='http://127.0.0.1/case/cnet/Storage/Web/Original/9e57c7a0-41d4-4a47-97c2-a230a2254f27.png'>
          </a>
        </div>
        <div class='dots'>
          <a></a>
          <a></a>
          <a></a>
          <a></a>
        </div>
      </div>
    </div>

    <div id='menu'>
      <div class='container'>
        <div class='items'>
          <div>
            <a href=''>ADSL/VDSL</a>
            <a href=''>Wi-Fi Router</a>
            <a href=''>Wi-Fi Extender</a>
            <a href=''>USB Wi-Fi Adaptör</a>
            <a href=''>Switch</a>
            <a href=''>Spotcam</a>
          </div>
        </div>
      </div>
    </div>
    
    <div id='products'>
      <div class='container'>
        <h2>混合產品</h2>
        <div class='items'>
          <a href="">
            <img src='http://127.0.0.1/case/cnet/Storage/Web/Original/c2c9e9e6-14be-4547-b5ff-4ed9dbb3b060.jpg'>
            <span>CSH-800 8 Port Fast Ethernet Switch</span>
          </a>
          <a href="">
            <img src='http://127.0.0.1/case/cnet/Storage/Web/Original/c2c9e9e6-14be-4547-b5ff-4ed9dbb3b060.jpg'>
            <span>C1 High Power Touch Screen Wi-Fi Range Extender</span>
          </a>
          <a href="">
            <img src='http://127.0.0.1/case/cnet/Storage/Web/Original/c2c9e9e6-14be-4547-b5ff-4ed9dbb3b060.jpg'>
            <span>CSH-800 8 Port Fast Ethernet Switch</span>
          </a>
          <a href="">
            <img src='http://127.0.0.1/case/cnet/Storage/Web/Original/c2c9e9e6-14be-4547-b5ff-4ed9dbb3b060.jpg'>
            <span>CSH-800 8 Port Fast Ethernet Switch</span>
          </a>
        </div>
      </div>
    </div>

    <div id='blog'>
      <div class='container'>
        <div>
          <h3>Cnet 新聞</h3>
          <a href="">
            <h4>Gaziantep Tanıtım Toplantısı</h4>
            <p>Ağ ürünlerinde 25 yılı aşkın tecrübesi ile yeniden Türkiye pazarına giren CNet ile güvenlik sistemleri konusunda 10 yıllık bilgi ve birikime sahip, tüketici elektroniğinin lider firmalarından Next&NextStar Gaziantep’te ortak bir organizasyonla bir araya gelerek misafirlerini ağırlayacaklar.</p>
          </a>
          <a href="">
            <h4>Gaziantep Tanıtım Toplantısı</h4>
            <p>Ağ ürünlerinde 25 yılı aşkın tecrübesi ile yeniden Türkiye pazarına giren CNet ile güvenlik sistemleri konusunda 10 yıllık bilgi ve birikime sahip, tüketici elektroniğinin lider firmalarından Next&NextStar Gaziantep’te ortak bir organizasyonla bir araya gelerek misafirlerini ağırlayacaklar.</p>
          </a>
          <a href="">
            <h4>Gaziantep Tanıtım Toplantısı</h4>
            <p>Ağ ürünlerinde 25 yılı aşkın tecrübesi ile yeniden Türkiye pazarına giren CNet ile güvenlik sistemleri konusunda 10 yıllık bilgi ve birikime sahip, tüketici elektroniğinin lider firmalarından Next&NextStar Gaziantep’te ortak bir organizasyonla bir araya gelerek misafirlerini ağırlayacaklar.</p>
          </a>
          <a href="">Tümünü Gör</a>
        </div>
        <div>
          <h3>關於Cnet</h3>
          <div>
            <img src='http://127.0.0.1/case/cnet/Images/welcome.jpg' />
            <p>1987 de kurulan ve ürettiği network ekipmanlarıyla global pazarda önemli bir yere sahip olan CNet, ABD ve Uluslararası pazarlarda yüksek kaliteli ürünleriyle kendini zirveye taşımıştır. Türkiye piyasasına yabancı olmayan CNet, Next&NextStar ile yapmış olduğu distribütörlük anlaşmasıyla birlikte Next&NextStar güvencesiyle yeniden Türkiye-de.</p>
          </div>
        </div>
      </div>
    </div>

    <div id='about'>
      <div class='container'>
        <div><h3>Kurumsal</h3><a href="">Kurumsal</a><a href="">Kurumsal</a><a href="">Kurumsal</a></div>
        <div><h3>Kurumsal</h3><a href="">Kurumsal</a><a href="">Kurumsal</a><a href="">Kurumsal</a></div>
        <div><h3>Kurumsal</h3><a href="">Kurumsal</a><a href="">Kurumsal</a><a href="">Kurumsal</a></div>
      </div>
    </div>

    <footer id='footer'>
      <div class='container'>
        <div>© 2015 Copyright, CNet Technology Corporation. All Rights Reserved.</div>
        <div><img src="<?php echo base_url ('resource', 'image', 'valid-html5.png');?>"><img src="<?php echo base_url ('resource', 'image', 'argede.png');?>"></div>
      </div>
    </footer>
  </body>
</html>