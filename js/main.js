$(document).ready(function () {
    'use strict';
   
   
    $('.menu-item-box .menu-item').on('click', function (e) {
        e.preventDefault();
        $('.menu-item-box').removeClass('active');
        $(this).parent('.menu-item-box').addClass('active');
        
    });
    
    
	
	// ***************************
    // BannerOne Functions
    // ***************************
      jQuery('.touristpoint-banner').slick({
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 2000,
          infinite: true,
          dots: false,
          arrows: false,
          fade: true,
          responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                  }
                },
                {
                  breakpoint: 800,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                },
                {
                  breakpoint: 400,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
        });
	
	// ***************************
    // ThumbSlider Functions
    // ***************************
    // jQuery('.touristpoint-banner').slick({
          // slidesToShow: 1,
          // autoplay: true,
          // slidesToScroll: 1,
          // arrows: false,
          // fade: true,
          // asNavFor: '.constructit-testimonial-thumb-list'
        // });
        // jQuery('.constructit-testimonial-thumb-list').slick({
          // slidesToShow: 3,
          // slidesToScroll: 1,
          // autoplay: true,
          // asNavFor: '.constructit-testimonial',
          // dots: false,
          // arrows: false,
          // vertical: false,
          // centerMode: false,
          // focusOnSelect: true,
          // responsive: [
                // {
                  // breakpoint: 1024,
                  // settings: {
                    // slidesToShow: 1,
                    // slidesToScroll: 1,
                    // infinite: true,
                    // vertical: false,
                  // }
                // },
                // {
                  // breakpoint: 800,
                  // settings: {
                    // slidesToShow: 1,
                    // slidesToScroll: 1,
                    // vertical: false,
                  // }
                // },
                // {
                  // breakpoint: 400,
                  // settings: {
                    // slidesToShow: 1,
                    // slidesToScroll: 1,
                    // vertical: false,
                  // }
                // }
              // ],
        // });
	
	
	
    
});
