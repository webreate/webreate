let box1 = document.getElementById("box1")
let box2 = document.getElementById("box2")
function showLocation() {
  document.getElementById("location").style.display = "flex";
  document.getElementById("contactForm").style.display = "none";
  document.getElementById("heading").innerText = "location";
  box1.classList.add("active")
  box2.classList.remove("active")
}

function showContactForm() {
  document.getElementById("location").style.display = "none";
  document.getElementById("contactForm").style.display = "flex";
  document.getElementById("heading").innerText = "contact form";
  box2.classList.add("active")
  box1.classList.remove("active")
}

function validateform() {
  var name = document.myform.name.value;
  var number = document.myform.number.value;
  var x = document.myform.email.value;
  var atposition = x.indexOf("@");
  var dotposition = x.lastIndexOf(".");
  if (
    atposition < 1 ||
    dotposition < atposition + 2 ||
    dotposition + 2 >= x.length
  ) {
    alert(
      "Please enter a valid e-mail address \n atpostion:" +
        atposition +
        "\n dotposition:" +
        dotposition
    );
    return false;
  }
  if (name == null || name == "") {
    alert("Name can't be blank");
    return false;
  } else if (number == null || number == "") {
    alert("Number can't be blank");
    return false;
  }
}



// Career
var slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
      showSlides((slideIndex += n));
    }

    function currentSlide(n) {
      showSlides((slideIndex = n));
    }

    function showSlides(n) {
      var i;
      var slides = document.getElementsByClassName("mySlides");
      var dots = document.getElementsByClassName("dot");
      if (n > slides.length) {
        slideIndex = 1;
      }
      if (n < 1) {
        slideIndex = slides.length;
      }
      for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
      }
      for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
      }
      slides[slideIndex - 1].style.display = "block";
      dots[slideIndex - 1].className += " active";
    }