const mobile_btn =document.querySelector(".mobile_navbar");
const header =document.querySelector(".main-menu");

const toggleNavbar=function(){
    header.classList.toggle("active")
    // alert("Hello World")
};

mobile_btn.addEventListener("click" , function() {toggleNavbar()});


$(document).ready(function(){
    $('.person-info').slick({
        slidesToShow:3,
        arrows:false,
        focusOnSelect:true,
        autoplay:true,
        arrows:false,
        responsive: [
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 575,
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
  });
$(document).ready(function(){
    $('.blog-info').slick({
        slidesToShow:3,
        arrows:false,
        focusOnSelect:true,
        autoplay:true,
        arrows:false,
        responsive: [
            {
              breakpoint: 991,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
              }
            },
            {
              breakpoint: 767,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 575,
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
  });