$('.navbar-btn').on("click", function () {
  $('.active').not(this).removeClass('active');
  $(this).toggleClass('active');
})
$('.boxBtn').on("click", function () {
  $('.active3').not(this).removeClass('active3');
  $(this).toggleClass('active3');
})

// Menu Bar
var btn = document.getElementById('menu')
var close = document.getElementById('close')
var close1 = document.getElementById('close1')
var line = document.getElementById('line')
var bar1 = document.getElementById('left-bar')
var bar2 = document.getElementById('right-bar')
var boxBtn1 = document.getElementById('btn_box')
var boxBtn2 = document.getElementById('btn_box1')
var navbar = document.querySelector('.full_screen_bar')
var header = document.getElementById('navbar')
var line = document.getElementById('line')
btn.addEventListener("click", ()=>{
  bar1.classList.add('active_bar')
  bar2.classList.add('active_bar')
  navbar.classList.add('active_bar')
})
close.addEventListener("click", ()=>{
  btn.style.opacity = "1"
  bar1.classList.remove('active_bar')
  bar2.classList.remove('active_bar')
  navbar.classList.remove('active_bar')
})
close1.addEventListener("click", ()=>{
  btn.style.opacity = "1"
  bar1.classList.remove('active_bar')
  bar2.classList.remove('active_bar')
  navbar.classList.remove('active_bar')
})

window.onscroll = () => {
  menu.classList.remove('bx-x')
  navbar.classList.remove('active_bar')
}

window.addEventListener('scroll', () => {
  header.classList.toggle('sticky', window.scrollY > 0)
})

jQuery(document).ready(function () {
  jQuery(".container-wrap").append(
    "<ul class='circles'><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li><li></li></ul>"
  );
});

var swiper = new Swiper(".swiper2", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: true,
  },
});

var swiper = new Swiper(".swiper3", {
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
});

// for loading Page
let loader1 = document.querySelector(".preloader")

window.addEventListener("load", () => {
  loader1.style.display = "none"
})

var loader = document.getElementById('loader')
var loaderr = bodymovin.loadAnimation({
  container: loader, // required
  path: 'lottiefiles/loading-logo.json',
  renderer: 'svg',
  loop: true,
  autoplay: true,
  name: "Demo Animation",
});
var logo = document.getElementById('logo')
var logo = bodymovin.loadAnimation({
  container: logo, // required
  path: 'lottiefiles/logo.json',
  renderer: 'svg',
  loop: true,
  autoplay: true,
  name: "Demo Animation",
});
var logo1 = document.getElementById('logo1')
var logo1 = bodymovin.loadAnimation({
  container: logo1, // required
  path: 'lottiefiles/logo2.json',
  renderer: 'svg',
  loop: true,
  autoplay: true,
  name: "Demo Animation",
});
var logo2 = document.getElementById('logo2')
var logo2 = bodymovin.loadAnimation({
  container: logo2, // required
  path: 'lottiefiles/logo.json',
  renderer: 'svg',
  loop: true,
  autoplay: true,
  name: "Demo Animation",
});
var btns = document.getElementById('btns')
var animation1 = bodymovin.loadAnimation({
  container: btns, // required
  path: 'lottiefiles/development.json',
  renderer: 'svg',
  loop: false,
  autoplay: false,
  name: "Demo Animation",
});

btns.addEventListener('mouseenter', (e) => {
  animation1.setDirection(1);
  animation1.play();
});

btns.addEventListener('mouseleave', (e) => {
  animation1.setDirection(-1);
  animation1.play();
});
var btn2 = document.getElementById('btn2')
var animation2 = bodymovin.loadAnimation({
  container: btn2, // required
  path: 'lottiefiles/marketing.json',
  renderer: 'svg',
  loop: false,
  autoplay: false,
  name: "Demo Animation",
});
btn2.addEventListener('mouseenter', (e) => {
  animation2.setDirection(1);
  animation2.play();
});

btn2.addEventListener('mouseleave', (e) => {
  animation2.setDirection(-1);
  animation2.play();
});
var btn3 = document.getElementById('btn3')
var animation3 = bodymovin.loadAnimation({
  container: document.getElementById('btn3'), // required
  path: 'lottiefiles/optimisation171717.json',
  renderer: 'svg',
  loop: false,
  autoplay: false,
  name: "Demo Animation",
});
btn3.addEventListener('mouseenter', () => {
  animation3.setDirection(1);
  animation3.play();
});

btn3.addEventListener('mouseleave', () => {
  animation3.setDirection(-1);
  animation3.play();
});
var btn4 = document.getElementById('btn4')
var animation4 = bodymovin.loadAnimation({
  container: document.getElementById('btn4'), // required
  path: 'lottiefiles/managment.json',
  renderer: 'svg',
  loop: false,
  autoplay: false,
  name: "Demo Animation",
});
btn4.addEventListener('mouseenter', () => {
  animation4.setDirection(1);
  animation4.play();
});

btn4.addEventListener('mouseleave', () => {
  animation4.setDirection(-1);
  animation4.play();
});
var btn5 = document.getElementById('btn5')
var animation5 = bodymovin.loadAnimation({
  container: document.getElementById('btn5'), // required
  path: 'lottiefiles/creation.json',
  renderer: 'svg',
  loop: false,
  autoplay: false,
  name: "Demo Animation",
});
btn5.addEventListener('mouseenter', () => {
  animation5.setDirection(1);
  animation5.play();
});

btn5.addEventListener('mouseleave', () => {
  animation5.setDirection(-1);
  animation5.play();
});

