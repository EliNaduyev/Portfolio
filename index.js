
window.onload = function(){ 
    let intro = document.querySelector(".intro-animation")
    intro.classList.add('intro-show')
  }

const changeNavColor = () => {
    let sideNavbar = document.querySelector('.top-fixed-nav')
    let sideNavbarPosition = sideNavbar.getBoundingClientRect().top

    if (window.pageYOffset !== sideNavbarPosition)
        sideNavbar.style.backgroundColor  = 'rgba(0, 0, 0, 0.4)'
    else
        sideNavbar.style.backgroundColor  = 'transparent'
}


const showEmail = () => {
    let email = document.querySelector(".intro-contact-info")
    email.classList.toggle("show-intro-contact-info")
}

const closeNav = () =>{
    let sideNavbar = document.querySelector('.side-navbar')
    sideNavbar.classList.remove('opening-side-nav')
    sideNavbar.classList.add("closing-side-nav")
}

const openNav = () =>{
    let sideNavbar = document.querySelector('.side-navbar')
    sideNavbar.classList.add("opening-side-nav")
}

window.addEventListener('scroll',changeNavColor)