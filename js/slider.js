"use strict";

(function slider() {
    var slider = document.querySelector(".title__slides");
    var slides = document.querySelectorAll(".title__slide");
    var numberOfSlides = slides.length - 1;
    var currentSlide = 0;
    var buttonPrev = document.querySelector(".title__button--prev");
    var buttonNext = document.querySelector(".title__button--next");

    function moveSlider() {
        slider.style.transform = "translateX(-" + currentSlide * 100 +"%)";
    };

    buttonNext.addEventListener("click", function (evt) {
        evt.preventDefault();

        currentSlide += 1;
        if (currentSlide > numberOfSlides) {
            currentSlide = 0;
        }

        moveSlider();
    });

    buttonPrev.addEventListener("click", function (evt) {
        evt.preventDefault();

        currentSlide -= 1;
        if (currentSlide < 0) {
            currentSlide = numberOfSlides;
        }

        moveSlider();
    })
})();