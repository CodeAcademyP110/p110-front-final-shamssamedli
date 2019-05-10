"use strict";


// Start Slider

let index = 0;
const slides = document.querySelectorAll('.photos li');
let slider = $("slider");
let list = slider.find("ul.photos");
let length = $(".photos li").length;
let height = $(".slider").height();
let totalHeight = height * length;

$(".photos li").height(height).end().height(totalHeight);


$(document).on("click", ".arrow-left", function()
{
    SlideLeft();
});

$(document).on("click", ".arrow-right", function()
{
    SlideRight();
});

function Slide()
{
    $("ul.photos").css("top", -index * height);
    
}

function SlideRight(){
   index++
   if(index === slides.length)
    {
   	    index = 0;
   	}
   	Slide();
}

function SlideLeft()
{
    index--;
    if(index < 0)
    {
        index = slides.length - 1; 
    }    
    Slide();
}
let SliderInterval = setInterval(() => {
    SlideRight();
}, 4000); 

// End Slider