//Burger menu stuff
$(document).ready(function() {
    $(".menu-icon").click(function() {
        $(".menu-icon").toggleClass("active")
    })

    $(".nav-button").click(function() {
        $(".menu-icon").toggleClass("active")
    })

    $(".menu-icon").click(function() {
        setTimeout(function(){$(".hidden-nav").delay(500).toggleClass("active")},0);
        // $(".popdown-bar").toggleClass("active")
    })

    $(".nav-button").click(function() {
        $(".hidden-nav").toggleClass("active")
    })

    $(".menu-icon").click(function() {
        $(".logo").toggleClass("active")
    })

    $(".nav-button").click(function() {
        $(".logo").toggleClass("active")
    })

    $(".menu-icon").click(function() {
        $(".navbar").toggleClass("active")
    })

    $(".menu-icon").click(function() {
        setTimeout(function(){$(".menu-color-bar").toggleClass("active")},50);
    })

    $(".nav-button").click(function() {
        setTimeout(function(){$(".menu-color-bar").toggleClass("active")},50);
    })

    // function setParentTransition(id, prop, delay, style, callback) {
    //     $(id).css({'-webkit-transition' : prop + ' ' + delay + ' ' + style});
    //     $(id).css({'-moz-transition' : prop + ' ' + delay + ' ' + style});
    //     $(id).css({'-o-transition' : prop + ' ' + delay + ' ' + style});
    //     $(id).css({'transition' : prop + ' ' + delay + ' ' + style});
    //     callback();
    // }

    $(window).on('scroll', function() {
        var aboutme = $('.about-me').offset();
        var about = aboutme.top - $(document).scrollTop() + 150;
        var portfolio = $('.portfolio').offset().top - 500;
        // var port = portfolio.top - $(document).scrollTop() - 200;

        if($(window).scrollTop() > about) {
            $(".header-bar").addClass("header-bar-active").fadeIn(1000);
            // console.log("test");
        }
        else {
            $(".header-bar").removeClass("header-bar-active").fadeOut(1000);
        }
    });

    $(window).on('scroll', function() {
        var aboutmetitle = $('.about-me-title').offset().top/2;
        var aboutmetext = $('.about-me-text').offset().top;

        if($(window).scrollTop() > aboutmetitle) {
            $(".about-me-title").removeClass("scroll-fade");
            $(".about-me-text").removeClass("scroll-fade");
            $(".about-me-img").removeClass("scroll-in");
            // console.log("test");
        }
        else {
            $(".about-me-title").addClass("scroll-fade");
            $(".about-me-text").addClass("scroll-fade");
            $(".about-me-img").addClass("scroll-in");
        }
    });

    $(window).on('scroll', function() {
        var contacttitle = $('.contact-title').offset().top/1.25;
    
        if($(window).scrollTop() > contacttitle) {
            $(".contact-title").removeClass("scroll-fade");
            $(".contact-text").removeClass("scroll-fade");
            // console.log("test");
        }
        else {
            $(".contact-title").addClass("scroll-fade");
            $(".contact-text").addClass("scroll-fade");
        }
    });
})


//Load Screen
// window.addEventListener("load", function() {
//     var load_screen = document.getElementById("load-screen");
//     document.body.removeChild(load_screen);
// })
