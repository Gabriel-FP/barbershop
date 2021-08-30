// ABRIR E FECHAR O MENU NOS ICONES: "..." E "X"
const nav = document.querySelector('#header nav')
const toggle = document.querySelectorAll('nav .toggle')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
  })
}

// FECHAR O MENU AO CLICKAR EM ALGUM ITEM DELE
const links = document.querySelectorAll('nav ul li a')

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

// SOMBRA NO HEADER/NAV FUNCTION
function changeHeaderWhenScroll() {
  const header = document.querySelector('#header')
  const navHeight = header.offsetHeight

  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

// SWIPER MECHANICS
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: false,
  keyboard: true
})

// SCROLL REVEAL MECHANICHS
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 760,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #services header, #services .card,
  #testimonials header, #testimonials .testimonials
  #contact .text, #contact .links,
  footer .brand, footer .social
  `,
  { interval: 100 }
)

// BACK2TOP BUTTOM FUNCTION
function backToTop() {
  const backToTopButton = document.querySelector('.back-to-top')

  if (this.window.scrollY >= 2700) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

// WINDOW EVENT LISTENER FOR SCROLL
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTopButton()
})
