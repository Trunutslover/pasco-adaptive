"use strict";

(function mainContent() {
    var cardsMock = [
        {
            image: "img/card__image-1.jpg",
            type: "Inspiration",
            commentsNumber: 7,
            likesNumber: 15,
            title: "Lorem ipsum dolor scit ame scing lorem aelit",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur corporis dolor laborum provident recusandae rerum soluta?",
            avatar: "img/card__avatar-1.jpg",
            authorName: "James Leman",
            day: 28,
            month: 4,
            year: 2016
        },
        {
            image: "img/card__image-2.jpg",
            type: "Inspiration",
            commentsNumber: 15,
            likesNumber: 154,
            title: "Lorem ipsum dolor scit ame scing lorem aelit",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur corporis dolor laborum provident recusandae rerum soluta?",
            avatar: "img/card__avatar-1.jpg",
            authorName: "James Leman",
            day: 28,
            month: 4,
            year: 2016
        },
        {
            image: "img/card__image-3.jpg",
            type: "Inspiration",
            commentsNumber: 15,
            likesNumber: 154,
            title: "Lorem ipsum dolor scit ame scing lorem aelit",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur corporis dolor laborum provident recusandae rerum soluta?",
            avatar: "img/card__avatar-1.jpg",
            authorName: "James Leman",
            day: 28,
            month: 4,
            year: 2016
        },
        {
            image: "img/card__image-4.jpg",
            type: "Inspiration",
            commentsNumber: 15,
            likesNumber: 154,
            title: "Lorem ipsum dolor scit ame scing lorem aelit",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur corporis dolor laborum provident recusandae rerum soluta?",
            avatar: "img/card__avatar-1.jpg",
            authorName: "James Leman",
            day: 28,
            month: 4,
            year: 2016
        },
        {
            image: "img/card__image-5.jpg",
            type: "Inspiration",
            commentsNumber: 15,
            likesNumber: 154,
            title: "Lorem ipsum dolor scit ame scing lorem aelit",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur corporis dolor laborum provident recusandae rerum soluta?",
            avatar: "img/card__avatar-1.jpg",
            authorName: "James Leman",
            day: 28,
            month: 4,
            year: 2016
        },
        {
            image: "img/card__image-6.jpg",
            type: "Inspiration",
            commentsNumber: 15,
            likesNumber: 154,
            title: "Lorem ipsum dolor scit ame scing lorem aelit",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur corporis dolor laborum provident recusandae rerum soluta?",
            avatar: "img/card__avatar-1.jpg",
            authorName: "James Leman",
            day: 28,
            month: 4,
            year: 2016
        },
        {
            image: "img/card__image-7.jpg",
            type: "Inspiration",
            commentsNumber: 15,
            likesNumber: 154,
            title: "Lorem ipsum dolor scit ame scing lorem aelit",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur corporis dolor laborum provident recusandae rerum soluta?",
            avatar: "img/card__avatar-1.jpg",
            authorName: "James Leman",
            day: 28,
            month: 4,
            year: 2016
        },
        {
            image: "img/card__image-8.jpg",
            type: "Inspiration",
            commentsNumber: 15,
            likesNumber: 154,
            title: "Lorem ipsum dolor scit ame scing lorem aelit",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur corporis dolor laborum provident recusandae rerum soluta?",
            avatar: "img/card__avatar-1.jpg",
            authorName: "James Leman",
            day: 28,
            month: 4,
            year: 2016
        },
        {
            image: "img/card__image-9.jpg",
            type: "Inspiration",
            commentsNumber: 15,
            likesNumber: 154,
            title: "Lorem ipsum dolor scit ame scing lorem aelit",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur corporis dolor laborum provident recusandae rerum soluta?",
            avatar: "img/card__avatar-1.jpg",
            authorName: "James Leman",
            day: 28,
            month: 4,
            year: 2016
        },
        {
            image: "img/card__image-10.jpg",
            type: "Inspiration",
            commentsNumber: 15,
            likesNumber: 154,
            title: "Lorem ipsum dolor scit ame scing lorem aelit",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur corporis dolor laborum provident recusandae rerum soluta?",
            avatar: "img/card__avatar-1.jpg",
            authorName: "James Leman",
            day: 28,
            month: 4,
            year: 2016
        },
        {
            image: "img/card__image-11.jpg",
            type: "Inspiration",
            commentsNumber: 15,
            likesNumber: 154,
            title: "Lorem ipsum dolor scit ame scing lorem aelit",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur corporis dolor laborum provident recusandae rerum soluta?",
            avatar: "img/card__avatar-1.jpg",
            authorName: "James Leman",
            day: 28,
            month: 4,
            year: 2016
        },
        {
            image: "img/card__image-12.jpg",
            type: "Inspiration",
            commentsNumber: 15,
            likesNumber: 154,
            title: "Lorem ipsum dolor scit ame scing lorem aelit",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur corporis dolor laborum provident recusandae rerum soluta?",
            avatar: "img/card__avatar-1.jpg",
            authorName: "James Leman",
            day: 28,
            month: 4,
            year: 2016
        },
        {
            image: "img/card__image-1.jpg",
            type: "Photography",
            commentsNumber: 7,
            likesNumber: 15,
            title: "Lorem ipsum dolor scit ame scing lorem aelit",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur corporis dolor laborum provident recusandae rerum soluta?",
            avatar: "img/card__avatar-1.jpg",
            authorName: "James Leman",
            day: 28,
            month: 4,
            year: 2016
        },
        {
            image: "img/card__image-2.jpg",
            type: "Photography",
            commentsNumber: 15,
            likesNumber: 154,
            title: "Lorem ipsum dolor scit ame scing lorem aelit",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur corporis dolor laborum provident recusandae rerum soluta?",
            avatar: "img/card__avatar-1.jpg",
            authorName: "James Leman",
            day: 28,
            month: 4,
            year: 2016
        },
        {
            image: "img/card__image-3.jpg",
            type: "Photography",
            commentsNumber: 15,
            likesNumber: 154,
            title: "Lorem ipsum dolor scit ame scing lorem aelit",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur corporis dolor laborum provident recusandae rerum soluta?",
            avatar: "img/card__avatar-1.jpg",
            authorName: "James Leman",
            day: 28,
            month: 4,
            year: 2016
        },
        {
            image: "img/card__image-4.jpg",
            type: "Photography",
            commentsNumber: 15,
            likesNumber: 154,
            title: "Lorem ipsum dolor scit ame scing lorem aelit",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur corporis dolor laborum provident recusandae rerum soluta?",
            avatar: "img/card__avatar-1.jpg",
            authorName: "James Leman",
            day: 28,
            month: 4,
            year: 2016
        },
        {
            image: "img/card__image-5.jpg",
            type: "Photography",
            commentsNumber: 15,
            likesNumber: 154,
            title: "Lorem ipsum dolor scit ame scing lorem aelit",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur corporis dolor laborum provident recusandae rerum soluta?",
            avatar: "img/card__avatar-1.jpg",
            authorName: "James Leman",
            day: 28,
            month: 4,
            year: 2016
        },
        {
            image: "img/card__image-6.jpg",
            type: "Photography",
            commentsNumber: 15,
            likesNumber: 154,
            title: "Lorem ipsum dolor scit ame scing lorem aelit",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur corporis dolor laborum provident recusandae rerum soluta?",
            avatar: "img/card__avatar-1.jpg",
            authorName: "James Leman",
            day: 28,
            month: 4,
            year: 2016
        },
        {
            image: "img/card__image-7.jpg",
            type: "Photography",
            commentsNumber: 15,
            likesNumber: 154,
            title: "Lorem ipsum dolor scit ame scing lorem aelit",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur corporis dolor laborum provident recusandae rerum soluta?",
            avatar: "img/card__avatar-1.jpg",
            authorName: "James Leman",
            day: 28,
            month: 4,
            year: 2016
        },
        {
            image: "img/card__image-8.jpg",
            type: "Photography",
            commentsNumber: 15,
            likesNumber: 154,
            title: "Lorem ipsum dolor scit ame scing lorem aelit",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur corporis dolor laborum provident recusandae rerum soluta?",
            avatar: "img/card__avatar-1.jpg",
            authorName: "James Leman",
            day: 28,
            month: 4,
            year: 2016
        },
        {
            image: "img/card__image-9.jpg",
            type: "Photography",
            commentsNumber: 15,
            likesNumber: 154,
            title: "Lorem ipsum dolor scit ame scing lorem aelit",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur corporis dolor laborum provident recusandae rerum soluta?",
            avatar: "img/card__avatar-1.jpg",
            authorName: "James Leman",
            day: 28,
            month: 4,
            year: 2016
        },
        {
            image: "img/card__image-10.jpg",
            type: "Photography",
            commentsNumber: 15,
            likesNumber: 154,
            title: "Lorem ipsum dolor scit ame scing lorem aelit",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur corporis dolor laborum provident recusandae rerum soluta?",
            avatar: "img/card__avatar-1.jpg",
            authorName: "James Leman",
            day: 28,
            month: 4,
            year: 2016
        },
        {
            image: "img/card__image-11.jpg",
            type: "Photography",
            commentsNumber: 15,
            likesNumber: 154,
            title: "Lorem ipsum dolor scit ame scing lorem aelit",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur corporis dolor laborum provident recusandae rerum soluta?",
            avatar: "img/card__avatar-1.jpg",
            authorName: "James Leman",
            day: 28,
            month: 4,
            year: 2016
        },
        {
            image: "img/card__image-12.jpg",
            type: "Photography",
            commentsNumber: 15,
            likesNumber: 154,
            title: "Lorem ipsum dolor scit ame scing lorem aelit",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur corporis dolor laborum provident recusandae rerum soluta?",
            avatar: "img/card__avatar-1.jpg",
            authorName: "James Leman",
            day: 28,
            month: 4,
            year: 2016
        },
        {
            image: "img/card__image-1.jpg",
            type: "Lifestyle",
            commentsNumber: 7,
            likesNumber: 15,
            title: "Lorem ipsum dolor scit ame scing lorem aelit",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur corporis dolor laborum provident recusandae rerum soluta?",
            avatar: "img/card__avatar-1.jpg",
            authorName: "James Leman",
            day: 28,
            month: 4,
            year: 2016
        },
        {
            image: "img/card__image-2.jpg",
            type: "Lifestyle",
            commentsNumber: 15,
            likesNumber: 154,
            title: "Lorem ipsum dolor scit ame scing lorem aelit",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur corporis dolor laborum provident recusandae rerum soluta?",
            avatar: "img/card__avatar-1.jpg",
            authorName: "James Leman",
            day: 28,
            month: 4,
            year: 2016
        },
        {
            image: "img/card__image-3.jpg",
            type: "Lifestyle",
            commentsNumber: 15,
            likesNumber: 154,
            title: "Lorem ipsum dolor scit ame scing lorem aelit",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur corporis dolor laborum provident recusandae rerum soluta?",
            avatar: "img/card__avatar-1.jpg",
            authorName: "James Leman",
            day: 28,
            month: 4,
            year: 2016
        },
        {
            image: "img/card__image-4.jpg",
            type: "Lifestyle",
            commentsNumber: 15,
            likesNumber: 154,
            title: "Lorem ipsum dolor scit ame scing lorem aelit",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur corporis dolor laborum provident recusandae rerum soluta?",
            avatar: "img/card__avatar-1.jpg",
            authorName: "James Leman",
            day: 28,
            month: 4,
            year: 2016
        },
        {
            image: "img/card__image-5.jpg",
            type: "Lifestyle",
            commentsNumber: 15,
            likesNumber: 154,
            title: "Lorem ipsum dolor scit ame scing lorem aelit",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur corporis dolor laborum provident recusandae rerum soluta?",
            avatar: "img/card__avatar-1.jpg",
            authorName: "James Leman",
            day: 28,
            month: 4,
            year: 2016
        },
        {
            image: "img/card__image-6.jpg",
            type: "Lifestyle",
            commentsNumber: 15,
            likesNumber: 154,
            title: "Lorem ipsum dolor scit ame scing lorem aelit",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur corporis dolor laborum provident recusandae rerum soluta?",
            avatar: "img/card__avatar-1.jpg",
            authorName: "James Leman",
            day: 28,
            month: 4,
            year: 2016
        },
        {
            image: "img/card__image-7.jpg",
            type: "Lifestyle",
            commentsNumber: 15,
            likesNumber: 154,
            title: "Lorem ipsum dolor scit ame scing lorem aelit",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur corporis dolor laborum provident recusandae rerum soluta?",
            avatar: "img/card__avatar-1.jpg",
            authorName: "James Leman",
            day: 28,
            month: 4,
            year: 2016
        },
        {
            image: "img/card__image-8.jpg",
            type: "Lifestyle",
            commentsNumber: 15,
            likesNumber: 154,
            title: "Lorem ipsum dolor scit ame scing lorem aelit",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur corporis dolor laborum provident recusandae rerum soluta?",
            avatar: "img/card__avatar-1.jpg",
            authorName: "James Leman",
            day: 28,
            month: 4,
            year: 2016
        },
        {
            image: "img/card__image-9.jpg",
            type: "Lifestyle",
            commentsNumber: 15,
            likesNumber: 154,
            title: "Lorem ipsum dolor scit ame scing lorem aelit",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur corporis dolor laborum provident recusandae rerum soluta?",
            avatar: "img/card__avatar-1.jpg",
            authorName: "James Leman",
            day: 28,
            month: 4,
            year: 2016
        },
        {
            image: "img/card__image-10.jpg",
            type: "Lifestyle",
            commentsNumber: 15,
            likesNumber: 154,
            title: "Lorem ipsum dolor scit ame scing lorem aelit",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur corporis dolor laborum provident recusandae rerum soluta?",
            avatar: "img/card__avatar-1.jpg",
            authorName: "James Leman",
            day: 28,
            month: 4,
            year: 2016
        },
        {
            image: "img/card__image-11.jpg",
            type: "Lifestyle",
            commentsNumber: 15,
            likesNumber: 154,
            title: "Lorem ipsum dolor scit ame scing lorem aelit",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur corporis dolor laborum provident recusandae rerum soluta?",
            avatar: "img/card__avatar-1.jpg",
            authorName: "James Leman",
            day: 28,
            month: 4,
            year: 2016
        },
        {
            image: "img/card__image-12.jpg",
            type: "Lifestyle",
            commentsNumber: 15,
            likesNumber: 154,
            title: "Lorem ipsum dolor scit ame scing lorem aelit",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur corporis dolor laborum provident recusandae rerum soluta?",
            avatar: "img/card__avatar-1.jpg",
            authorName: "James Leman",
            day: 28,
            month: 4,
            year: 2016
        },
        {
            image: "img/card__image-1.jpg",
            type: "Trip",
            commentsNumber: 7,
            likesNumber: 15,
            title: "Lorem ipsum dolor scit ame scing lorem aelit",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur corporis dolor laborum provident recusandae rerum soluta?",
            avatar: "img/card__avatar-1.jpg",
            authorName: "James Leman",
            day: 28,
            month: 4,
            year: 2016
        },
        {
            image: "img/card__image-2.jpg",
            type: "Trip",
            commentsNumber: 15,
            likesNumber: 154,
            title: "Lorem ipsum dolor scit ame scing lorem aelit",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur corporis dolor laborum provident recusandae rerum soluta?",
            avatar: "img/card__avatar-1.jpg",
            authorName: "James Leman",
            day: 28,
            month: 4,
            year: 2016
        },
        {
            image: "img/card__image-3.jpg",
            type: "Trip",
            commentsNumber: 15,
            likesNumber: 154,
            title: "Lorem ipsum dolor scit ame scing lorem aelit",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur corporis dolor laborum provident recusandae rerum soluta?",
            avatar: "img/card__avatar-1.jpg",
            authorName: "James Leman",
            day: 28,
            month: 4,
            year: 2016
        },
        {
            image: "img/card__image-4.jpg",
            type: "Trip",
            commentsNumber: 15,
            likesNumber: 154,
            title: "Lorem ipsum dolor scit ame scing lorem aelit",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur corporis dolor laborum provident recusandae rerum soluta?",
            avatar: "img/card__avatar-1.jpg",
            authorName: "James Leman",
            day: 28,
            month: 4,
            year: 2016
        },
        {
            image: "img/card__image-5.jpg",
            type: "Trip",
            commentsNumber: 15,
            likesNumber: 154,
            title: "Lorem ipsum dolor scit ame scing lorem aelit",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur corporis dolor laborum provident recusandae rerum soluta?",
            avatar: "img/card__avatar-1.jpg",
            authorName: "James Leman",
            day: 28,
            month: 4,
            year: 2016
        },
        {
            image: "img/card__image-6.jpg",
            type: "Trip",
            commentsNumber: 15,
            likesNumber: 154,
            title: "Lorem ipsum dolor scit ame scing lorem aelit",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur corporis dolor laborum provident recusandae rerum soluta?",
            avatar: "img/card__avatar-1.jpg",
            authorName: "James Leman",
            day: 28,
            month: 4,
            year: 2016
        },
        {
            image: "img/card__image-7.jpg",
            type: "Trip",
            commentsNumber: 15,
            likesNumber: 154,
            title: "Lorem ipsum dolor scit ame scing lorem aelit",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur corporis dolor laborum provident recusandae rerum soluta?",
            avatar: "img/card__avatar-1.jpg",
            authorName: "James Leman",
            day: 28,
            month: 4,
            year: 2016
        },
        {
            image: "img/card__image-8.jpg",
            type: "Trip",
            commentsNumber: 15,
            likesNumber: 154,
            title: "Lorem ipsum dolor scit ame scing lorem aelit",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur corporis dolor laborum provident recusandae rerum soluta?",
            avatar: "img/card__avatar-1.jpg",
            authorName: "James Leman",
            day: 28,
            month: 4,
            year: 2016
        },
        {
            image: "img/card__image-9.jpg",
            type: "Trip",
            commentsNumber: 15,
            likesNumber: 154,
            title: "Lorem ipsum dolor scit ame scing lorem aelit",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur corporis dolor laborum provident recusandae rerum soluta?",
            avatar: "img/card__avatar-1.jpg",
            authorName: "James Leman",
            day: 28,
            month: 4,
            year: 2016
        },
        {
            image: "img/card__image-10.jpg",
            type: "Trip",
            commentsNumber: 15,
            likesNumber: 154,
            title: "Lorem ipsum dolor scit ame scing lorem aelit",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur corporis dolor laborum provident recusandae rerum soluta?",
            avatar: "img/card__avatar-1.jpg",
            authorName: "James Leman",
            day: 28,
            month: 4,
            year: 2016
        },
        {
            image: "img/card__image-11.jpg",
            type: "Trip",
            commentsNumber: 15,
            likesNumber: 154,
            title: "Lorem ipsum dolor scit ame scing lorem aelit",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur corporis dolor laborum provident recusandae rerum soluta?",
            avatar: "img/card__avatar-1.jpg",
            authorName: "James Leman",
            day: 28,
            month: 4,
            year: 2016
        },
        {
            image: "img/card__image-12.jpg",
            type: "Trip",
            commentsNumber: 15,
            likesNumber: 154,
            title: "Lorem ipsum dolor scit ame scing lorem aelit",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab consequatur corporis dolor laborum provident recusandae rerum soluta?",
            avatar: "img/card__avatar-1.jpg",
            authorName: "James Leman",
            day: 28,
            month: 4,
            year: 2016
        }
    ];
    var sortRadioAll = document.querySelector("#All");
    var sortRadioPhotography = document.querySelector("#Photography");
    var sortRadioLifestyle = document.querySelector("#Lifestyle");
    var sortRadioTrip = document.querySelector("#Trip");
    var sortRadioInspiration = document.querySelector("#Inspiration");
    var mainContent = document.querySelector(".page__main");

    function sortCards(cardsArray, sortOption) {
        var cardsSorted = [];
        let i = 0;
        let j = 0;
        var isCardsArrayNotOver = true;

        while (isCardsArrayNotOver) {

            for (j; j < cardsArray.length; j++) {
                if (cardsArray[j].type === sortOption) {
                    cardsSorted[i] = cardsArray[j];
                    j++;
                    break;
                }
            }
            if (j == cardsArray.length) {
                isCardsArrayNotOver = false;
            }
            i++;
        }

        return cardsSorted;
    };

    function createCard(cardObject) {
        var card = document.createElement("div");
        card.classList.add("main__card");
        card.classList.add("card");

        var cardTop = document.createElement("div");
        cardTop.classList.add("card__top");

        var cardBottom = document.createElement("div");
        cardBottom.classList.add("card__bottom");

        card.appendChild(cardTop);
        card.appendChild(cardBottom);

        var cardImage = document.createElement("img");
        cardImage.classList.add("card__image");
        cardImage.setAttribute("src", cardObject.image);
        cardImage.setAttribute("width", "280");
        cardImage.setAttribute("height", "180");
        cardImage.setAttribute("alt", cardObject.title);

        var cardCaption = document.createElement("div");
        cardCaption.classList.add("card__caption");

        cardTop.appendChild(cardImage);
        cardTop.appendChild(cardCaption);

        var cardInspiration = document.createElement("p");
        cardInspiration.classList.add("card__type");
        cardInspiration.textContent = cardObject.type;

        var cardCommentsLikes = document.createElement("p");
        cardCommentsLikes.classList.add("card__comments-likes");

        cardCaption.appendChild(cardInspiration);
        cardCaption.appendChild(cardCommentsLikes);

        var cardCommentsIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        cardCommentsIcon.classList.add("card__comments-icon");
        cardCommentsIcon.setAttribute("width", "16");
        cardCommentsIcon.setAttribute("height", "16");
        cardCommentsIcon.setAttribute("fill", "#ffffff");

        var cardCommentsNumber = document.createElement("span");
        cardCommentsNumber.classList.add("card__comments-number");
        cardCommentsNumber.textContent = cardObject.commentsNumber;

        var cardLikesIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        cardLikesIcon.classList.add("card__likes-icon");
        cardLikesIcon.setAttribute("width", "16");
        cardLikesIcon.setAttribute("height", "16");
        cardLikesIcon.setAttribute("fill", "#ffffff");

        var cardLikesNumber = document.createElement("span");
        cardLikesNumber.classList.add("card__likes-number");
        cardLikesNumber.textContent = cardObject.likesNumber;

        cardCommentsLikes.appendChild(cardCommentsIcon);
        cardCommentsLikes.appendChild(cardCommentsNumber);
        cardCommentsLikes.appendChild(cardLikesIcon);
        cardCommentsLikes.appendChild(cardLikesNumber);

        var cardCommentsIconPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
        cardCommentsIconPath.setAttribute("d", "M11.344 8c0 0.375-0.313 0.656-0.688 0.656h-6.656l-2.656 2.688v-9.344c0-0.375 0.281-0.656 0.656-0.656h8.656c0.375 0 0.688 0.281 0.688 0.656v6zM14 4c0.375 0 0.656 0.281 0.656 0.656v10l-2.656-2.656h-7.344c-0.375 0-0.656-0.281-0.656-0.656v-1.344h8.656v-6h1.344z");

        cardCommentsIcon.appendChild(cardCommentsIconPath);

        var cardLikesIconPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
        cardLikesIconPath.setAttribute("d", "M8.063 12.375c3.188-2.875 5.281-4.781 5.281-6.719 0-1.344-1-2.313-2.344-2.313-1.031 0-2.031 0.656-2.375 1.563h-1.25c-0.344-0.906-1.344-1.563-2.375-1.563-1.344 0-2.344 0.969-2.344 2.313 0 1.938 2.094 3.844 5.281 6.719l0.063 0.063zM11 2c2.063 0 3.656 1.594 3.656 3.656 0 2.531-2.25 4.563-5.688 7.688l-0.969 0.875-0.969-0.844c-3.438-3.125-5.688-5.188-5.688-7.719 0-2.063 1.594-3.656 3.656-3.656 1.156 0 2.281 0.563 3 1.406 0.719-0.844 1.844-1.406 3-1.406z");

        cardLikesIcon.appendChild(cardLikesIconPath);

        var cardContent = document.createElement("div");
        cardContent.classList.add("card__content");

        var cardAuthor = document.createElement("div");
        cardAuthor.classList.add("card__author");

        cardBottom.appendChild(cardContent);
        cardBottom.appendChild(cardAuthor);

        var cardTitle =document.createElement("h3");
        cardTitle.classList.add("card__title");
        cardTitle.textContent = cardObject.title;

        var cardDescription = document.createElement("p");
        cardDescription.classList.add("card__description");
        cardDescription.textContent = cardObject.description;

        cardContent.appendChild(cardTitle);
        cardContent.appendChild(cardDescription);

        var cardAvatar = document.createElement("img");
        cardAvatar.classList.add("card__avatar");
        cardAvatar.setAttribute("src", cardObject.avatar);
        cardAvatar.setAttribute("width", "50");
        cardAvatar.setAttribute("height", "50");
        cardAvatar.setAttribute("alt", cardObject.authorName);

        var cardAuthorWrapper = document.createElement("div");
        cardAuthorWrapper.classList.add("card__author-wrapper");

        var cardButtonMore = document.createElement("button");
        cardButtonMore.classList.add("card__button-more");

        cardAuthor.appendChild(cardAvatar);
        cardAuthor.appendChild(cardAuthorWrapper);
        cardAuthor.appendChild(cardButtonMore);

        var cardAuthorName = document.createElement("h4")
        cardAuthorName.classList.add("card__author-name");
        cardAuthorName.textContent = cardObject.authorName;

        var cardDate = document.createElement("p");
        cardDate.classList.add("card__date");
        var month = "January";
        switch (cardObject.month) {
            case 2 : month = "February";
            break;
            case 3 : month = "March";
            break;
            case 4 : month = "April";
            break;
            case 5 : month = "May";
            break;
            case 6 : month = "June";
            break;
            case 7 : month = "July";
            break;
            case 8 : month = "August";
            break;
            case 9 : month = "September";
            break;
            case 10 : month = "October";
            break;
            case 11 : month = "November";
            break;
            case 12 : month = "December";
            break;
        }
        cardDate.textContent = month + " " +cardObject.day;

        cardAuthorWrapper.appendChild(cardAuthorName);
        cardAuthorWrapper.appendChild(cardDate);

        var cardDateYear = document.createElement("span");
        cardDateYear.classList.add("card__date-year");
        cardDateYear.textContent = ", " + cardObject.year;

        cardDate.appendChild(cardDateYear);

        var cardButtonIcon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        cardButtonIcon.classList.add("card__button-icon");
        cardButtonIcon.setAttribute("width", "20");
        cardButtonIcon.setAttribute("height", "20");
        cardButtonIcon.setAttribute("fill", "#000000");
        cardButtonIcon.setAttribute("viewBox", "0 0 16 16");

        cardButtonMore.appendChild(cardButtonIcon);

        var cardButtonIconPath = document.createElementNS("http://www.w3.org/2000/svg", "path");
        cardButtonIconPath.setAttribute("d", "M8 10.656c0.719 0 1.344 0.625 1.344 1.344s-0.625 1.344-1.344 1.344-1.344-0.625-1.344-1.344 0.625-1.344 1.344-1.344zM8 6.656c0.719 0 1.344 0.625 1.344 1.344s-0.625 1.344-1.344 1.344-1.344-0.625-1.344-1.344 0.625-1.344 1.344-1.344zM8 5.344c-0.719 0-1.344-0.625-1.344-1.344s0.625-1.344 1.344-1.344 1.344 0.625 1.344 1.344-0.625 1.344-1.344 1.344z")

        cardButtonIcon.appendChild(cardButtonIconPath);

        return card;
    };

    function renderCards(cardsArray) {
        var currentCard;

        if (document.documentElement.clientWidth < 1170) {
            for (var i = 0; i <= 11; i++) {
                switch (i) {
                    case 0: mainContent.appendChild(createCard(cardsArray[i]));
                        break;
                    case 1: currentCard = mainContent.appendChild(createCard(cardsArray[i]));
                        currentCard.classList.add("card--small-wide");
                        break;
                    case 2: var mainColsWrapper = document.createElement("div");
                        mainColsWrapper.classList.add("main__cols-wrapper");
                        mainContent.appendChild(mainColsWrapper);

                        var mainFirstCol = document.createElement("div");
                        mainFirstCol.classList.add("main__first-col");

                        var mainSecondCol = document.createElement("div");
                        mainSecondCol.classList.add("main__second-col");

                        mainColsWrapper.appendChild(mainFirstCol);
                        mainColsWrapper.appendChild(mainSecondCol);
                        currentCard = mainFirstCol.appendChild(createCard(cardsArray[i]));
                        currentCard.classList.add("card--small-tall");
                        break;
                    case 3: currentCard = mainFirstCol.appendChild(createCard(cardsArray[i]));
                        currentCard.classList.add("card--small");
                        break;
                    case 4: currentCard = mainSecondCol.appendChild(createCard(cardsArray[i]));
                        currentCard.classList.add("card--small");
                        break;
                    case 5: currentCard = mainSecondCol.appendChild(createCard(cardsArray[i]));
                        currentCard.classList.add("card--small-tall");
                        break;
                    case 6: currentCard = mainContent.appendChild(createCard(cardsArray[i]));
                        currentCard.classList.add("card--top-only");
                        break;
                    case 7: currentCard = mainContent.appendChild(createCard(cardsArray[i]));
                        currentCard.classList.add("card--small-wide");
                        break;
                    case 8: currentCard = mainContent.appendChild(createCard(cardsArray[i]));
                        currentCard.classList.add("card--small-wide");
                        break;
                    case 9: currentCard = mainContent.appendChild(createCard(cardsArray[i]));
                        break;
                    case 10: currentCard = mainContent.appendChild(createCard(cardsArray[i]));
                        currentCard.classList.add("card--top-only");
                        break;
                    case 11: currentCard = mainContent.appendChild(createCard(cardsArray[i]));
                        break;
                }
            }
        } else {
            for (var i = 0; i <= 8; i++) {
                switch (i) {
                    case 0: currentCard = mainContent.appendChild(createCard(cardsArray[i]));
                        currentCard.classList.add("card--first");
                        break;
                    case 1: currentCard = mainContent.appendChild(createCard(cardsArray[i]));
                        currentCard.classList.add("card--medium-wide");
                        break;
                    case 2: currentCard = mainContent.appendChild(createCard(cardsArray[i]));
                        currentCard.classList.add("card--medium-wide");
                        break;
                    case 3: currentCard = mainContent.appendChild(createCard(cardsArray[i]));
                        currentCard.classList.add("card--medium-wide");
                        break;
                    case 4: currentCard = mainContent.appendChild(createCard(cardsArray[i]));
                        currentCard.classList.add("card--medium-tall");
                        break;
                    case 5: currentCard = mainContent.appendChild(createCard(cardsArray[i]));
                        currentCard.classList.add("card--medium-tall");
                        break;
                    case 6: currentCard = mainContent.appendChild(createCard(cardsArray[i]));
                        currentCard.classList.add("card--medium-tall");
                        break;
                    case 7: currentCard = mainContent.appendChild(createCard(cardsArray[i]));
                        currentCard.classList.add("card--big");
                        break;
                    case 8: currentCard = mainContent.appendChild(createCard(cardsArray[i]));
                        currentCard.classList.add("card--big");
                        break;
                }
            }
        }
    };



    renderCards(cardsMock);


    sortRadioAll.addEventListener("input", function () {
        while (mainContent.firstChild) {
            mainContent.removeChild(mainContent.firstChild);
        }
        renderCards(cardsMock);
    });
    sortRadioPhotography.addEventListener("input", function () {
        while (mainContent.firstChild) {
            mainContent.removeChild(mainContent.firstChild);
        }
        renderCards(sortCards(cardsMock, sortRadioPhotography.value));
    });
    sortRadioLifestyle.addEventListener("input", function () {
        while (mainContent.firstChild) {
            mainContent.removeChild(mainContent.firstChild);
        }
        renderCards(sortCards(cardsMock, sortRadioLifestyle.value));
    });
    sortRadioTrip.addEventListener("input", function () {
        while (mainContent.firstChild) {
            mainContent.removeChild(mainContent.firstChild);
        }
        renderCards(sortCards(cardsMock, sortRadioTrip.value));
    });
    sortRadioInspiration.addEventListener("input", function () {
        while (mainContent.firstChild) {
            mainContent.removeChild(mainContent.firstChild);
        }
        renderCards(sortCards(cardsMock, sortRadioInspiration.value));
    });


})();