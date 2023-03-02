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