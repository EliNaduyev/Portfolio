
var i = 0
var j = 0

var txt1 = 'Senior student of Software Engineering,'; 
var txt2 = 'with big passion to Web & Application development.'; 

var speed = 30; 
firstPara = document.querySelector('.typing-text-1')
secondPara = document.querySelector('.typing-text-2')

function typeWriter() {
  if (i < txt1.length) {
    firstPara.innerHTML += txt1.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
  else{typeWriter2()}
}

function typeWriter2() {

  if (j < txt2.length) {
    
    secondPara.innerHTML += txt2.charAt(j);
    j++;
    setTimeout(typeWriter2, speed);
  }
}

window.onload = function(){ 
  let loading = document.querySelector(".loading-page")
  loading.classList.add('loading-page-remove')
  typeWriter()
}

const showSideNav = () => {
    let humburger = document.querySelector('.side-navbar')
    humburger.classList.toggle('show-side-navbar')
}

const showEmail = () => {
    let email = document.querySelector(".hero-contact-info")
    email.classList.toggle("show-hero-contact-info")
}

const navLinksEffect = () =>{

  let aboutSection = document.querySelector('#about')
  let skillsSection = document.querySelector('#skills')
  let projectsSection = document.querySelector('#projects')
  let contactSection = document.querySelector('#contact')

  let homeLink = document.querySelector('.home-link')
  let aboutLink = document.querySelector('.about-link')
  let skillsLink = document.querySelector('.skills-link')
  let projectsLink = document.querySelector('.projects-link')
  let contactLink = document.querySelector('.contact-link')

  let aboutSectionPosition = aboutSection.getBoundingClientRect().top
  let skillsSectionPosition = skillsSection.getBoundingClientRect().top
  let projectsSectionPosition = projectsSection.getBoundingClientRect().top
  let contactSectionPosition = contactSection.getBoundingClientRect().top

  homeLink.style.color = "rgb(226, 213, 39)"
  homeLink.style.fontWeight = "bold"

  if(aboutSectionPosition < 100){

    homeLink.style.fontWeight = "normal"
    homeLink.style.color = "white"

    aboutLink.style.fontWeight = "bold"
    aboutLink.style.color = "rgb(226, 213, 39)"
  }
  else{
    aboutLink.style.fontWeight = "normal"
    aboutLink.style.color = "white"
  }

  if(skillsSectionPosition < 100 )
  {
    aboutLink.style.fontWeight = "normal"
    aboutLink.style.color = "white"
    skillsLink.style.color = "rgb(226, 213, 39)"
    skillsLink.style.fontWeight = "bold"

  }
  else{
    skillsLink.style.color = "white"
    skillsLink.style.fontWeight = "normal"

  }

  if(projectsSectionPosition <100){
    skillsLink.style.fontWeight = "normal"
    skillsLink.style.color = "white"

    projectsLink.style.color = "rgb(226, 213, 39)"
    projectsLink.style.fontWeight = "bold"


  }
  else{
    projectsLink.style.fontWeight = "normal"
    projectsLink.style.color = "white"

  }

  if(contactSectionPosition < 600){
    projectsLink.style.fontWeight = "normal"
    projectsLink.style.color = "white"

    contactLink.style.color = "rgb(226, 213, 39)"
    contactLink.style.fontWeight = "bold"
  }
  else{
    contactLink.style.color = "white"
    contactLink.style.fontWeight = "normal"
  }
}

const scrollEffectInAbout = () =>{
  let about = document.querySelector('.about-grid')

  let aboutPosition = about.getBoundingClientRect().top;
  let screenPosition = window.innerHeight/1.5;

  if(aboutPosition < screenPosition){
    about.classList.add('about-grid-show');
  }
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
  let projects = document.querySelectorAll('.project-box')
  let el = document.querySelector('.vehicle-agency-pos')

  let projectsPosition = projects[0].getBoundingClientRect().top;
  let secondRow = el.getBoundingClientRect().top;

  let screenPosition = window.innerHeight/1.5;
  let screenPosition2 = window.innerHeight/1.2;

  if(projectsPosition < screenPosition){
    projects[0].classList.add('project-box-show');
    projects[1].classList.add('project-box-show');
    projects[2].classList.add('project-box-show');
  }
  else{
    projects[0].classList.remove('project-box-show')
    projects[1].classList.remove('project-box-show')
    projects[2].classList.remove('project-box-show')
  }

  if(secondRow < screenPosition2){
    projects[3].classList.add('project-box-show');
    projects[4].classList.add('project-box-show');
    projects[5].classList.add('project-box-show');

  }
}

window.addEventListener('scroll',scrollEffectInAbout)
window.addEventListener('scroll',scrollEffectInSkills)
window.addEventListener('scroll',scrollEffectInProjects)
window.addEventListener('scroll',navLinksEffect)
