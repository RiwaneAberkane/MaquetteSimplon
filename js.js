let link = document.getElementById('link')
let burger = document.getElementById('burger')
let ul = document.querySelector('ul')

/* gestionnaire d'événement sur le a#link pour venir changer l'attribution de la classe .open à la ul et au span#burger */
link.addEventListener('click', function(e) {
  e.preventDefault()
  burger.classList.toggle('open')
  ul.classList.toggle('open')
})


// CAROUSSEL----------------------------------------$$$$$$$$$$$$$$$$$$$$$$$



// SLIDE 2 NEXT BTN --------------------------------------------------------

// -------------------------------------------------------------Sélectionne toutes les diapositives
const slides = document.querySelectorAll(".slide");

// -----------parcourt les diapositives et définit la propriété translateX de chaque diapositive sur index * 100%
slides.forEach((slide, indx) => {
  slide.style.transform = `translateX(${indx * 100}%)`;
});

// ----------------------------------------compteur de diapositives en cours
let curSlide = 0;


// --------------------------------------------------------sélectionnez le bouton de la diapositive suivante
const nextSlide = document.querySelector(".btn-next");



// ------------------------------ajoute un écouteur d'événement et la fonctionnalité de diapositive suivante 
nextSlide.addEventListener("click", function () {
     curSlide++;

     console.log('Compteur: '+ curSlide);
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
    console.log('INDEX: '+ indx);
  });
});


// SLIDE 2 NEXT BTN --------------------------------------------------------

// --------------------------------------------------------sélectionnez le bouton de la diapositive suivante 
const nextSlide2 = document.querySelector(".btn-next2");

// -----------------------------------------------------------------nombre maximum de diapositives
let maxSlide = slides.length - 1;

// ---------------------------------------ajoute un écouteur d'événement et une fonctionnalité de navigation
nextSlide2.addEventListener("click", function () {
    
// -----------------vérifie si la diapositive actuelle est la dernière et réinitialise la diapositive actuelle


  if (curSlide === maxSlide) {
    curSlide = 0;
  } else {
    curSlide++;
  }

// -------------------------------------------------------------------------déplace la diapositive de -100 %
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100* (indx - curSlide)}%)`;
  });
});



// SLIDE 2 PREVIOUS BTN --------------------------------------------------------

// sélectionnez le bouton de la diapositive précédente
const prevSlide = document.querySelector(".btn-prev2");

// ajoute un écouteur d'événement et une fonctionnalité de navigation 
prevSlide.addEventListener("click", function () {
// vérifie si la diapositive actuelle est la première et réinitialise la diapositive actuelle à la dernière
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }

// déplace la diapositive de 100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});


// SLIDE 3 PREVIOUS BTN --------------------------------------------------------

// sélectionnez le bouton de la diapositive précédente
const prevSlide3 = document.querySelector(".btn-prev3");

// ajoute un écouteur d'événement et une fonctionnalité de navigation 
prevSlide3.addEventListener("click", function () {
// vérifie si la diapositive actuelle est la première et réinitialise la diapositive actuelle à la dernière
  if (curSlide === 0) {
    curSlide = maxSlide;
  } else {
    curSlide--;
  }

// déplace la diapositive de 100%
  slides.forEach((slide, indx) => {
    slide.style.transform = `translateX(${100 * (indx - curSlide)}%)`;
  });
});


