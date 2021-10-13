$(document).ready(function(){
    $('.responsive').slick({
        dots: false,
        infinite: true,
        speed:1000,
        prevArrow: '<i class="fas fa-long-arrow-alt-left left_arrow"></i>',
        nextArrow: '<i class="fas fa-long-arrow-alt-right right_arrow"></i>',
        autoplay:true,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
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
      // ===================== testimonials slider =========
      $('.testimonial_res').slick({
        dots: false,
        infinite: true,
        speed:1000,
        prevArrow: '<i class="fas fa-long-arrow-alt-left left_arrow"></i>',
        nextArrow: '<i class="fas fa-long-arrow-alt-right right_arrow"></i>',
        autoplay:true,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
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
      $('.menu_icon').click(function(){
        $('.menu_item').fadeToggle();
      })
  });