// Greading 
const gread = new Date().getHours();
let text = "";
switch(gread){
  case 6: case 7: case 8: case 9: case 10: case 11:
    text = "Morning";
    break;
  case 12: case 13: case 14: 
  case 15:
    text = "Noon";
    break;
  case 16: 
  case 17:
    text = "Afternoon";
    break;
  case 18: case 19: case 20: case 21:
  case 22: 
  case 23:
    text = "Evening";
    break;
  default:
    text = "Sleeep Time, So don't sleep waste right time";
}
document.getElementById('greading').innerHTML = text;


// Clock Code Start
let h = document.getElementById('hour');
let m = document.getElementById('min');
let s = document.getElementById('sec');

function displayTime(){
  let date = new Date();

  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();

  let hRotation = 30*hh + mm/2;
  let mRotation = 6*mm;
  let sRotation = 6*ss;

  h.style.transform = `rotate(${hRotation}deg)`;
  m.style.transform = `rotate(${mRotation}deg)`;
  s.style.transform = `rotate(${sRotation}deg)`;
}
setInterval(displayTime,1000);


// Clock middle interval test

let id = setInterval(anim, 2000);
let imgIndex = 0;
let image = document.querySelectorAll('.image-item');
console.log(image)

function anim (){
  if(imgIndex == image.length - 1)
  {
    clearInterval(id);
  }else{
    // imgIndex = (imgIndex < image.length - 1) ? 0 : imgIndex++;
    imgIndex++
    image[imgIndex].style.transform = `translateX(-${imgIndex * 100}%)`;
  }
}

// Clock Code End

// Header Nav Menu
let openBtn = document.getElementsByClassName('navOpen')[0];
let closeBtn = document.getElementsByClassName('navClose')[0];
let navMenu = document.getElementById('navMenu');

openBtn.addEventListener('click', function(){
  navMenu.style.transform = "translateX(0px)";
  closeBtn.style.display = 'block';
  openBtn.style.display = 'none';
})
closeBtn.addEventListener('click', function(){
  navMenu.style.transform = "translateX(-200px)";
  closeBtn.style.display = 'none';
  openBtn.style.display = 'block';
})



// social Icon
let socialBtn = document.getElementsByClassName('open-close')[0];

socialBtn.addEventListener('click', function(){
  let sMenu = document.getElementsByClassName('social-item')[0];

  if(sMenu.style.transform == 'translateX(0px)'){
    sMenu.style.transform = 'translateX(20px)';
  }else{
    sMenu.style.transform = 'translateX(0px)';
  }
})


// About Section

let aboutMenu = document.querySelectorAll('.about-menu');
let about = document.getElementsByClassName('about')[0];
let closeAbout = document.getElementsByClassName('close-about')[0];

aboutMenu.forEach(item => {
  item.addEventListener('click', function(){
    about.style.display = 'block';
  })

  closeAbout.addEventListener('click', function(){
    about.style.display = 'none';
  })

});


// Portfolio Section

let portfolioMenu = document.querySelectorAll('.portfolio-menu');
let portfolio = document.getElementsByClassName('portfolio')[0];
let closePortfolio = document.getElementsByClassName('close-portfolio')[0];

portfolioMenu.forEach(item => {
  item.addEventListener('click', function(){
    portfolio.style.display = 'block';
  })
  
  closePortfolio.addEventListener('click', function(){
    portfolio.style.display = 'none';
  })
})


// Portfolio Navbar

let portNavAll = document.getElementsByClassName('port-nav-item')[0];
let portNavPort = document.getElementsByClassName('port-nav-item')[1];
let portNavClock = document.getElementsByClassName('port-nav-item')[2];
let portNavEcom = document.getElementsByClassName('port-nav-item')[3];
let portNavHospital = document.getElementsByClassName('port-nav-item')[4];

const menuAll = document.querySelector('#all');
const menuPort = document.querySelector('#Port');
const menuClock = document.querySelector('#Clock');
const menuEcom = document.querySelector('#Ecom');
const menuHospital = document.querySelector('#Hospital');

portNavAll.addEventListener('click', () => {
  menuAll.style.display = "flex";
  menuAll.style.display = "justify-content(space-between)";
  menuPort.style.display = "none";
  menuClock.style.display = "none";
  menuEcom.style.display = "none";
  menuHospital.style.display = "none";
})

portNavPort.addEventListener('click', () => {
  menuPort.style.display = "flex";
  menuPort.style.display = "justify-content(space-between)";
  menuAll.style.display = "none";
  menuClock.style.display = "none";
  menuEcom.style.display = "none";
  menuHospital.style.display = "none";
})

portNavClock.addEventListener('click', () => {
  menuClock.style.display = "flex";
  menuClock.style.display = "justify-content(space-between)";
  menuPort.style.display = "none";
  menuAll.style.display = "none";
  menuEcom.style.display = "none";
  menuHospital.style.display = "none";
})

portNavEcom.addEventListener('click', () => {
  menuEcom.style.display = "flex";
  menuEcom.style.display = "justify-content(space-between)";
  menuClock.style.display = "none";
  menuPort.style.display = "none";
  menuAll.style.display = "none";
  menuHospital.style.display = "none";
})

portNavHospital.addEventListener('click', () => {
  menuHospital.style.display = "flex";
  menuHospital.style.display = "justify-content(space-between)";
  menuClock.style.display = "none";
  menuPort.style.display = "none";
  menuAll.style.display = "none";
  menuEcom.style.display = "none";
})




let star = document.querySelectorAll('.star i');
// console.log(star);
star.forEach(item => {
  item.addEventListener('click', () => {
    // item.style.color = 'red';
    alert('Item');
  })
})



// Git Section

let gitMenu = document.querySelectorAll('.git-menu');
let git = document.getElementsByClassName('git')[0];
let closeGit = document.getElementsByClassName('close-git')[0];

gitMenu.forEach(item => {
  item.addEventListener('click', function(){
    git.style.display = 'block';
  })
  
  closeGit.addEventListener('click', function(){
    git.style.display = 'none';
  })
})



// Contact Section

let contactMenu = document.querySelectorAll('.contact-menu');
let contact = document.getElementsByClassName('contact')[0];
let closeContact = document.getElementsByClassName('close-contact')[0];

contactMenu.forEach(item => {
  item.addEventListener('click', function(){
    contact.style.display = 'block';
  })
  
  closeContact.addEventListener('click', function(){
    contact.style.display = 'none';
  })
})


    
