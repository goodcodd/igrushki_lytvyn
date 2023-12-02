document.addEventListener("DOMContentLoaded", function() {
    let slideIndex = 0;
    const slidesPerView = 3;
    const cards = document.querySelectorAll(".good");

    function plusSlides(n) {
        slideIndex += n;
        if (slideIndex < 0) {
            slideIndex = cards.length - slidesPerView;
        } else if (slideIndex > cards.length - slidesPerView) {
            slideIndex = 0;
        }
        showSlides();
    }

    function showSlides() {
        for (let i = 0; i < cards.length; i++) {
            cards[i].style.display = "none";
        }

        for (let i = slideIndex; i < slideIndex + slidesPerView; i++) {
            if (cards[i]) {
                cards[i].style.display = "block";
            }
        }
    }

    let prevButton = document.querySelector(".prev2");
    let nextButton = document.querySelector(".next2");

    prevButton.addEventListener("click", function() {
        plusSlides(-1);
        updateCardSize();
    });

    nextButton.addEventListener("click", function() {
        plusSlides(1);
        updateCardSize();
    });

    function updateCardSize() {
        for (let i = 0; i < cards.length; i++) {
            if (i === Math.floor(slideIndex + (slidesPerView / 2))) {
                cards[i].style.transform = "scale(1.05)";
                cards[i].style.border = "2px solid rgba(134, 167, 168, 0.5)";
            } else {
                cards[i].style.transform = "scale(1)";
                cards[i].style.border = "none";
            }
        }
    }

    updateCardSize();

    cards.forEach(card => {
        card.style.transition = "transform 0.3s";
    });

    showSlides();
});