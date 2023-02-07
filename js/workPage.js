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
var report1 = document.getElementById('report1')
var report1 = bodymovin.loadAnimation({
    container: report1, // required
    path: '../lottiefiles/maximizedconversion.json',
    renderer: 'svg',
    loop: true,
    autoplay: true,
    name: "Demo Animation",
});
var report2 = document.getElementById('report2')
var report2 = bodymovin.loadAnimation({
    container: report2, // required
    path: '../lottiefiles/minimizedwithbg.json',
    renderer: 'svg',
    loop: true,
    autoplay: true,
    name: "Demo Animation",
});
var report3 = document.getElementById('report3')
var report3 = bodymovin.loadAnimation({
    container: report3, // required
    path: '../lottiefiles/highengagment.json',
    renderer: 'svg',
    loop: true,
    autoplay: true,
    name: "Demo Animation",
});
var report4 = document.getElementById('report4')
var report4 = bodymovin.loadAnimation({
    container: report4, // required
    path: '../lottiefiles/organic.json',
    renderer: 'svg',
    loop: true,
    autoplay: true,
    name: "Demo Animation",
});
var report5 = document.getElementById('report5')
var report5 = bodymovin.loadAnimation({
    container: report5, // required
    path: '../lottiefiles/minimizedcpi.json',
    renderer: 'svg',
    loop: true,
    autoplay: true,
    name: "Demo Animation",
});
var report6 = document.getElementById('report6')
var report6 = bodymovin.loadAnimation({
    container: report6, // required
    path: '../lottiefiles/highengagmentsocialmedia.json',
    renderer: 'svg',
    loop: true,
    autoplay: true,
    name: "Demo Animation",
});
var report7 = document.getElementById('report7')
var report7 = bodymovin.loadAnimation({
    container: report7, // required
    path: '../lottiefiles/highqualityASSETS.json',
    renderer: 'svg',
    loop: true,
    autoplay: true,
    name: "Demo Animation",
});
var report8 = document.getElementById('report8')
var report8 = bodymovin.loadAnimation({
    container: report8, // required
    path: '../lottiefiles/highroi.json',
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


function LottieScrollTrigger(vars) {
    let playhead = { frame: 0 },
        target = gsap.utils.toArray(vars.target)[0],
        speeds = { slow: "+=2000", medium: "+=1000", fast: "+=500" },
        st = {
            trigger: target,
            pin: true,
            start: "top top",
            end: speeds[vars.speed] || "+=1000",
            scrub: 1
        },
        animation = lottie.loadAnimation({
            container: target,
            renderer: vars.renderer || "svg",
            loop: false,
            autoplay: false,
            path: vars.path
        });
    for (let p in vars) {
        st[p] = vars[p];
    }
    animation.addEventListener("DOMLoaded", function () {
        gsap.to(playhead, {
            frame: animation.totalFrames - 1,
            ease: "none",
            onUpdate: () => animation.goToAndStop(playhead.frame, true),
            scrollTrigger: st
        });
        ScrollTrigger.sort();
        ScrollTrigger.refresh();
    });
    return animation;
}


let tl = gsap.timeline()
ScrollTrigger.create({
    trigger: '.section-1',
    scroller: 'body',
    start: 'top+=10%',
    end: 'bottom-=60%',
    animation: tl.to(CSSRulePlugin.getRule(".hero > h1"), { duration: 3, cssRule: { fontSize: "5vw", alignSelf: "flex-start" } }).to(CSSRulePlugin.getRule(".hero"), { duration: 3, cssRule: { top: "21%" } }),
    scrub: 3,
    markers: false,
})
ScrollTrigger.create({
    trigger: '.section-1',
    scroller: 'body',
    start: '58%',
    end: '54%',
    animation: gsap.to(".hero", {
        y: -200,
        duration: 3,
        opacity: 1,
    }),
    scrub: 2,
    markers: false,
});
ScrollTrigger.create({
    trigger: '.section-1',
    scroller: 'body',
    start: '40%',
    end: '40%',
    animation: gsap.to(".box1", {
        opacity: "1"
    }),
    scrub: 1,
    markers: false,
});


let timeline = gsap.timeline()
ScrollTrigger.create({
    trigger: '.section3',
    scroller: 'body',
    start: 'top+=10%',
    end: 'bottom-=60%',
    animation: timeline.to(CSSRulePlugin.getRule(".trigger > #heading2"), { duration: 3, cssRule: { fontSize: "4vw", alignSelf: "flex-start" } }).to(CSSRulePlugin.getRule(".trigger"), { duration: 3, cssRule: { top: "18%" } }),
    scrub: 3,
    markers: false,
})
ScrollTrigger.create({
    trigger: '.section3',
    scroller: 'body',
    start: '57%',
    end: '56%',
    animation: gsap.to(".trigger", {
        y: -150,
        duration: 3,
        opacity: 1,
    }),
    scrub: 3,
    markers: false,
});
ScrollTrigger.create({
    trigger: '.section3',
    scroller: 'body',
    start: '40%',
    end: '40%',
    animation: gsap.to(".box2", {
        opacity: "1"
    }),
    scrub: 1,
    markers: false,
});
let timeline1 = gsap.timeline()
ScrollTrigger.create({
    trigger: '.section4',
    scroller: 'body',
    start: 'top+=10%',
    end: 'bottom-=60%',
    animation: timeline1.to(CSSRulePlugin.getRule(".trigger1 > #heading3"), { duration: 3, cssRule: { fontSize: "5vw", alignSelf: "flex-start" } }).to(CSSRulePlugin.getRule(".trigger1"), { duration: 3, cssRule: { top: "20%" } }),
    scrub: 3,
    markers: false,
})
ScrollTrigger.create({
    trigger: '.section4',
    scroller: 'body',
    start: '55%',
    end: '54%',
    animation: gsap.to(".trigger1", {
        y: -150,
        duration: 3,
        opacity: 1,
    }),
    scrub: 3,
    markers: false,
});
ScrollTrigger.create({
    trigger: '.section4',
    scroller: 'body',
    start: '40%',
    end: '40%',
    animation: gsap.to(".box3", {
        opacity: "1"
    }),
    scrub: 1,
    markers: false,
});
let timeline2 = gsap.timeline()
ScrollTrigger.create({
    trigger: '.section5',
    scroller: 'body',
    start: 'top+=10%',
    end: 'bottom-=60%',
    animation: timeline2.to(CSSRulePlugin.getRule(".trigger2 > #heading4"), { duration: 3, cssRule: { fontSize: "5vw", alignSelf: "flex-start" } }).to(CSSRulePlugin.getRule(".trigger2"), { duration: 3, cssRule: { top: "22%" } }),
    scrub: 3,
    markers: false,
})
ScrollTrigger.create({
    trigger: '.section5',
    scroller: 'body',
    start: '40%',
    end: '40%',
    animation: gsap.to(".box4", {
        opacity: "1"
    }),
    scrub: 1,
    markers: false,
});