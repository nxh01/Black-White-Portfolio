var slides = document.querySelectorAll('.slide');
var btns = document.querySelectorAll('.bullets');
let currentSlide = 1;
var buttons = document.querySelectorAll('.carousel__button')

// Javascript for image slider manual navigation
var manualNav = function (manual) {
    slides.forEach((slide) => {
        slide.classList.remove('active');

        btns.forEach((btn) => {
            btn.classList.remove('active');
        });
        buttons.forEach((button) => {
            button.classList.remove('flipped');
        });
    });

    slides[manual].classList.add('active');
    btns[manual].classList.add('active');
    buttons[manual].classList.add('flipped')
}

btns.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        manualNav(i);
        currentSlide = i;
        buttons.classList.add('flipped')
    });
});

// Javascript for image slider manual 2 navigation
var manualNav2 = function (manual2) {
    slides.forEach((slide) => {
        slide.classList.remove('active');

        btns.forEach((btn) => {
            btn.classList.remove('active');
        });
        buttons.forEach((button) => {
            button.classList.remove('flipped');
        });
    });

    slides[manual2].classList.add('active');
    btns[manual2].classList.add('active')
    buttons[manual2].classList.add('flipped')
}

buttons.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        manualNav2(i);
        currentSlide = i;
        btn.classList.add('flipped')
    });
});

// Javascript for image slider autoplay navigation
var repeat = function (activeClass) {
    let active = document.getElementsByClassName('active');
    let flipped = document.getElementsByClassName('flipped')
    let i = 1;

    var repeater = () => {
        setTimeout(function () {
            [...active].forEach((activeSlide) => {
                activeSlide.classList.remove('active');
            });
            [...flipped].forEach((flippedActive) => {
                flippedActive.classList.remove('flipped');
            });
            slides[i].classList.add('active');
            btns[i].classList.add('active');
            buttons[i].classList.add('flipped')

            i++;

            if (slides.length == i) {
                i = 0;
            }
            if (i >= slides.length) {
                return;
            }
            repeater();
        }, 10000);
    }
    repeater();
}
repeat();

