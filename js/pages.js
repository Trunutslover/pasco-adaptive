"use strict";

(function pages() {
    var pages = document.querySelector(".pages");

    pages.addEventListener("click", function (event) {
        var target = event.target;

        if (target.className === "pages__items-title") {
            target.parentNode.classList.toggle("pages__items--closed");
        }
    })
})();