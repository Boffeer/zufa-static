$( document ).ready(function() {
  // Handler for .ready() called.
  $('.reviews-slider').slick({
    infinite: true,
    slidesToShow: 3,
    prevArrow: '<svg class="reviews-slider-slide__arrow reviews-slider-slide__arrow--prev" width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M10.7696 20.8939L31.0059 0.664285C31.8939 -0.221428 33.3325 -0.221428 34.2227 0.664285C35.1107 1.55 35.1107 2.98863 34.2227 3.87434L15.5915 22.4988L34.2205 41.1232C35.1084 42.0089 35.1084 43.4476 34.2205 44.3355C33.3325 45.2212 31.8916 45.2212 31.0037 44.3355L10.7674 24.106C9.89289 23.2294 9.89289 21.7682 10.7696 20.8939Z" fill="white"/> </svg>',
    nextArrow: '<svg class="reviews-slider-slide__arrow reviews-slider-slide__arrow--next" width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M34.2304 20.8939L13.9941 0.664285C13.1061 -0.221428 11.6675 -0.221428 10.7773 0.664285C9.88934 1.55 9.88934 2.98863 10.7773 3.87434L29.4085 22.4988L10.7795 41.1232C9.89158 42.0089 9.89158 43.4476 10.7795 44.3355C11.6675 45.2212 13.1084 45.2212 13.9963 44.3355L34.2326 24.106C35.1071 23.2294 35.1071 21.7682 34.2304 20.8939Z" fill="white"/> </svg>',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
            slidesToShow: 2,
        },
      },
      {
        breakpoint: 991,
        settings: {
            slidesToShow: 1,
            dots: true,
        },
      },
    ]
  });

  $('.header-burger').click(function() {
    // $(this).children('.faq-questions-dropdown-question-button__icon--2').addClass('faq-questions-dropdown-question-button__icon--active')
    if ($(this).hasClass('header-burger--opened')) {
      $('.header-bottom-wrap').slideUp();
      $(this).removeClass('header-burger--opened');
    } else {
      $('.header-bottom-wrap').slideDown();
      $(this).addClass('header-burger--opened');
    }
  })

  $('.faq-questions-dropdown-question-button').click(function() {
    // $(this).children('.faq-questions-dropdown-question-button__icon--2').addClass('faq-questions-dropdown-question-button__icon--active')
    if ($(this).hasClass('faq-questions-dropdown-question-button--active')) {
      $(this).parent().parent().children('.faq-questions-dropdown-answer').slideUp()
      $(this).removeClass('faq-questions-dropdown-question-button--active')
    } else {
      $(this).parent().parent().children('.faq-questions-dropdown-answer').slideDown()
      $(this).addClass('faq-questions-dropdown-question-button--active')
    }
  })


$('.product-thumbnails').slick({
  slidesToShow: 4,
  // rows: 4,
  slidesToScroll: 1,
  vertical: true,
  arrows: true,
  infinite: true,
  asNavFor: '.product-slider',
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 576,
      settings: 'unslick',
    },
  ]
});

$('.product-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  asNavFor: '.product-thumbnails',
  swipe: false,
  responsive: [
    {
      breakpoint: 576,
      settings: {
        dots: true,
        swipe: true,
      }
    }
  ]
});





  modality({
    pop: '.product-popup',
    clickTrigger: '.catalog-item-buy',
  })

  function onCallbackOpen() {
    $('.callback__input').val('');
  }
  modality({
    pop: '.callback-popup',
    clickTrigger: '.callback-button',
    onOpen: onCallbackOpen,
    // onClose:,
  })

  $('.slider-popup-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    prevArrow: '<svg class="slider-popup-slider__arrow reviews-slider-slide__arrow--prev" width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M10.7696 20.8939L31.0059 0.664285C31.8939 -0.221428 33.3325 -0.221428 34.2227 0.664285C35.1107 1.55 35.1107 2.98863 34.2227 3.87434L15.5915 22.4988L34.2205 41.1232C35.1084 42.0089 35.1084 43.4476 34.2205 44.3355C33.3325 45.2212 31.8916 45.2212 31.0037 44.3355L10.7674 24.106C9.89289 23.2294 9.89289 21.7682 10.7696 20.8939Z" fill="#333"/> </svg>',
    nextArrow: '<svg class="slider-popup-slider__arrow reviews-slider-slide__arrow--next" width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg"> <path d="M34.2304 20.8939L13.9941 0.664285C13.1061 -0.221428 11.6675 -0.221428 10.7773 0.664285C9.88934 1.55 9.88934 2.98863 10.7773 3.87434L29.4085 22.4988L10.7795 41.1232C9.89158 42.0089 9.89158 43.4476 10.7795 44.3355C11.6675 45.2212 13.1084 45.2212 13.9963 44.3355L34.2326 24.106C35.1071 23.2294 35.1071 21.7682 34.2304 20.8939Z" fill="#333"/> </svg>',
    arrows: true,
    responsive: [
      {
        breakpoint: 576,
        settings: {
          dots: true,
          swipe: true,
        }
      }
    ]
  })

  modality({
    pop: '.slider-popup--manufacturing',
    clickTrigger: '.own-buttons-button--manufacturing',
  })

  modality({
    pop: '.slider-popup--licenses',
    clickTrigger: '.own-buttons-button--certs',
  })



  /*
   * ready end
   */
});