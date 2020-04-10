/*resultsスワイパー
  -------------------------------------------------*/
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
  },
  // breakpoints: {
  //   768: {
  //     slidesPerView: 1.5,
  //     spaceBetween: 24,
  //   }
  // }
});

/* FAQのアコーディオン
  ------------------------------------------------*/
//questionをクリックしたときに答えの表示中は--activeをつけ、非表示中は外す
$(function(){
  // $('.faq-accordion__question').click(function() {
  //   var $answer = $(this).find('.faq-according__answer');
  //   if($answer.hasClass('open')) { 
  //     $answer.removeClass('open');
  //     // slideUpメソッドを用いて、$answerを隠す
  //     $answer.slideUp();
  //   } else {
  //     $answer.addClass('open'); 
  //     // slideDownメソッドを用いて、$answerを表示
  //     $answer.slideDown();
  //   }
  // });


  $( '.faq-accordion__question' ).on( 'click', function() {
    var $answer = $(this).find('.faq-according__answer');
    $( this ).toggleClass( 'active' );
    if($answer.hasClass('active')) { 
      // slideUpメソッドを用いて、$answerを隠す
      $answer.slideUp();
    } else {
      // $answer.addClass('active'); 
      // slideDownメソッドを用いて、$answerを表示
      $answer.slideDown();
    }
  });
});