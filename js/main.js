function revealdu() {
  var reveals = document.querySelectorAll('.revealdu');

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 50;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add('active');
    } else {
      // reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener('scroll', revealdu);

function revealrl() {
  var reveals = document.querySelectorAll('.revealrl');

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 50;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add('active');
    } else {
      // reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener('scroll', revealrl);

function reveallr() {
  var reveals = document.querySelectorAll('.reveallr');

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 50;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add('active');
    } else {
      // reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener('scroll', reveallr);

function reveal() {
  var reveals = document.querySelectorAll('.reveal');

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 50;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add('active');
    } else {
      // reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener('scroll', reveal);

const moreTxtBtn = document.querySelector(".morebtn")
const moreTxtArea = document.querySelector(".more-txt")


const moreTxtFn = () => {
moreTxtArea.classList.toggle("more-txt-active")
if(moreTxtBtn.innerHTML==="więcej o mnie"){
  moreTxtBtn.innerHTML="zwiń"  
}else{
moreTxtBtn.innerHTML="więcej o mnie"
}
}

moreTxtBtn.addEventListener("click", moreTxtFn)

const mobMenu = document.querySelector(".mob-menu")

const menuFn = ()=>{
mobMenu.classList.toggle("mob-menu-active")
}
const menuOff = ()=>{
mobMenu.classList.toggle("mob-menu-active")
}

// menuFn()