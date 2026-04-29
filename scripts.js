function validateForm() {

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;

  if (name == "" || email == "") {
    alert("Please fill out all required fields.");
    return false;
  } else {
    return true;
  }

}
function toggleDescription(id) {

  var desc = document.getElementById(id);

  if (desc.style.display == "none") {
    desc.style.display = "block";
  } else {
    desc.style.display = "none";
  }

}
window.onload = function() {

  var quote = document.getElementById("quote");

  if (quote) {
    quote.addEventListener("mouseover", function() {
      quote.style.backgroundColor = "gray";
    });

    quote.addEventListener("mouseout", function() {
      quote.style.backgroundColor = "";
    });
  }

  var footer = document.querySelector("footer");

  var p = document.createElement("p");

  var text = document.createTextNode("Page loaded on: " + Date());

  p.appendChild(text);

  footer.appendChild(p);

};