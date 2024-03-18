
// restrict book page to only users routed form validation form
if (document.referrer != "https://www.litlambs.org/ebooks/wai/") {
  window.location = "https://www.litlambs.org/ebooks/wai/";
}


                 // Book Access
let route = window.location.href;
let users = ["lesisampson@gmail.com"]
//let users = ["lesisampson@gmail.com","annatimothyemeh@gmail.com","givtj1@gmail.com","adeola4j@yahoo.com",
       //      "blessingogua@gmail.com","stellakay88@gmail.com","miracleezinne28@gmail.com","lenonchihowa@gmail.com"
         //    ,"obriko.ejiro@gmail.com","veronicachuks2015@gmail.com","faithgifted17@gmail.com","okekelinda1409@gmail.com",
         //    "alexbetty2014@gmail.com","mbelaobe@outlook.com","moadeloye54@gmail.com","shalomosadebe@gmail.com","dikechi59@gmail.com",
          //  "zoicbuz@gmail.com","fhayvor@gmail.com","chisomwami@gmail.com","obubamiracle@gmail.com","emenikeezioma@gmail.com","priscaakpos@gmail.com",
//"euchariarufus17@gmail.com","orkolade@gmail.com","orkolade@gmail.com","estheradegoke83@gmail.com"];
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
