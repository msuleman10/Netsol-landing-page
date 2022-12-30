
function scrolDown() {
    window.scrollBy(0,20);
    document.getElementById("language").style.color="#1c72b8";
    document.getElementById("menuSlidButton").style.color="#1c72b8";
};

function mousScrol() {
    window.scrollBy(0,20);
    document.getElementById("language").style.color="#1c72b8";
    document.getElementById("menuSlidButton").style.color="#1c72b8";
};

document.getElementById("menuSlidButton").addEventListener("click",()=> document.getElementById("pageSlider").style.left="0rem");

document.getElementById("menuPageCloser").addEventListener("click",()=> document.getElementById("pageSlider").style.left="-79rem");

document.getElementById("mainMenuPageCloser").addEventListener("click",()=> {
    window.scrollBy(0,1000);
    document.getElementById("pageSlider").style.left="-79rem";
    document.getElementById("language").style.color="#1c72b8";
    document.getElementById("menuSlidButton").style.color="#1c72b8"; 
});

document.getElementById("manu").addEventListener("click" , ()=> document.getElementById("pageSlider").style.left="0rem")