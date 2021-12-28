const rightSlide = document.querySelector("#right-slide");
const leftSlide = document.querySelector("#left-slide");
const bannerImg = document.querySelector("#banner-img");
let translate = 0;
rightSlide.addEventListener("click",()=>{
    // alert("right button clicked!")
    translate = translate + 100;
    bannerImg.style.transform=`translate(${translate}vw)`;
})
leftSlide.addEventListener("click",()=>{
    translate = translate - 100;
    bannerImg.style.transform=`translate(${translate}vw)`;
})