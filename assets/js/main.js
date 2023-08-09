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
function sendEmail() {
  // Get the values from the form
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var message = document.getElementById("message").value;

  // Create the email body
  var emailBody = "Name: " + name + "\n" +
                  "Email: " + email + "\n" +
                  "Phone: " + phone + "\n" +
                  "Message: " + message;

  // Send the email using an email service
  // This is just an example, you will need to use a real email service
  Email.send({
      Host: "smtp.gmail.com",
      Username: "adas0mahdi@gmail.com",
      Password: "20182397adas09953532613",
      To: 'nixxxcatalo20@gmail.com',
      From: email,
      Subject: "New Contact Form Submission",
      Body: emailBody
  }).then(
      message => alert("Your message has been sent!")
  );
}

function reset() {
  // Reset the form fields
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("phone").value = "";
  document.getElementById("message").value = "";
}


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

