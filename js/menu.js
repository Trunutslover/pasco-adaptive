"use strict";

(function menu() {
        var buttonMenu = document.querySelector(".main-menu__button");
        var mainMenu = document.querySelector(".main-menu__menu");

        buttonMenu.classList.remove("visually-hidden");
        mainMenu.classList.add("menu--closed");

        buttonMenu.addEventListener("click", function (evt) {
            evt.preventDefault();

            mainMenu.classList.toggle("menu--closed");
            buttonMenu.classList.toggle("button-burger--close");
        })
    })();