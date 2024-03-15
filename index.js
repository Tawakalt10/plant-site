const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById ('nav-toggle'),
      navClose = document.getElementById('nav-close')

// =====MENU SHOW====//
// Validate if constant exists //

if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu')
    })
}


if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}

//===== REMOVE MENU MOBILE ========= //
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


//  CHANGE BACKGROUND HEADER ///
function scrollHeader(){
    const header = document.getElementById('header')
    // when the scroll is greater than 80 viewport height, add  the scrollHeader
    if(this.scrollY >= 80) header.classList.add('scroll-header'); else header
}
window.addEventListener('scroll', scrollHeader)

//========== QUESTIONS ACCORDION =======


const accordionItems = document.querySelectorAll('.questions__item')

accordionItems.forEach((item) => {
    const accordionHeader = item.querySelector('.questions__header')

    accordionHeader.addEventListener('click', () =>{
     const openItem = document.querySelector('.accordion-open')
      toggleItem(item)

       if(openItem && openItem !== item){
         toggleItem(openItem)
       }
    })

})

const toggleItem = (item) => {
  const  accordionContent = item.querySelector('.questions__content')
    
    if(item.classList.contains('accordion-open')){
        accordionContent.removeAttribute('style')
        item.classList.remove('accordion-open')
      } else{ accordionContent.style.height = accordionContent.scrollHeight + 'px'
    item.classList.add('accordion-open')
        
 }

    // accordionContent.style.height = accordionContent.scrollHeight + 'px'
    // item.classList.add('accordion-open')
    //  this above item. was just there, it works fine without it

}

// =========SCROLL SECTIONS ACTIVE LINK ======
// const sections = document.querySelectorAll('section[id]')
//      function scrollActive(){
//        const scrollY = window.pageYOffset
        
//        sections.forEach(current =>{
//          const sectionHeight = current.offsetHeight,
//           sectionTop = current.offsetTop - 58,
//           sectionId = current.getAttribute('id')

//          if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight ){
//            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
//          }else{
//             document.querySelector('.nav__menu a[href*=' + sectionId +']').classList.remove('active-link')
//           }

//        })

//    }
//    window.addEventListener('scroll', scrollActive)

// =========SHOW SCROLL UP ============//
function scrollUp (){
    const scrollUp = document.getElementById('scroll-up');
    // when the scroll is higher than 200 viewport, add
    //  the sho-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.remove('show-scroll') 
}

window.addEventListener('scroll', scrollUp)

// =======DARK LIGHT THEME========// 
  const themeButton = document.getElementById('theme-button')
  const darkTheme = 'dark-theme'
  const iconTheme = 'fa-sun'

//   Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// we obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme)? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'fa-moon' : 'fa-sun'

// We validate if the user previously choose a topic 
if(selectedTheme){
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'fa-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button 
themeButton.addEventListener('click', () =>{
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that are the user 
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())

})