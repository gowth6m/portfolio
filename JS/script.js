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
        // else if($(window).scrollTop() > (aboutme.top + 200)) {
        //     $(".header-bar").removeClass("header-bar-active").fadeOut(1000);
        //     console.log("test");
        // }
        else {
            $(".header-bar").removeClass("header-bar-active").fadeOut(1000);
        }
    });
})


//Load Screen
// window.addEventListener("load", function() {
//     var load_screen = document.getElementById("load-screen");
//     document.body.removeChild(load_screen);
// })

// $(function() {
//     $('.menu-icon').hover(function() {
//         $('.menu-icon span').css('margin', '0.8em');
//     }, function() {
//         $('.menu-icon span').css('margin', '0.8em');
//     });
// });

// $(document).ready(function(){
//     $(".menu-icon").mouseover(function(){
//         $(".menu-icon span").css("margin", "0.8em");
//     });
// });