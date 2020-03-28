$(window).scroll(function() {
    parallax();
})

function parallax() {
    var wScroll = $(window).scrollTop();
    
    $('.parallax-bg').css('background-position','left '+(wScroll*0.55)+'px')

    $('.parallax-bg2').css('background-position','center '+(wScroll*0.45)+'px')

    $('.parallax-bg3').css('letter-spacing' +(wScroll*0.8)+'px')

    $('.plax').css('transform', 'translate(0px,+'+(wScroll*0.5)+'px')
    $('.plax2').css('transform', 'translate(0px,+'+(wScroll*0.2)+'px')
    $('.plax3').css('transform', 'translate(0px,+'+(wScroll*0.15)+'px')
    $('.plax4').css('transform', 'translate(0px,+'+(wScroll*0.55)+'px')
    $('.plax5').css('transform', 'translate(0px,+'+(wScroll*0.55)+'px')
}

