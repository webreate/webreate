window.addEventListener('scroll', () => {
    header.classList.toggle('sticky', window.scrollY > 0)
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
btn.onclick = () => {
    bar1.classList.add('active_bar')
    bar2.classList.add('active_bar')
    navbar.classList.add('active_bar')
}
close.onclick = () => {
    btn.style.opacity = "1"
    bar1.classList.remove('active_bar')
    bar2.classList.remove('active_bar')
    navbar.classList.remove('active_bar')
}
close1.onclick = () => {
    btn.style.opacity = "1"
    bar1.classList.remove('active_bar')
    bar2.classList.remove('active_bar')
    navbar.classList.remove('active_bar')
}

window.onscroll = () => {
    menu.classList.remove('bx-x')
    navbar.classList.remove('active_bar')
}
let loader1 = document.querySelector(".preloader")

window.addEventListener("load", () => {
  loader1.style.display = "none"
})
var loader = document.getElementById('loader')
var loaderr = bodymovin.loadAnimation({
  container: loader, // required
  path: '../lottiefiles/loading-logo.json',
  renderer: 'svg',
  loop: true,
  autoplay: true,
  name: "Demo Animation",
});

var logo = document.getElementById('logo')
var logo = bodymovin.loadAnimation({
    container: logo, // required
    path: '../lottiefiles/logo.json',
    renderer: 'svg',
    loop: true,
    autoplay: true,
    name: "Demo Animation",
});
var logo1 = document.getElementById('logo1')
var logo1 = bodymovin.loadAnimation({
    container: logo1, // required
    path: '../lottiefiles/logo2.json',
    renderer: 'svg',
    loop: true,
    autoplay: true,
    name: "Demo Animation",
});
var logo2 = document.getElementById('logo2')
var logo2 = bodymovin.loadAnimation({
    container: logo2, // required
    path: '../lottiefiles/logo.json',
    renderer: 'svg',
    loop: true,
    autoplay: true,
    name: "Demo Animation",
});

AOS.init({
    offset: 10,
    once: false,
    mirror: false,
});
