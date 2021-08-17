/*==================== Swiper JS ====================*/
let galleryThumbs = new Swiper('.gallery-thumbs', {
    spaceBetween: 0,
    slidesPerView: 0,
});

let galleryTop = new Swiper('.gallery-top', {
    effect: 'fade',
    loop: true,

    thumbs: {
      swiper: galleryThumbs
    }
});

let swiperPopUp = new Swiper(".swiperPopUp", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

/*==================== Parallax & Scrolling FX ====================*/
const translate = document.querySelectorAll(".translate")

window.addEventListener("scroll", () => {
    let scroll = window.pageYOffset;
    let screenHeight = screen.height;
    let screenCalc = scroll/screenHeight;

    translate.forEach(element => {
        let speed = element.dataset.speed;
        element.style.transform  = `translateY(${scroll * speed}px)`;
    })


    let percentage = null;
    if(scroll > 130){
      percentage = ((scroll-130)/11.67)
    }
    indexBorder = document.getElementById("borderSectionTwo");
    if(indexBorder != null){
      document.getElementById("borderSectionTwo").style.width = percentage + "%";
    }

    var navElements = document.getElementsByClassName("navGoUp")
    if(screenCalc >= 0.5 ){
      for (let i = 0; i < navElements.length; i++) {
        navElements[i].classList.add("goUpShow");
      }
    }
    else{
      for (let i = 0; i < navElements.length; i++) {
        navElements[i].classList.remove("goUpShow");
      }
    }
    var navElements = document.getElementsByClassName("navAlt")
    if(screenCalc >= 0.9 ){
      for (let i = 0; i < navElements.length; i++) {
        navElements[i].classList.add("alt");
      }
    }
    else{
      for (let i = 0; i < navElements.length; i++) {
        navElements[i].classList.remove("alt");
      }
    }

/*==================== static background destinos ====================*/
    var subDestinos__imgCero = document.getElementById("subDestinos__imgCero");
    var subDestinos__imgUno = document.getElementById("subDestinos__imgUno");
    var subDestinos__imgDos = document.getElementById("subDestinos__imgDos");
    var markCero = document.getElementById("markCero");
    var markUno = document.getElementById("markUno");
    

    if(subDestinos__imgCero != null){
      subDestinos__imgCero.style.visibility = "visible";
      if(markCero.getBoundingClientRect().top <= 0){
        subDestinos__imgCero.style.visibility = "hidden";
        subDestinos__imgUno.style.visibility = "visible";
      }
      else{
        subDestinos__imgCero.style.visibility = "visible";
        subDestinos__imgUno.style.visibility = "hidden";
      }
    }
    if(subDestinos__imgCero != null){
      if(markUno.getBoundingClientRect().top <= 0){
        subDestinos__imgUno.style.visibility = "hidden";
        subDestinos__imgDos.style.visibility = "visible";
      }
      else{
        subDestinos__imgDos.style.visibility= "hidden";
      }
    }
})

/*==================== onClick FX ====================*/
var cardOverlay = document.getElementsByClassName("cardOverlay");
if(cardOverlay != null ){
  Array.from(cardOverlay).forEach(function(element, index){
    element.style.cursor = 'pointer';
    element.addEventListener("click", ()=>{
      window.scrollTo(0, document.getElementById("destino__" + index).offsetTop);
    })
  })
}

var capsula__imgCero = document.getElementsByClassName("capsula__imgCero");
var capsula__imgUno = document.getElementsByClassName("capsula__imgUno");
var capsula__imgDos = document.getElementsByClassName("capsula__imgDos");
var popupSubDestinosCero = document.getElementById("popupSubDestinosCero");
var popupSubDestinosUno = document.getElementById("popupSubDestinosUno");
var popupSubDestinosDos = document.getElementById("popupSubDestinosDos");
var popupClose = document.getElementsByClassName("popupClose");

if(capsula__imgCero != null ){
  Array.from(capsula__imgCero).forEach(function(element, index){
    element.addEventListener("click", ()=>{
      popupSubDestinosCero.classList.add("popupReveal")
      document.body.style.overflow= "hidden";
      swiperPopUp[0].slideTo(index, 0, false);
    })
  });
  Array.from(capsula__imgUno).forEach(function(element, index){
    element.addEventListener("click", ()=>{
      popupSubDestinosUno.classList.add("popupReveal")
      document.body.style.overflow= "hidden";
      swiperPopUp[1].slideTo(index, 0, false);
    })
  });
  Array.from(capsula__imgDos).forEach(function(element, index){
    element.addEventListener("click", ()=>{
      popupSubDestinosDos.classList.add("popupReveal")
      document.body.style.overflow= "hidden";
      swiperPopUp[2].slideTo(index, 0, false);
    })
  });

  if(popupClose != null){
    Array.from(popupClose).forEach(function(element, index){
      element.addEventListener("click", ()=>{
      popupSubDestinosCero.classList.remove("popupReveal")
      popupSubDestinosUno.classList.remove("popupReveal")
      popupSubDestinosDos.classList.remove("popupReveal")
      document.body.style.overflow = "auto";
      })
    });
  }
}

/*==================== hover navGradient ====================*/
var hideMenu = document.getElementById("hideMenu").addEventListener("mouseover", mouseOver);;
var hideMenu = document.getElementById("hideMenu").addEventListener("mouseout", mouseOut);;
var subMenu = document.getElementById("subMenu").addEventListener("mouseover", mouseOver);;
var subMenu = document.getElementById("subMenu").addEventListener("mouseout", mouseOut);;

function mouseOver() {
  document.getElementById("gradientNav").style.height = "300px";
}

function mouseOut() {
  document.getElementById("gradientNav").style.height = "100px";
}


/*==================== ScrollReveal ====================*/
var slideLeft = {
  distance: '150%',
  duration: "800" ,
  delay: "200",
  origin: 'right',
  opacity: "0"
};
var slideRight = {
  distance: '150%',
  duration: "800" ,
  delay: "200",
  origin: 'left',
  opacity: "0"
};
var slideDown = {
  duration: "800",
  opacity: "0",
  origin: 'bottom'
}
ScrollReveal().reveal('.subDestinos__seccion__capsula', slideLeft);
ScrollReveal().reveal('.textSectionTwo', slideLeft);
ScrollReveal().reveal('.sectionThreeData', slideRight);
ScrollReveal().reveal('.firstSection', slideDown);
ScrollReveal().reveal('.aboutSubtitle', slideLeft);
ScrollReveal().reveal('.people', slideDown);
ScrollReveal().reveal('.contactoTop', slideLeft);
ScrollReveal().reveal('.contactoLeft', slideRight);
ScrollReveal().reveal('.contactoRight', slideLeft);


/*==================== Mobile menu toggle ====================*/
const showMenu = (toggleId, navId) =>{
  var toggle = document.getElementById(toggleId);
  var nav = document.getElementById(navId)

  if(toggle && nav){
    toggle.addEventListener("click", ()=>{
      nav.classList.toggle("showMenu");
    })
  }
}
showMenu("navToggleId", "navMenuId");

/*==================== intro Gsap Animation ====================*/
const anchorNav = document.getElementById("navMenuId").querySelectorAll("a");
const anchorFoot = document.getElementById("footUrlsId").querySelectorAll("a");
const anchors = document.getElementsByClassName("anchorId");

const tl = gsap.timeline({ defaults: { ease: "power1.out" } });
var introArr = Array.from(document.getElementsByClassName("introText"));
if(introArr[0] != null){
  tl.to(".introText", { y: "0%", duration: 0.5, stagger: 0.25 });
  window.addEventListener("load", () => {
    tl.to(".introSlider", { y: "-100%", duration: 1.5, delay: 0.5});
    tl.to(".intro", { y: "-100%", duration: 1 }, "-=1");
  })
}
else{
  window.addEventListener("load", () => {
    tl.to(".introSlider", { y: "-100%", duration: 0.5, delay: 0.1});
    tl.to(".intro", { y: "-100%", duration: 0.4 }, "-=0.35");
  })
  setTimeout(() => {
    tl.to(".introSlider", { y: "-100%", duration: 0.5, delay: 0.1});
    tl.to(".intro", { y: "-100%", duration: 0.4 }, "-=0.35");
  }, 3000)
}

anchorNav.forEach(anchor => {
  anchor.addEventListener("click", e => {
    e.preventDefault();
    let target = anchor.href;

    setTimeout(() => {
      window.location.href = target;
    }, 500);

    tl.to(".outro", {y: "0%", duration: 0.5})
    tl.to(".outro", {y: "-100%", duration: 0.3, delay: 0.5})
    tl.to(".outro", {y: "100%", duration: 0})
  })
});
anchorFoot.forEach(anchor => {
  anchor.addEventListener("click", e => {
    e.preventDefault();
    let target = e.target.href;

    tl.to(".outro", {y: "0%", duration: 0.5})

    setTimeout(() => {
      window.location.href = target;
    }, 500);
  })
});
Array.from(anchors).forEach(anchor => {
  anchor.addEventListener("click", e => {
    e.preventDefault();
    let target = e.target.href;

    tl.to(".outro", {y: "0%", duration: 0.5})

    setTimeout(() => {
      window.location.href = target;
    }, 500);
  })
});

/*==================== cookies ====================*/
document.cookie = "_ga=GA1.2.1267423923.1618513656; SameSite=None; Secure"
document.cookie = "_gid=GA1.2.252817612.1623850509; SameSite=None; Secure"