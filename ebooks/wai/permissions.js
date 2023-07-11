if (document.referrer != "https://www.litlambs.org/ebooks/wai") {
  window.location = "https://www.litlambs.org/ebooks/wai";
}


                 // Book Access
let route = window.location.href;
let users = ["lesisampson@gmail.com"];

function validate(form) {
  var inputValue = form.inputbox.value;
  if (users.includes(inputValue)) {
    window.location = "./who-am-i.html";
  } else {
    alert("You do not yet have permissions to view this resource\nAlternatively, ensure you entered the correct email address");
  }
}
