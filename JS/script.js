//Burger menu stuff
$(document).ready(function() {
    $(".menu-icon").click(function() {
        $(".menu-icon").toggleClass("active")
    })

    $(".nav-button").click(function() {
        $(".menu-icon").toggleClass("active")
    })


    $(".menu-icon").click(function() {
        setTimeout(function(){$(".popdown-bar").delay(500).toggleClass("active")},0);
        // $(".popdown-bar").toggleClass("active")
    })

    $(".nav-button").click(function() {
        $(".popdown-bar").toggleClass("active")
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
        // $(".menu-color-bar").toggleClass("active")
    })

    $(".nav-button").click(function() {
        setTimeout(function(){$(".menu-color-bar").toggleClass("active")},50);
        // $(".menu-color-bar").toggleClass("active")
    })

})

//Change logo color
// jQuery(window).scroll(function(){
//     var fromTopPx = 550; // distance to trigger
//     var scrolledFromtop = jQuery(window).scrollTop();
//     if(scrolledFromtop > fromTopPx){
//         jQuery('.logo').attr('src','../Images/logo-black-blue.png');
//     }
//     if(scrolledFromtop > 800){
//         jQuery('.logo').attr('src','../Images/logo-black-blue.png');
//     }
//     else{
//         jQuery('.logo').attr('src','./Images/logo-pink-black.png');
//     }
// });

//Load Screen
window.addEventListener("load", function() {
    var load_screen = document.getElementById("load-screen");
    document.body.removeChild(load_screen);
})

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