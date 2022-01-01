const rightSlide = document.querySelector("#right-slide");
const leftSlide = document.querySelector("#left-slide");
const bannerImages = document.querySelectorAll(".image-container");

bannerImages.forEach((image,index)=>
{
    image.style.left=`${index*100}%`;
})
let count = 0;
rightSlide.addEventListener("click",function(){
    if(count>=3)
        count=0;
    else
        count++;
    moveslide();
})
leftSlide.addEventListener("click",function(){
    if(count==0)
        count=3;
    else
        count--;
    moveslide();
})
setInterval(()=>{
    if(count>=3)
        count=0;
    else
        count++;
    moveslide();
},3500);
function moveslide(){
    bannerImages.forEach(function(slide){
        slide.style.transform = `translateX(-${count*100}%)`;
    })
}
