/*ハンバーガー
  ------------------------------------------------*/
  (function($) {
    $(function() {
        var $header = $('#top-head');
        // Nav Fixed
        $(window).scroll(function() {
            if ($(window).scrollTop() > 350) {
                $header.addClass('fixed');
            } else {
                $header.removeClass('fixed');
            }
        });
        // Nav Toggle Button
        $('#nav-toggle').click(function(){
            $header.toggleClass('open');
        });
    });
})(jQuery);


/*スムーススクロール
  ------------------------------------------------*/
  $(function(){
    $('a[href^="#"]').click(function(){
      var speed = 500;
      var href= $(this).attr("href");
      var target = $(href == "#" || href == "" ? 'html' : href);
      var position = target.offset().top;
      $("html, body").animate({scrollTop:position}, speed, "swing");
      return false;
    });
  });


/*resultsスワイパー
  -------------------------------------------------*/
  if (window.matchMedia( "(max-width: 768px)" ).matches) {
    /* ウィンドウサイズが 768px以下の場合のコードをここに */
    new Swiper( '.swiper-container', {
            speed: 400,
            spaceBetween: 24,
            width: 277,
            loop: true,
            loopedSlides: 6,
            pagination: {
              el: '.swiper-pagination',
              type: 'bullets',
              clickable: true,
          }
      })
    } else {
    /* ウィンドウサイズが 768px以上の場合のコードをここに */
    new Swiper( '.swiper-container', {
    speed: 400,
    spaceBetween: 40,
    width: 422,
    loop: true,
    loopedSlides: 6,
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    }
    });
    }


/* FAQのアコーディオン
  ------------------------------------------------*/
$(function(){
  $( '.js-faq__Q' ).on( 'click', function() {
    $( this ) .next('.js-faq__A').slideToggle();
    $( this ).toggleClass( 'active' );

  });
});

/* フローティング
  -------------------------------------------------*/
  jQuery(window).on("scroll", function($) {
    if (jQuery(this).scrollTop() > 100) {
      jQuery('.floating').show();
    } else {
      jQuery('.floating').hide();
    }
  });
  
  jQuery('.floating').click(function () {
    jQuery('body,html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });