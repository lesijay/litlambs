// setup date
const date = (document.getElementById("date").innerHTML =
  new Date().getFullYear());
// setup nav
const navBtn = document.getElementById("nav-btn");
const navbar = document.getElementById("navbar");
const navClose = document.getElementById("nav-close");
const navLinks = document.querySelectorAll(".nav-link");

// show nav
navBtn.addEventListener("click", () => {
  navbar.classList.add("showNav");
});
// close nav
navClose.addEventListener("click", () => {
  navbar.classList.remove("showNav");
});

// close modal when user clicks on any of the links
navLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    // navigate to specific spot
    const id = e.currentTarget.getAttribute("href").slice(13);
    const element = document.getElementById(id);
    let position = element.offsetTop;
    window.scrollTo({
      left: 0,
      top: position,
    });
    navbar.classList.remove("showNav");
  });
});

function clearForm() {
  document.getElementById("contactForm").reset();
}

// // slider
// const slides = document.querySelectorAll(".slide");
// const slideContainer = document.querySelector(".slider-container");

// slides.forEach(function (slide, index) {
//   slide.style.top = `${index * 100}%`;
// });

// let counter = 0;
// slideContainer.addEventListener("click", function (e) {
//   const element = e.currentTarget;
//   const children = element.children;
//   counter++;
//   carousel(children);
// });

// function carousel(elementChildren) {
//   // working with slides
//   if (counter > elementChildren.length) {
//     counter = 1;
//   }
//   if (counter === elementChildren.length) {
//     counter = 0;
//   }

//   [...elementChildren].forEach(function (slide) {
//     slide.style.transform = `translateY(-${counter * 100}%)`;
//   });
// }

// slider
const slides = document.querySelectorAll(".slide");
const slideContainers = document.querySelectorAll(".slider-container");
const product1 = document.querySelectorAll(".product1");
const product2 = document.querySelectorAll(".product2");
const product3 = document.querySelectorAll(".product3");

product1.forEach(function (slide, index) {
  slide.style.top = `${index * 100}%`;
});
product2.forEach(function (slide, index) {
  slide.style.top = `${index * 100}%`;
});
product3.forEach(function (slide, index) {
  slide.style.top = `${index * 100}%`;
});

let counter = 0;
// slideContainer.addEventListener("click", function (e) {
//   const element = e.currentTarget;
//   const children = element.children;
//   counter++;
//   carousel(children);
// });

slideContainers.forEach((slideContainer) => {
  slideContainer.addEventListener("click", function (e) {
    const element = e.currentTarget;
    const children = element.children;
    counter++;
    carousel(children);
  });
});

function carousel(elementChildren) {
  // working with slides
  if (counter > elementChildren.length) {
    counter = 1;
  }
  if (counter === elementChildren.length) {
    counter = 0;
  }

  [...elementChildren].forEach(function (slide) {
    slide.style.transform = `translateY(-${counter * 100}%)`;
  });
}
