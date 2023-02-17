// function doStuff() {

/* Navbar - change on scroll */
const nav = document.querySelector("nav");
const sectionOne = document.querySelector(".hero-section");

const sectionOneOptions = {
    rootMargin: "-200px 0px 0px 0px"
};

const sectionOneObserver = new IntersectionObserver(function(
  entries, 
  sectionOneObserver
) {
  entries.forEach(entry => {
    if(!entry.isIntersecting) {
      nav.classList.add("nav-scrolled");
    } else {
      nav.classList.remove("nav-scrolled");
    }
  })
}, 
sectionOneOptions);

sectionOneObserver.observe(sectionOne);

/* Progress bar - scroll animation */
let elements_to_watch = document.querySelectorAll(".watch");

// callback
let callback = function(items) {
    items.forEach((item) => {
        if(item.isIntersecting) {
            item.target.classList.add("active");

        } /*else {
            item.target.classList.remove("active");
        }*/
    });
}

// observer 
let observer = new IntersectionObserver(callback, { threshold : 0.5 } );

// apply
elements_to_watch.forEach((element) => {
    observer.observe(element);
});

/* Porfolio isotope and filter */

 /* Easy selector helper function */
const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

/* Easy event listener function */
const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)

  if (selectEl) {
    if (all) {
      selectEl.forEach(e => e.addEventListener(type, listener))
    } else {
        selectEl.addEventListener(type, listener)
    }
  }
 }

  window.addEventListener('load', () => {
    let portfolioContainer = select('.portfolio-container');
    if (portfolioContainer) {
      let portfolioIsotope = new Isotope(portfolioContainer, {
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
      });

      let portfolioFilters = select('.portfolio-flters li', true);

      on('click', '.portfolio-flters li', function(e) {
        e.preventDefault();
        portfolioFilters.forEach(function(el) {
          el.classList.remove('filter-active');
        });
        this.classList.add('filter-active');

        portfolioIsotope.arrange({
          filter: this.getAttribute('data-filter')
        });
      }, true);
    }

  });

/* Form - Email JS*/
(function(){
    emailjs.init("8PWNKMuO5773e7X7P");
})();

(function() {
  'use strict';
  window.addEventListener('load', function() {
    var forms = document.getElementsByClassName('needs-validation');
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        } else {
          event.preventDefault();
          sendEmail();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();

function sendEmail() {
  emailjs.sendForm('service_b7zg4dy', 'template_8ccl4fd', '.needs-validation')
    .then(function() {
      document.getElementById("messageSuccess").style.display = "block";
      setTimeout(function() {
        resetForm();
      }, 2600);
    }, function(error) {
      console.error('Failed to send email:', error);
    });
}

function resetForm() {
  var form = document.querySelector('.needs-validation');
  form.reset();
  form.classList.remove('was-validated');
  document.getElementById("messageSuccess").style.display = "none";
}

/* Copyright */
function updateCopyrightYear() {
    var d = new Date();
    var currentYear = d.getFullYear();
    document.getElementById("year").innerHTML = currentYear;
  }
  
window.requestAnimationFrame(updateCopyrightYear);


/* Scroll to top button */
const scrollTopBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function(){
    scrollTopBtn.classList.toggle("active", window.scrollY > 500);
});


/* Scroll Reveal */
ScrollReveal({
    // reset: true,
    distance: '60px',
    duration: 2500,
    delay: 100
});

ScrollReveal().reveal('.about h2, .projects h2', {
    delay: 500, 
    origin: 'top'
});

// top - mobile only - hero section
ScrollReveal().reveal('.left-reveal', { 
    delay: 500, 
    origin: 'top', 
    desktop: false 
});

// left - desktop only - hero section 
ScrollReveal().reveal('.left-reveal', { 
    delay: 500, 
    origin: 'left', 
    mobile: false 
});

ScrollReveal().reveal('.about img, .services h2, .services .sub-clr, .contact h2, .contact .sub-clr, .contact .par-txt, .footer p', { 
    delay: 500, 
    origin: 'left'
});

ScrollReveal().reveal('.services .line, .contact .line', { 
    delay: 500, 
    origin: 'left', 
    interval: 200, 
    distance: '100px' 
});

ScrollReveal().reveal('.about .sub-clr, .projects .sub-clr', { 
    delay: 600
});

ScrollReveal().reveal('.h-link, .portfolio-flters li, .project-wrap', { 
    delay: 500,  
    interval: 200 
});

ScrollReveal().reveal('.about .line, .projects .line', { 
    delay: 500,  
    interval: 200, 
    distance: '100px' 
});

ScrollReveal().reveal('.card-box', { 
    delay: 500, 
    easing: 'cubic-bezier(.215, .61, .355, 1)',   interval: 240, 
    scale: 0.65 
});

// footer only
ScrollReveal().reveal('.social-reveal', { 
    duration: 1000,
    easing: 'cubic-bezier(.215, .61, .355, 1)',   interval: 240, 
    scale: 0.65,
    desktop: false
});

ScrollReveal().reveal('.social-reveal', { 
    delay: 500,
    easing: 'cubic-bezier(.215, .61, .355, 1)',   interval: 240, 
    scale: 0.65,
    origin: 'right',
    mobile: false
});

// right - desktop only
ScrollReveal().reveal('.right-reveal', { 
    delay: 600, 
    origin: 'right', 
    mobile: false
});

//right - Mobile only 
ScrollReveal().reveal('.right-reveal', { 
    delay: 600, 
    desktop: false 
});

//right - diff - desktop only
ScrollReveal().reveal('.right-diff-reveal', {
    delay: 500, 
    origin: 'right', 
    interval: 200, 
    mobile: false 
});

// right - diff - mobile only
ScrollReveal().reveal('.right-diff-reveal', {
    delay: 500, 
    interval: 200, 
    desktop: false 
});

/* Hero - text animation */
let typed = new Typed(".auto-type", {
    strings: ["Developer.", "Freelancer."],
    typeSpeed: 155,
    backSpeed: 140,
    startDelay: 2100,
    loop: true
})


// }

// document.addEventListener('DOMContentLoaded', doStuff);











