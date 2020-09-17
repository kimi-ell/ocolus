function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    
    testWebP(function (support) {
    
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
});
$('.recommended_row').slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: false,
          dots: false
        }
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $('.testimoial_row').slick({
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 3,
    adaptiveHeight: true,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
$(document).ready(function(){
    $('.header_menu').click(function(event) {
        $('.menu_icon,.header_menu-link,.nav_header').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('.header-nav-menu-list').click(function(event){
        $('.header-bottom-icon-menu,.header-nav-list').removeClass('active');
        $('body').removeClass('lock')
    });
});
// $(document).ready(function(){
//     $('.header-bottom-icon-menu').on('click', function(e) {
//         e.preventDefault();
//         $('.header-nav-list').slideToggle();
//     })
// })






