
window.onload = function(){ 
    let intro = document.querySelector(".intro-animation")
    if(intro)
        intro.classList.add('intro-show')

    
    let email = document.querySelector(".intro-contact-info")
    if(email)
        email.classList.toggle("show-intro-contact-info")
  }

const changeNavColor = () => {
    let sideNavbar = document.querySelector('.top-fixed-nav')
    if(sideNavbar){
        let sideNavbarPosition = sideNavbar.getBoundingClientRect().top

        if (window.pageYOffset !== sideNavbarPosition)
            sideNavbar.style.backgroundColor  = 'rgba(0, 0, 0, 0.4)'
        else
            sideNavbar.style.backgroundColor  = 'transparent'
    }
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
