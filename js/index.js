$(function () {
    $('.toggle-overlay').click(function () {
        $('.search-overlay').toggleClass('open')
    })
})

$(function () {
    $('.menu-toggle').click(function () {
        $('.menu-toggle').toggleClass('active')
    })
})

$(function () {
    $('.gallery-button').click(function () {
        let name = $(this).attr('data-filter')
        if (name === 'all') {
            $(".shot-thumbnail").show('2000')
        } else {
            $(".shot-thumbnail").not("." + name).hide('2000')
            $(".shot-thumbnail").filter("." + name).show('2000')

        }
    })
})

let navigations = document.querySelectorAll('.gallery-button')
const myButton = document.getElementsByClassName('back-to-top')

window.addEventListener('scroll', () => {
    if (window.window.pageYOffset > 1000) {
        myButton[0].style.display = "block"
    } else {
        myButton[0].style.display = "none"

    }
})

myButton[0].addEventListener('click', function () {
    window.scrollTo(0, 0);
});

const clear = () => {
    for (let i = 0; i < navigations.length; i++) {
        navigations[i].classList.remove('active')
    }
}

for (const navig in navigations) {
    navigations[navig].addEventListener('click', () => {
        clear()
        navigations[navig].classList.add('active')
    })
}


//lightbox config.
lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true,
    'fadeDuration': 400,
    'positionFromTop': 200
})




