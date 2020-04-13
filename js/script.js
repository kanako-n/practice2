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