let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navbar.classList.toggle('active');
}
document.getElementById("popoutbtn").addEventListener("click", function() {
  alert("Thank You For Your Subscription!");
});




window.onscroll = () => {
  menu.classList.remove('bx-x');
  navbar.classList.remove('active');
}
const sr = ScrollReveal ({
  distance: '10px',
  duration: 1500,
  delay: 100,
  resert: true
})

sr.reveal('.text',{delay: 0, origin : 'top'})
sr.reveal('.book-now',{delay: 0, origin : 'top'})
sr.reveal('.heading',{delay: 0, origin : 'top'})
sr.reveal('.ride-container .box',{delay: 0, origin : 'top'})
sr.reveal('.services-container .box',{delay: 0, origin : 'top'})
sr.reveal('.about-container',{delay: 0, origin : 'top'})
sr.reveal('.review-container .box',{delay: 0, origin : 'top'})
sr.reveal('.location-container .box',{delay: 0, origin : 'top'})
sr.reveal('.newsletter h2',{delay: 0, origin : 'top'})
sr.reveal('.newsletter .box',{delay: 0, origin : 'top'})


const toggle = document.getElementById('toggleDark');
const headers = document.querySelectorAll('#header');
const bodies = document.querySelectorAll('body');
const aElements = document.querySelectorAll('.navbar a');
const Navbars = document.querySelectorAll('navbar');
const aElements1 = document.querySelectorAll('.selected-lang a');
const aElements2 = document.querySelectorAll('.social a');
const homeElements = document.querySelectorAll('.home');
const mediaQuery = window.matchMedia('(max-width: 1130px)');
const logoImgs = document.querySelectorAll('.logo img');
const servicesContainerBoxes = document.querySelectorAll('.services-container .box');


toggle.addEventListener('click', function() {
  this.classList.toggle('bxs-moon');
  const isDarkMode = this.classList.toggle('bxs-sun');
  const currentPage = window.location.pathname;
  const isIndexArabic = currentPage.includes('index-ar.html');


  headers.forEach(header => {
    if (isDarkMode) {
      header.style.background = 'black';
      header.style.color = 'white';
    } else {
      header.style.background = '#eeeff1';
      header.style.color = '#444';
    }
    header.style.transition = '0.5s';
  });

  bodies.forEach(body => {
    if (isDarkMode) {
      body.style.background = 'black';
      body.style.color = 'white';
    } else {
      body.style.background = 'white';
      body.style.color = 'black';
    }
    body.style.transition = '0.5s';
  });

  aElements.forEach(a => {
    if (isDarkMode) {
      a.style.color = 'white';
    } else {
      a.style.color = 'black';
    }
    a.style.transition = '0.5s';
  });
    if (window.matchMedia('(max-width: 820px)').matches) {
    aElements.forEach(a => {
      if (isDarkMode) {
        a.style.background = 'black';
        a.style.color = 'white';
      } else {
        a.style.color = 'black';
        a.style.background = 'White';
      }
      a.style.transition = '0.5s';
    });
  }

  aElements1.forEach(a => {
    if (isDarkMode) {
      a.style.color = 'white';
    } else {
      a.style.color = 'black';
    }
    a.style.transition = '0.5s';
  });

  aElements2.forEach(a => {
    if (isDarkMode) {
      a.style.color = 'white';
    } else {
      a.style.color = 'black';
    }
    a.style.transition = '0.5s';
  });

  homeElements.forEach((homeElement, index) => {
    if (isDarkMode) {
      if (isIndexArabic && index === 0) {
        homeElement.style.background = 'url(images/back-ar-darversion.png)';
      } else {
        homeElement.style.background = 'url(images/darkmode-poster.png)';
      }
    } else {
      if (isIndexArabic && index === 0) {
        homeElement.style.background = 'url(images/back-ar-version.png)';
      } else {
        homeElement.style.background = 'url(images/Red-Car-Poster.png)';
      }
    }
    
    if (window.matchMedia('(max-width: 1130px)').matches) {
      if (isIndexArabic){
        homeElement.style.backgroundPosition = 'right';
      }else{
        homeElement.style.backgroundPosition = 'left';
      }
    } else {
      homeElement.style.backgroundPosition = 'center left';
    }
    
    homeElement.style.backgroundSize = 'cover';
    homeElement.style.transition = '0.5s';
  });

  logoImgs.forEach(logoImg => {
    if (isDarkMode) {
      if (isIndexArabic) {
        logoImg.src = 'images/logoar-dark.png';
      } else {
        logoImg.src = 'images/logo-dark.png';
      }
    } else {
      if (isIndexArabic) {
        logoImg.src = 'images/logoar.png';
      }else {
        logoImg.src = 'images/logo.png';
      }
    }
    logoImg.style.transition = '0.5s';
  });
  servicesContainerBoxes.forEach(box => {
    const spans = box.querySelectorAll('h2 span');
    if (isDarkMode) {
      spans.forEach(span => {
        span.style.color = 'white';
      });
    } else {
      spans.forEach(span => {
        span.style.color = 'var(--text-color)';
      });
    }
  });

});