document.addEventListener("DOMContentLoaded", function() {
    let slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }


    function showSlides(n) {
        let i;
        const slides = document.getElementsByClassName("slider-first");
        const dots = document.getElementsByClassName("dot");
        if (n > slides.length) { slideIndex = 1; }
        if (n < 1) { slideIndex = slides.length; }
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].className += " active";
    }

    const prevButton = document.querySelector(".prev");
    const nextButton = document.querySelector(".next");

    prevButton.addEventListener("click", function() {
        plusSlides(-1);
    });

    nextButton.addEventListener("click", function() {
        plusSlides(1);
    });
});

function myFunction() {
    const x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function toggleMenu() {
    const menu = document.getElementById("menu-list");
    const burger = document.querySelector(".burger-menu");

    if (menu.style.display === "block") {
        menu.style.display = "none";
        burger.classList.remove("change");
    } else {
        menu.style.display = "block";
        burger.classList.add("change");
    }
}
