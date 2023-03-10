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

  /* Copyright */ 
 function updateCopyrightYear() {
  const d = new Date();
  const currentYear = d.getFullYear();
  const elements = document.getElementsByClassName("year");
  for (let i = 0; i < elements.length; i++) {
    elements[i].innerHTML = currentYear;
  }
}

window.requestAnimationFrame(updateCopyrightYear);

/* Scroll Reveal */
ScrollReveal({
    // reset: true,
    distance: '60px',
    duration: 2500,
    delay: 100
});

ScrollReveal().reveal('.projects h1', {
    delay: 500, 
    origin: 'top'
});

ScrollReveal().reveal('.projects .sub-clr', { 
    delay: 600
});

ScrollReveal().reveal('.portfolio-flters li, .project-wrap', { 
    delay: 500,  
    interval: 200 
});

ScrollReveal().reveal('.projects .line', { 
    delay: 500,  
    interval: 200, 
    distance: '100px' 
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

ScrollReveal().reveal('.footer p', { 
    delay: 500, 
    origin: 'left'
});

