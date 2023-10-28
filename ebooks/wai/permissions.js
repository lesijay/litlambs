
// restrict book page to only users routed form validation form
if (document.referrer != "https://www.litlambs.org/ebooks/wai/") {
  window.location = "https://www.litlambs.org/ebooks/wai/";
}


                 // Book Access
let route = window.location.href;
let users = ["lesisampson@gmail.com","annatimothyemeh@gmail.com","givtj1@gmail.com","adeola4j@yahoo.com"];

function validate(form) {
  var inputValue = form.inputbox.value.toLowerCase();
  if (users.includes(inputValue)) {
    window.location = "./who-am-i.html";
  } else {
    alert("You do not yet have permissions to view this resource\nAlternatively, ensure you entered the correct email address");
  }
}


// setup date on the footer
const date = (document.getElementById("date").innerHTML =
  new Date().getFullYear());
