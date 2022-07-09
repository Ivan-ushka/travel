let offset1 = 0;
const sliderLine = document.querySelector(".slider__line");

document.querySelector('.next').addEventListener('click', function (){
    offset1 = offset1 + 860;
    if(offset1 > 1660){
        offset1 = 0;
    }
    sliderLine.style.left = -offset1 + "px";
});

document.querySelector('.prev').addEventListener('click', function (){
    offset1 = offset1 - 860;
    if(offset1 < 0){
        offset1 = 860;
    }
    sliderLine.style.left = offset1 + "px";
});


