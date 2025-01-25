/* Navbar - change on scroll */
const nav = document.querySelector("nav");
const sectionOne = document.querySelector(".hero-section");

const sectionOneOptions = {
  rootMargin: "-200px 0px 0px 0px",
};

const sectionOneObserver = new IntersectionObserver(
  (entries, sectionOneObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        nav.classList.add("nav-scrolled");
      } else {
        nav.classList.remove("nav-scrolled");
      }
    });
  },
  sectionOneOptions
);

sectionOneObserver.observe(sectionOne);

/* Easy selector helper function */
const select = (el, all = false) => {
  el = el.trim();
  if (all) {
    return [...document.querySelectorAll(el)];
  } else {
    return document.querySelector(el);
  }
};

const on = (type, el, listener, all = false) => {
  const selectEl = select(el, all);

  if (selectEl) {
    if (all) {
      selectEl.forEach((e) => e.addEventListener(type, listener));
    } else {
      selectEl.addEventListener(type, listener);
    }
  }
};

/* Portfolio Filters */
window.addEventListener("load", () => {
  const portfolioContainer = select(".portfolio-container");
  if (portfolioContainer) {
    const portfolioIsotope = new Isotope(portfolioContainer, {
      itemSelector: ".portfolio-item",
      layoutMode: "fitRows",
    });

    const portfolioFilters = select(".portfolio-flters li", true);

    on(
      "click",
      ".portfolio-flters li",
      function (e) {
        e.preventDefault();
        portfolioFilters.forEach((el) => {
          el.classList.remove("filter-active");
        });
        this.classList.add("filter-active");

        portfolioIsotope.arrange({
          filter: this.getAttribute("data-filter"),
        });
      },
      true
    );
  }
});

/* Form - Email JS*/

const loader = document.querySelector(".spinner-border");
const submitTxt = document.querySelector("#submitTxt");
const submitBtn = document.querySelector("#submitBtn");

(() => {
  emailjs.init("8PWNKMuO5773e7X7P");
})();

(() => {
  "use strict";

  window.addEventListener(
    "load",
    () => {
      const forms = document.querySelectorAll(".needs-validation");
      const validation = Array.prototype.filter.call(forms, (form) => {
        form.addEventListener(
          "submit",
          (event) => {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            } else {
              event.preventDefault();
              sendEmail();
            }
            form.classList.add("was-validated");
          },
          false
        );
      });
    },
    false
  );
})();

function showLoader() {
  submitTxt.style.display = "none";
  submitBtn.style.width = "40%";
  loader.style.display = "inline-block";
}

function hideLoader() {
  submitBtn.style.width = "initial";
  submitTxt.style.display = "inline-block";
  loader.style.display = "none";
}

function sendEmail() {
  showLoader();

  emailjs
    .sendForm("service_b7zg4dy", "template_8ccl4fd", ".needs-validation")
    .then(() => {
      hideLoader();
      document.querySelector("#messageSuccess").style.display = "block";
      setTimeout(() => {
        resetForm();
      }, 2600);
    });
}

function resetForm() {
  const form = document.querySelector(".needs-validation");
  form.reset();
  form.classList.remove("was-validated");
  document.querySelector("#messageSuccess").style.display = "none";
}

/* Copyright */
function updateCopyrightYear() {
  let date = new Date();
  let currentYear = date.getFullYear();
  document.querySelector("#year").innerHTML = currentYear;
}

window.requestAnimationFrame(updateCopyrightYear);

/* Scroll to top button */
const scrollTopBtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function () {
  scrollTopBtn.classList.toggle("active", window.scrollY > 500);
});

/* Scroll Reveal */
ScrollReveal({
  // reset: true,
  distance: "60px",
  duration: 2500,
  delay: 100,
});

ScrollReveal().reveal(".about h2, .projects h2", {
  delay: 500,
  origin: "top",
});

// top - mobile only - hero section
ScrollReveal().reveal(".left-reveal", {
  delay: 500,
  origin: "top",
  desktop: false,
});

// left - desktop only - hero section
ScrollReveal().reveal(".left-reveal", {
  delay: 500,
  origin: "left",
  mobile: false,
});

ScrollReveal().reveal(
  ".about img, .services h2, .services .sub-clr, .contact h2, .contact .sub-clr, .contact .par-txt, .footer p",
  {
    delay: 500,
    origin: "left",
  }
);

ScrollReveal().reveal(".services .line, .contact .line", {
  delay: 500,
  origin: "left",
  interval: 200,
  distance: "100px",
});

ScrollReveal().reveal(".about .sub-clr, .projects .sub-clr", {
  delay: 600,
});

ScrollReveal().reveal(".h-link, .portfolio-flters li, .project-wrap", {
  delay: 500,
  interval: 200,
});

ScrollReveal().reveal(".about .line, .projects .line", {
  delay: 500,
  interval: 200,
  distance: "100px",
});

ScrollReveal().reveal(".card-box", {
  delay: 500,
  easing: "cubic-bezier(.215, .61, .355, 1)",
  interval: 240,
  scale: 0.65,
});

// footer only
ScrollReveal().reveal(".social-reveal", {
  duration: 1000,
  easing: "cubic-bezier(.215, .61, .355, 1)",
  interval: 240,
  scale: 0.65,
  desktop: false,
});

ScrollReveal().reveal(".social-reveal", {
  delay: 500,
  easing: "cubic-bezier(.215, .61, .355, 1)",
  interval: 240,
  scale: 0.65,
  origin: "right",
  mobile: false,
});

// right - desktop only
ScrollReveal().reveal(".right-reveal", {
  delay: 600,
  origin: "right",
  mobile: false,
});

//right - Mobile only
ScrollReveal().reveal(".right-reveal", {
  delay: 600,
  desktop: false,
});

//right - diff - desktop only
ScrollReveal().reveal(".right-diff-reveal", {
  delay: 500,
  origin: "right",
  interval: 200,
  mobile: false,
});

// right - diff - mobile only
ScrollReveal().reveal(".right-diff-reveal", {
  delay: 500,
  interval: 200,
  desktop: false,
});

/* Hero - text animation */
let typed = new Typed(".auto-type", {
  strings: ["Front-End Developer.", "UI Explorer."],
  typeSpeed: 155,
  backSpeed: 140,
  startDelay: 2100,
  loop: true,
});
