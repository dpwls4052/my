// const slideWrapper = document.querySelector('.swiper-wrapper');
// const swiperSlide = document.querySelectorAll('.swiper-slide');
// const slideBtnNext = document.querySelector('.next');
// const slideBtnPrev = document.querySelector('.prev');
// const slideLen = swiperSlide.length;
// const slideWidth = 100;
// const slideSpeed = 1000;
// const startNum = 0;

// slideWrapper.style.width = slideWidth * (slideLen + 2) +  "%";

// let check = true;
// let firstChild = slideWrapper.firstElementChild;
// let lastChild = slideWrapper.lastElementChild;
// let clonedFirst = firstChild.cloneNode(true);
// let clonedLast = lastChild.cloneNode(true);

// slideWrapper.appendChild(clonedFirst);
// slideWrapper.insertBefore(clonedLast, slideWrapper.firstElementChild);

// slideWrapper.style.transform = "translate3d(-" + (slideWidth * (startNum + 1)) + "%, 0%, 0%)";

// let curIndex = startNum; 
// let curSlide = swiperSlide[curIndex];
// curSlide.classList.add('slide_active');

// slideBtnNext.addEventListener('click', nextSlide);
// slideBtnPrev.addEventListener('click', prevSlide);

// // setInterval(function() {
// //     nextSlide();
// // }, 5000);

// function nextSlide() {
//     if(check){
//         check=false
//       if (curIndex <= slideLen - 1) {
//           slideWrapper.style.transition = slideSpeed +"ms transform";
//           slideWrapper.style.transform = "translate3d(-" + (slideWidth * (curIndex + 2)) + "%, 0%, 0%)";
//       }
//       if (curIndex === slideLen - 1){
//           setTimeout(function(){
//               slideWrapper.style.transition = "0ms";
//               slideWrapper.style.transform = "translate3d(-" + slideWidth + "%, 0%, 0%)";
//           },slideSpeed);
//           curIndex = -1;
//       }
//       curSlide.classList.remove('slide_active'); 
//       curSlide = swiperSlide[++curIndex];
//       curSlide.classList.add('slide_active');

//       setTimeout(() => {
//           check=true
//       }, 1000);
//     }
// }

// function prevSlide(){
//     if(check){
//         check=false
//       if (curIndex >= 0) {
//           slideWrapper.style.transition = slideSpeed +"ms transform";
//           slideWrapper.style.transform = "translate3d(-" + (slideWidth * curIndex) + "%, 0%, 0%)";
//       }
//       if (curIndex === 0){
//           setTimeout(function(){
//               slideWrapper.style.transition = "0ms";
//               slideWrapper.style.transform = "translate3d(-" + (slideWidth * slideLen) + "%, 0%, 0%)";
//           },slideSpeed);
//           curIndex = slideLen;
//       }
//       curSlide.classList.remove('slide_active');
//       curSlide = swiperSlide[--curIndex];
//       curSlide.classList.add('slide_active');

//       setTimeout(() => {
//           check=true
//       }, 1000);
//     }
// }
const content = "WELCOME TO MY PORTFOLIO"
const text = document.querySelector(".typing")
let index = 0;

function typing(){
    text.textContent +=content[index++];
    if(index > content.length){
        text.textContent = ""
        index = 0;
    }
}

setInterval(typing,400)


const modal = document.getElementById("modal")
function modalOn() {
    modal.style.display = "flex"
}
function isModalOn() {
    return modal.style.display === "flex"
}
function modalOff() {
    modal.style.display = "none"
}
const btnModal = document.getElementById("btn-modal")
btnModal.addEventListener("click", e => {
    modalOn()
})
const closeBtn = modal.querySelector(".close-area")
closeBtn.addEventListener("click", e => {
    modalOff()
})
modal.addEventListener("click", e => {
    const evTarget = e.target
    if(evTarget.classList.contains("modal-overlay")) {
        modalOff()
    }
})
window.addEventListener("keyup", e => {
    if(isModalOn() && e.key === "Escape") {
        modalOff()
    }
})