// Service Page
var content = document.getElementById('content')
var content2 = document.getElementById('content2')
var devlopment = document.getElementById("development")
var creation = document.getElementById("creation")
var marketing = document.getElementById("marketing")
var optimization = document.getElementById("optimization")
var management = document.getElementById("management")
var head = document.getElementById('head1')
var mainBtn = document.getElementById("mainbtn")
var p1 = document.getElementById('p1')
btns.addEventListener('click', () => {
  content.style.transform = "rotateX(0deg)"
  content.style.transition = ".5s all linear"
  content2.style.transform = "rotateX(0deg)"
  content2.style.transition = ".5s all linear"
  head.innerHTML = "DEVELOPMENT"
  p1.innerHTML = "Implementing best techniques to enhance the technical support for the best appearance through Web, App. We ensure a wide range of development support to provide the best platforms to grow your revenue multiple times."
  mainBtn.href = "services/development.html"
})
btn2.addEventListener('click', () => {
  content.style.transform = "rotateX(72deg)"
  content.style.transition = ".5s all linear"
  content2.style.transform = "rotateX(72deg)"
  content2.style.transition = ".5s all linear"
  head.innerHTML = "MARKETING"
  p1.innerHTML = "One of the most important factor which ensure the obvious growth of the brand. Webreate offers optimised marketing techniques to ensure the best Return on investment, by targeting the most precise audience of the brand to ensure the best results."
  mainBtn.href = "services/marketing.html"
})
btn3.addEventListener('click', () => {
  content.style.transform = "rotateX(144deg)"
  content.style.transition = ".5s all linear"
  content2.style.transform = "rotateX(144deg)"
  content2.style.transition = ".5s all linear"
  p1.innerHTML = "With the most optimised and futuristic Solution, We provide the best optimisation support for the most genuine appearance on every Search Engine or Social media and to rank up the content in its domain to help you reach out the maximum audience. "
  head.innerHTML = "OPTIMISATION"
  mainBtn.href = "services/optimisation.html"
})
btn4.addEventListener('click', () => {
  content.style.transform = "rotateX(216deg)"
  content.style.transition = ".5s all linear"
  content2.style.transform = "rotateX(216deg)"
  content2.style.transition = ".5s all linear"
  p1.innerHTML = "Implementing best techniques to enhance the technical support for the best appearance through Web, App. We ensure a wide range of development support to provide the best platforms to grow your revenue multiple times."
  head.innerHTML = "MANAGEMENT"
  mainBtn.href = "../services/management.html"
})
btn5.addEventListener('click', () => {
  content.style.transform = "rotateX(288deg)"
  content.style.transition = ".5s all linear"
  content2.style.transform = "rotateX(288deg)"
  content2.style.transition = ".5s all linear"
  p1.innerHTML = "Crafting the best Visual and Content to enhance the perception of your idea online. Webreate is a team of young mind providing the most optimised solutions and the best creativity through trending ideas to ensure the best appearance on every platform. "
  head.innerHTML = "CREATION"
  mainBtn.href = "services/creation.html"
})

// solution section
var info1 = document.getElementById('info1')
var info2 = document.getElementById('info2')
var info3 = document.getElementById('info3')
var info4 = document.getElementById('info4')
var info5 = document.getElementById('info5')

var lottie1 = document.getElementById('lottie1')
var animation6 = bodymovin.loadAnimation({
  container: lottie1, // required
  path: 'lottiefiles/development.json',
  renderer: 'svg',
  loop: false,
  autoplay: false,
  name: "Demo Animation",
});

info1.addEventListener('mouseenter', (e) => {
  animation6.setDirection(1);
  animation6.play();
});

info1.addEventListener('mouseleave', (e) => {
  animation6.setDirection(-1);
  animation6.play();
});
var lottie2 = document.getElementById('lottie2')
var animation7 = bodymovin.loadAnimation({
  container: lottie2, // required
  path: 'lottiefiles/marketing.json',
  renderer: 'svg',
  loop: false,
  autoplay: false,
  name: "Demo Animation",
});
info2.addEventListener('mouseenter', (e) => {
  animation7.setDirection(1);
  animation7.play();
});

info2.addEventListener('mouseleave', (e) => {
  animation7.setDirection(-1);
  animation7.play();
});
var lottie3 = document.getElementById('lottie3')
var animation8 = bodymovin.loadAnimation({
  container: document.getElementById('lottie3'), // required
  path: 'lottiefiles/optimisation.json',
  renderer: 'svg',
  loop: false,
  autoplay: false,
  name: "Demo Animation",
});
info3.addEventListener('mouseenter', () => {
  animation8.setDirection(1);
  animation8.play();
});

info3.addEventListener('mouseleave', () => {
  animation8.setDirection(-1);
  animation8.play();
});
var lottie4 = document.getElementById('lottie4')
var animation9 = bodymovin.loadAnimation({
  container: document.getElementById('lottie4'), // required
  path: 'lottiefiles/managment.json',
  renderer: 'svg',
  loop: false,
  autoplay: false,
  name: "Demo Animation",
});
info4.addEventListener('mouseenter', () => {
  animation9.setDirection(1);
  animation9.play();
});

info4.addEventListener('mouseleave', () => {
  animation9.setDirection(-1);
  animation9.play();
});
var lottie5 = document.getElementById('lottie5')
var animation10 = bodymovin.loadAnimation({
  container: document.getElementById('lottie5'), // required
  path: 'lottiefiles/creation.json',
  renderer: 'svg',
  loop: false,
  autoplay: false,
  name: "Demo Animation",
});
info5.addEventListener('mouseenter', () => {
  animation10.setDirection(1);
  animation10.play();
});

info5.addEventListener('mouseleave', () => {
  animation10.setDirection(-1);
  animation10.play();
});

// Scrollig Effects

AOS.init({
  offset: 100,
  once: false,
  mirror: false,
});