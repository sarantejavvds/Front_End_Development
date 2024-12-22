
const slides = document.querySelectorAll(".slides_container img");

let slide_Index = 0, interval_ID = null;

document.addEventListener("DOMContentLoaded", initialize_Slider);

function initialize_Slider()
{
    if(slides.length > 0)
    {
        slides[slide_Index].classList.add("display_Slide");

        interval_ID = setInterval(next_Slide, 5000);
    }
}

function show_Slide(index)
{
    if(index >= slides.length)
    {
        slide_Index = 0;
    }
    else if(index < 0)
    {
        slide_Index = slides.length - 1;
    }

    slides.forEach(slide => {slide.classList.remove("display_Slide");});

    slides[slide_Index].classList.add("display_Slide");
}

function prev_Slide()
{
    clearInterval(interval_ID);

    slide_Index--;

    show_Slide(slide_Index);
}

function next_Slide()
{
    slide_Index++;

    show_Slide(slide_Index);
}