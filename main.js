const menu = document.querySelector('.header_burger_menu')
const mobileMenu = document.querySelector('.mobile_menu_layout')
const mobileMenuList = document.querySelector('.mobile_navigation_list')
const left = document.querySelector('.left_arrow')
const right = document.querySelector('.right_arrow')
const slides = document.querySelectorAll('.slider_item')
let canvas = document.querySelector('.favourites_coffee_slider')
let current = 0
let axisXStart = 0
let animateFlag = true
let filter = 'coffee'


function changeindex(index) {
    current = (index + slides.length) % slides.length
}

function hide(className) {
    animateFlag = false;
    slides[current].classList.add(className)
    slides[current].addEventListener('animationend', function() {
        this.classList.remove('active_slide', className)
    })    
}

function activate(className) {
    slides[current].classList.add('next', className)    
    slides[current].addEventListener('animationend', function() {
        this.classList.remove('next', className)
        this.classList.add('active_slide')
        animateFlag = true
    })    
}

function nextSlide (index) {
    hide('left')
    changeindex(index + 1)
    activate('from-right')
    document.querySelector('.slider_item.active_slide').classList.add('left')
}

function prevSlide (index) {
    hide('right')
    changeindex(index - 1)
    activate('from-left')
    document.querySelector('.slider_item.active_slide').classList.add('right')
}

document.querySelector('.left_arrow').addEventListener('click', function() {
    if (animateFlag) {
        nextSlide(current)
    }
});

document.querySelector('.right_arrow').addEventListener('click', function() {
    if (animateFlag) {
        prevSlide(current)
    }
});

canvas.addEventListener('touchstart', function(event) {
    const startTouch = event.touches[0]
    axisXStart = startTouch.clientX
})

canvas.addEventListener('touchmove', function(event) {
    let axisXMove = event.touches[0].clientX
    let axisXlength = axisXStart - axisXMove
    if (axisXlength > 0 && animateFlag) {
        nextSlide(current)
    } else if (axisXlength < 0 && animateFlag) {
        prevSlide(current)
    }
    
})