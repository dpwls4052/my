const slideWrapper = document.querySelector('.swiper-wrapper');
const swiperSlide = document.querySelectorAll('.swiper-slide');
const slideBtnNext = document.querySelector('.next');
const slideBtnPrev = document.querySelector('.prev');
const slideLen = swiperSlide.length;
const slideWidth = 100;
const slideSpeed = 1000;
const startNum = 0;


slideWrapper.style.width = slideWidth * (slideLen + 2) +  "vw";

let check = true;
let firstChild = slideWrapper.firstElementChild;
let lastChild = slideWrapper.lastElementChild;
let clonedFirst = firstChild.cloneNode(true);
let clonedLast = lastChild.cloneNode(true);

slideWrapper.appendChild(clonedFirst);
slideWrapper.insertBefore(clonedLast, slideWrapper.firstElementChild);

slideWrapper.style.transform = "translateX(-" + (slideWidth * (startNum + 1)) + "vw)";

let curIndex = startNum; 
let curSlide = swiperSlide[curIndex];


slideBtnNext.addEventListener('click', nextSlide);
slideBtnPrev.addEventListener('click', prevSlide);

function nextSlide() {
    if(check){
        check=false
      if (curIndex <= slideLen - 1) {
          slideWrapper.style.transition = slideSpeed +"ms transform";
          slideWrapper.style.transform = "translateX(-" + (slideWidth * (curIndex + 2)) + "vw)";
      }
      if (curIndex === slideLen - 1){
          setTimeout(function(){
              slideWrapper.style.transition = "0ms";
              slideWrapper.style.transform = "translateX(-" + slideWidth + "vw)";
          },slideSpeed);
          curIndex = -1;
      }
      curSlide.classList.remove('slide_active'); 
      curSlide = swiperSlide[++curIndex];
      curSlide.classList.add('slide_active');

      setTimeout(() => {
          check=true
      }, 500);
    }
}

function prevSlide(){
    if(check){
        check=false
      if (curIndex >= 0) {
          slideWrapper.style.transition = slideSpeed +"ms transform";
          slideWrapper.style.transform = "translateX(-" + (slideWidth * curIndex) + "vw)";
      }
      if (curIndex === 0){
          setTimeout(function(){
              slideWrapper.style.transition = "0ms";
              slideWrapper.style.transform = "translateX(-" + (slideWidth * slideLen) + "vw)";
          },slideSpeed);
          curIndex = slideLen;
      }
      curSlide.classList.remove('slide_active');
      curSlide = swiperSlide[--curIndex];
      curSlide.classList.add('slide_active');

      setTimeout(() => {
          check=true
      }, 500);
    }
}


const content = "WELCOME TO MY PORTFOLIO"
const text = document.querySelector(".typing")
let index = 0;
let type = setInterval(typing,200);

function typing(){
    text.textContent +=content[index++];
    if(index === content.length){
        clearInterval(type);
    }                               
}



const modal = document.getElementById("modalcontents");
const modalButtons = document.getElementsByClassName("process-more-button");
const closeBtn = modal.getElementsByClassName("close-area");

for ( let i = 0 ; i < modal.childElementCount ; i ++) {
    modalButtons[i].addEventListener('click', ()=> {
        modalOn(i);
    })
    closeBtn[i].addEventListener('click', ()=>{
        modalOff(i);
    })
}

function modalOn(count) {
    modal.children[count].style.display = "flex"
    document.body.style.overflow = "hidden";
}
function isModalOn(count) {
    return modal.children[count].style.display === "flex"
}
function modalOff(count) {
    modal.children[count].style.display = "none"
    document.body.style.overflow = "auto";
}

window.addEventListener("click", e => {
    const evTarget = e.target
    console.log(evTarget);
    for( let i = 0 ; i < modal.childElementCount ; i ++){
        if(evTarget.classList.contains("modal-overlay")) {
            modalOff(i);
        }
    }
})


window.addEventListener("keyup", e => {
    for( let i = 0 ; i < modal.childElementCount ; i ++){
        if(isModalOn(i) && e.key === "Escape") {
            modalOff(i);
        }
    }
})

const body = document.querySelector('body');
const section = body.querySelector('.scrollcontent');

function handleWheel(event){
    console.log(event);
}

function init(){
    window.onmousewheel = function(e){
        console.dir(e);
        if(e.wheelDelta === -150){
            console.log('wheel down');
        }else{
            console.log('wheel up');
        }
    }
}

init();

// const spec_content_parent = document.querySelector('.scrollcontent').parentNode;
// const spec_content = document.querySelector('.scrollcontent');
// const CLASSNAME_NUM = 1;

// function onMouseWheel(name){
//     let previousDiv = name.previousElementSbling;
//     let nextDiv = name.nextElementSibling;
//     window.onmousewheel = function(e){
//         if(e.wheelDelta <= 0) {
//             console.log(nextDiv,'wheel down');
//             spec_content.animate({scrollTop : nextDiv.offsetTop},400);
//         }else if(e.wheelDelta >= 0){
//             console.log(previousDiv,'wheel up');
//         }
//     }
// }

// const mouseOver = function onMouseOver(e){
//     const targetParent = e.target.parentNode;
//     if(targetParent.className.includes(targetParent.classList[CLASSNAME_NUM])){
//         onMouseWheel(targetParent);
//     }
// }

// function getElementsByClassName(){
//     window.onmouseover = mouseOver;
// }

// function init(){
//     getCurrentDivClassName();
// }

// init();