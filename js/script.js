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
//クリックしたときに答えの表示中はopenをつけ、非表示中は外す
$('.faq-list__item').click(function() {
  var $answer = $(this).find('.answer');
  if($answer.hasClass('open')) { 
    $answer.removeClass('open');
    // slideUpメソッドを用いて、$answerを隠す
    $answer.slideUp();

    // 子要素のspanタグの中身をtextメソッドを用いて書き換える
    $(this).find('span').text('+');
    
  } else {
    $answer.addClass('open'); 
    // slideDownメソッドを用いて、$answerを表示
    $answer.slideDown();
    
    // 子要素のspanタグの中身をtextメソッドを用いて書き換える
    $(this).find('span').text('-');
    
  }
});