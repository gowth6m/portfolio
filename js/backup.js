// ---------------------------------------------
// For intro typing effect ---------------------
// ---------------------------------------------
const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".typed-text-cursor");

const textArray = ["likes problem solving", "is studying in Exeter", "loves ramen", "likes to draw", "loves music", "is looking for internships", "wants to get into game dev"];
const typingDelay = 100;
const erasingDelay = 60;
const newTextDelay = 2000; // Delay between current and next text
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    setTimeout(erase, newTextDelay);
  }
}

function erase() {
  if (charIndex > 0) {
    if (!cursorSpan.classList.contains("typing"))
      cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(
      0,
      charIndex - 1
    );
    charIndex--;
    setTimeout(erase, erasingDelay);
  } else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if (textArrayIndex >= textArray.length) textArrayIndex = 0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // On DOM Load initiate the effect
  if (textArray.length) setTimeout(type, newTextDelay + 250);
});

// ---------------------------------------------
// Hamburger Menu Code -------------------------
// ---------------------------------------------

const burgerMenu = document.querySelector('.burger-menu');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');
const l1 = document.querySelector('.l1');
const l2 = document.querySelector('.l2');
const l3 = document.querySelector('.l3');
const link1 = document.querySelector('.link1');
const link2 = document.querySelector('.link2');
const link3 = document.querySelector('.link3');

burgerMenu.addEventListener('click', ()=> {
  navLinks.classList.toggle('open');

  // links.forEach(link => {
  //   link.classList.toggle('fade');
  // })

  l1.classList.toggle('active');
  l2.classList.toggle('active');
  l3.classList.toggle('active');
});

link1.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  links.forEach(link => {
    link.classList.toggle('fade');
  })

  l1.classList.toggle('active');
  l2.classList.toggle('active');
  l3.classList.toggle('active');
})
link2.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  links.forEach(link => {
    link.classList.toggle('fade');
  })

  l1.classList.toggle('active');
  l2.classList.toggle('active');
  l3.classList.toggle('active');
})
link3.addEventListener('click', () => {
  navLinks.classList.toggle('open');
  links.forEach(link => {
    link.classList.toggle('fade');
  })

  l1.classList.toggle('active');
  l2.classList.toggle('active');
  l3.classList.toggle('active');
})

// ========================================================
// Parallax stuff
// ========================================================
$(window).scroll(function() {
  parallax();
})

function parallax() {
  var wScroll = $(window).scrollTop();
  
  $('.parallax-bg').css('background-position','left '+(wScroll*0.55)+'px')

  $('.parallax-bg2').css('background-position','center '+(wScroll*0.45)+'px')

  $('.parallax-bg3').css('letter-spacing' +(wScroll*0.8)+'px')

  $('.plax').css('transform', 'translate(0px,+'+(wScroll*0.25)+'px')
  $('.plax2').css('transform', 'translate(0px,+'+(wScroll*0.2)+'px')
  $('.plax3').css('transform', 'translate(0px,+'+(wScroll*0.15)+'px')
  $('.plax4').css('transform', 'translate(0px,+'+(wScroll*0.55)+'px')
  $('.plax5').css('transform', 'translate(0px,+'+(wScroll*0.55)+'px')
}