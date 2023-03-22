$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Developer", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Developer", "Designer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-3", {
        strings: ["I makes a site look good. They use design programs to create visual elements. Website designers usually have expertise in UI, or user interface, which means they strategically design a site that's intuitive and easy for visitors to navigate."],
        typeSpeed: 100,
        backSpeed: 80,
        loop: false
    });
    var typed = new Typed(".typing-4", {
        strings: ["Advertisements can increase familiarity and trust between a company and its customers. If a potential customer sees multiple ads about your product, they may consider you a trusted brand"],
        typeSpeed: 100,
        backSpeed: 80,
        loop: false
    });
    var typed = new Typed(".typing-5", {
        strings: ["App design combines the user interface (UI) and user experience (UX). While UI lends itself to the overall style of the app (including the colors, fonts, and general look and feel), UX focuses on the actual functionality and usability."],
        typeSpeed: 100,
        backSpeed: 80,
        loop: false
    });


    // owl carousel script
    $('.carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeOut: 3000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});