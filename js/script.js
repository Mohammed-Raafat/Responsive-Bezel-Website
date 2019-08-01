
$(document).ready(function () { // .ready() After loading page 
    'use strict';

    // Filteration
    const worksSection = document.getElementById('works-section');
    for (let i = 0; i < worksSection.querySelectorAll('.nav-item-link').length; i++) {
        worksSection.querySelectorAll('.nav-item-link')[i].addEventListener('click', filterHandleClick);
    }

    function filterHandleClick() {
        const btnClicked = this;
        const allBtns = worksSection.querySelectorAll('.nav-item-link');
        if (!btnClicked.classList.contains('active')) {
            // Give btnClicked class 'active'
            for (let i = 0; i < allBtns.length; i++) {
                if (allBtns[i].classList.contains('active')) {
                    allBtns[i].classList.remove('active');
                    break;
                }
            }

            btnClicked.classList.add('active');

            ////////////////////////////////////////

            // Filteration Process
            const btnClickedId = btnClicked.getAttribute('id');
            const allPortofolios = worksSection.querySelectorAll('.portfolio');
            for (let i = 0; i < allPortofolios.length; i++) {
                if (btnClickedId === 'all') {
                    allPortofolios[i].style.display = 'initial';
                }
                else if (allPortofolios[i].classList.contains(btnClickedId)) {
                    allPortofolios[i].style.display = 'initial';
                }
                else {
                    allPortofolios[i].style.display = 'none';
                }
            }
        }
    }
    
    //////////////////////////////////////
    // Word Changable ('websites', 'softwares','apps')
    const span = document.getElementById('changable-word');
    const words = ['websites', 'softwares','apps'];
    let counter = 0;
    let currentWordLength = 0;
    setInterval(() => {
        let currentWord = words[counter % words.length];
        counter++;
        span.textContent = currentWord;
        currentWordLength = currentWord.length;
        document.body.style.setProperty('--span-width', Number((currentWordLength * 10) + 15)+'px');
    }, 2500);
    
    //////////////////////////////////////
    // Change navbar color while scrolling
    $(window).scroll(function () { // .scroll() While scrolling
        'use strict';
        if ($(window).scrollTop() > 50) // Before reaching the top
        {
            // Light Navbar
            $("#navbar-section").css({
                "background": "#fff"
            });

            $("#navbar-section li > a").css({
                "color": "#000"
            });

            $("#navbar-section .navbar-toggler").css({
                "background-color": "#fff"
            });

            $(".navbar-brand > img").attr("src", "images/logo-dark.png");

            $("#navbar-section").css({
                "border-color": "#ddd"
            });

            $("#navbar-section .right").css({
                "border-color": "#ddd"
            });
        } else {
            // Dark Navbar
            $("#navbar-section").css({
                "background": "transparent"
            });

            $("#navbar-section li > a").css({
                "color": "#fff"
            });

            $("#navbar-section .navbar-toggler").css({
                "background-color": "#ddd"
            });

            $(".navbar-brand > img").attr("src", "images/logo-light.png");

            $("#navbar-section").css({
                "border-color": "rgba(255, 255, 255, 0.2)"
            });

            $("#navbar-section .right").css({
                "border-color": "rgba(255, 255, 255, 0.2)"
            });
        }
    });

    //////////////////////////////////////
    // Initalization of Wow from Animate
    new WOW().init();
});