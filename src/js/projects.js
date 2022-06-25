// Costume Cursor
let mouseCursor = document.querySelector(".cursor")
let elements = document.querySelectorAll('.elements')

window.addEventListener('mousemove', cursor);
function cursor(e) {
    mouseCursor.style.top = e.pageY + 'px';
    mouseCursor.style.left = e.pageX + 'px';

    mouseCursor.classList.remove('cursor-click')
}

elements.forEach(link => {
    link.addEventListener('mouseover', () => {
        mouseCursor.classList.add('cursor-hover')
    })
    link.addEventListener('mouseleave', () => {
        mouseCursor.classList.remove('cursor-hover')
    })

});
window.addEventListener('click', mouseClick)

function mouseClick() {
    mouseCursor.classList.add('cursor-click')
}

// navbar show
let navCollapse = document.querySelector('.nav__collapse')
let navMenu = document.getElementById('nav-menu')
let navItems = document.querySelectorAll('.nav__item')
let sections = document.querySelectorAll('section')

navCollapse.addEventListener('click', () => {
    if (mouseClick) {
        navMenu.classList.toggle('show-nav')
    }
    else {
        navMenu.classList.remove('show-nav')
    }
})
navItems.forEach(element => {
    element.addEventListener('click', () => {
        navMenu.classList.remove('show-nav')
        document.getElementById('menu-toggle').checked = false;

    })
});
sections.forEach(elements => {
    elements.addEventListener('click', () => {
        navMenu.classList.remove('show-nav')
        document.getElementById('menu-toggle').checked = false;
    })
})
document.addEventListener('scroll', (event) => {
    if (scroll) {
        navMenu.classList.remove('show-nav')
        document.getElementById('menu-toggle').checked = false;
    }
});


// Project Fullscreen
const images = document.querySelectorAll('.img')
const fullPage = document.querySelector('.fullpage');
const projectBtn = document.querySelector('.project-btn')


images.forEach(img => {
    img.addEventListener('click', () => {
        fullPage.style.backgroundImage = 'url(' + img.src + ')';
        fullPage.style.display = 'block';
        fullPage.classList.remove("fullscreen")

        if (mouseClick) {
            document.body.style.overflow = "hidden";

        }
        fullPage.addEventListener('click', () => {
            document.body.style.overflow = "";
            fullPage.classList.add("fullscreen")
        })
    })
});

// Theme changer & Save Theme

let themes = document.querySelector('.theme-container')
let checkbox = document.querySelector('#theme-checkbox')
var r = document.querySelector(':root')
const homeSvg = document.querySelector('.home__svg')
let homeLogo = document.querySelector('.home__logo')
let footerLogo = document.getElementById("footer-img")
let mobileImg = document.getElementById("mobile-img")

themes.addEventListener('click', () => {
    if (mouseClick) {
        document.querySelector(".sun-logo").classList.toggle("animate-sun");
        document.querySelector(".moon-logo").classList.toggle("animate-moon");
        document.querySelector('body').classList.toggle('light')
        themes.classList.toggle("true")
    }
    if (themes.classList.contains('true')) {
        r.style.setProperty('--body-color', '#fff')
        r.style.setProperty('--primary-color', '#000')
        r.style.setProperty('--desc-color', '#5a5a5a')
        r.style.setProperty('--hover-color', '#8b8b8b')
        r.style.setProperty('--bnt-color', '#000')
        footerLogo.src = '../src/img/logo types/logo Black.png'
        mobileImg.src = '../src/img/logo types/nav mobile/logo black no name.png'
        localStorage.setItem('theme', 'light')
    }
    else {
        r.style.setProperty('--body-color', '#0e0f0f')
        r.style.setProperty('--primary-color', '#ffffff')
        r.style.setProperty('--desc-color', '#cccccc')
        r.style.setProperty('--hover-color', '#515151')
        r.style.setProperty('--bnt-color', '#fff')
        footerLogo.src = '../src/img/logo types/logo White.png'
        mobileImg.src = '../src/img/logo types/nav mobile/logo white no name.png'
        localStorage.setItem('theme', 'dark')
    }
})
var setTheme = localStorage.getItem('theme')
let moon = document.querySelector('.moon')
let sun = document.querySelector('.sun')



if (setTheme == 'light') {
    r.style.setProperty('--body-color', '#fff')
    r.style.setProperty('--primary-color', '#000')
    r.style.setProperty('--desc-color', '#5a5a5a')
    r.style.setProperty('--hover-color', '#8b8b8b')
    r.style.setProperty('--bnt-color', '#000')
    footerLogo.src = '../src/img/logo types/logo Black.png'
    mobileImg.src = '../src/img/logo types/nav mobile/logo black no name.png'
    sun.classList.add("animate-sun")
    moon.classList.add("animate-moon")
    themes.classList.add("true")
}
else if (setTheme == 'dark') {
    r.style.setProperty('--body-color', '#0e0f0f')
    r.style.setProperty('--primary-color', '#ffffff')
    r.style.setProperty('--desc-color', '#cccccc')
    r.style.setProperty('--hover-color', '#515151')
    r.style.setProperty('--bnt-color', '#fff')
    footerLogo.src = '../src/img/logo types/logo White.png'
    mobileImg.src = '../src/img/logo types/nav mobile/logo white no name.png'
    sun.classList.remove("animate-sun")
    moon.classList.remove("animate-moon")
    themes.classList.remove("true")
}
