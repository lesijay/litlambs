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


                 // Book Access
let route = window.location.href;
let users = ["lesisampson@gmail.com"];

function validate(form) {
  var inputValue = form.inputbox.value;
  console.log(inputValue);
  if (users.includes(inputValue)) {
    window.location = "./who-am-i.html";
  } else {
    alert("You do not yet have permissions to view this resource\nAlternatively, ensure you entered the correct email address");
  }
}

