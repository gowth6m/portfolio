//Burger menu stuff
$(document).ready(function() {
    $(".menu-icon").click(function() {
        $(".menu-icon").toggleClass("active")
    })

    $(".menu-icon").click(function() {
        $(".popdown-bar").toggleClass("active")
    })

    $(".menu-icon").click(function() {
        $(".navbar").toggleClass("active")
    })

    $(".nav-button").click(function() {
        $(".popdown-bar").toggleClass("active")
    })

    $(".nav-button").click(function() {
        $(".menu-icon").toggleClass("active")
    })

})

//Change logo color
jQuery(window).scroll(function(){
    var fromTopPx = 550; // distance to trigger
    var scrolledFromtop = jQuery(window).scrollTop();
    if(scrolledFromtop > fromTopPx){
        jQuery('.logo').attr('src','./Images/tab-blue3.png');
    }else{
        jQuery('.logo').attr('src','./Images/tab-blue.png');
    }
});

//Load Screen
window.addEventListener("load", function() {
    var load_screen = document.getElementById("load-screen");
    document.body.removeChild(load_screen);
})
