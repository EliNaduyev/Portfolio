
const showSideNav = () => {
    let humburger = document.querySelector('.side-navbar')
    humburger.classList.toggle('show-side-navbar')
}

const showEmail = () => {
    let email = document.querySelector(".hero-contact-info");
    email.classList.toggle("show-hero-contact-info");
}

const scrollEffectInAbout = () =>{
  let about = document.querySelector('.about-grid')

  let aboutPosition = about.getBoundingClientRect().top;
  let screenPosition = window.innerHeight/1.5;

  if(aboutPosition < screenPosition){about.classList.add('about-grid-show');}
  else{about.classList.remove('about-grid-show')}
}




const scrollEffectInSkills = () =>{
  let skillsLeft = document.querySelector('.skills-left')
  let skillsRight = document.querySelector('.skills-right')

  let skillsLeftPosition = skillsLeft.getBoundingClientRect().top;
  let screenPosition = window.innerHeight/1.5;

  if(skillsLeftPosition < screenPosition){
    skillsLeft.classList.add('skills-left-show');
    skillsRight.classList.add('skills-right-show');
  }
  else{
    skillsLeft.classList.remove('skills-left-show');
    skillsRight.classList.remove('skills-right-show');
  }
}

const scrollEffectInProjects = () =>{
  let projects = document.querySelector('.projects-left-first')

  let projectsPosition = projects.getBoundingClientRect().top;
  let screenPosition = window.innerHeight/1.5;

  if(projectsPosition < screenPosition){projects.classList.add('projects-left-first-show');}
  else{projects.classList.remove('projects-left-first-show')}
}




let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} 



window.addEventListener('scroll',scrollEffectInAbout)
window.addEventListener('scroll',scrollEffectInSkills)
window.addEventListener('scroll',scrollEffectInProjects)
