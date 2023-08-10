/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')



      const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
        scrollbar: {
          el: '.swiper-scrollbar',
        },
      });
/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}


/*===== contact us  =====*/
var btn = document.getElementById('btn')
var contactForm = document.getElementById('contactForm');

btn.addEventListener('click', function(e){
    e.preventDefault()
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var message = document.getElementById('message').value;
    var body = 'name: '+name + '<br/> email: '+ email + '<br/> message: '+ message; 
      // Check if all required fields are filled out
      if (!name || !email || !phone || !message) {
        // Display an error message if any required field is empty
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please fill out all required fields!'
        });
        return;
    }
    

     Email.send({
        SecureToken : "76ad58ea-6f06-4876-99eb-5867274fde30",
        To : 'nixxxcatalo20@gmail.com',
        From : 'adas0mahdi@gmail.com',
        Subject : "contcat massage",
        Body : body
    }).then(function(message) {

      Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
      })
      // Clear form fields
      contactForm.reset();
    
  });
    
})

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== UPDATE THE YEAR ===============*/
document.getElementById("year").innerHTML = new Date().getFullYear();

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== GSAP ANIMATION ===============*/
TweenMax.from('.home__title', 1, {delay: .2, opacity: 0, y: 20, ease: Expo.easeInOut})
TweenMax.from('.home__description', 1, {delay: .3, opacity: 0, y: 20, ease: Expo.easeInOut})
TweenMax.from('.home__button', 1, {delay: .4, opacity: 0, y: 20, ease: Expo.easeInOut})
TweenMax.from('.home__liquid', 1, {delay: .7, opacity: 0, y: 200, ease: Expo.easeInOut})
TweenMax.from('.home__juice-animate', 1, {delay: 1.2, opacity: 0, y: -800, ease: Expo.easeInOut})
TweenMax.from('.home__apple1', 1, {delay: 1.5, opacity: 0, y: -800, ease: Expo.easeInOut})
TweenMax.from('.home__apple2', 1, {delay: 1.6, opacity: 0, y: -800, ease: Expo.easeInOut})
TweenMax.from('.home__leaf:nth-child(1)', 2, {delay: 1.3, opacity: 0, y: -800, ease: Expo.easeInOut})
TweenMax.from('.home__leaf:nth-child(2)', 2, {delay: 1.4, opacity: 0, y: -800, ease: Expo.easeInOut})
TweenMax.from('.home__leaf:nth-child(3)', 2, {delay: 1.5, opacity: 0, y: -800, ease: Expo.easeInOut})
TweenMax.from('.home__leaf:nth-child(4)', 2, {delay: 1.6, opacity: 0, y: -800, ease: Expo.easeInOut})
TweenMax.from('.home__leaf:nth-child(5)', 2, {delay: 1.7, opacity: 0, y: -800, ease: Expo.easeInOut})
TweenMax.from('.home__leaf:nth-child(6)', 2, {delay: 1.8, opacity: 0, y: -800, ease: Expo.easeInOut})

