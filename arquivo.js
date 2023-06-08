window.addEventListener("DOMContentLoaded", function(event) {
  var text = document.querySelector("h1");
  text.classList.add("animated");
});


window.addEventListener("DOMContentLoaded", function(event) {
  const arrowLink = document.querySelector(".arrow-link");
  
  arrowLink.addEventListener("click", function(event) {
    event.preventDefault();
    const contentSection = document.getElementById("content");
    const contentOffset = contentSection.offsetTop;
  
    window.scrollTo({
      top: contentOffset,
      behavior: "smooth"
    });
  });
});


const navbar = document.getElementById('navbar');
const toggleButton = document.querySelector('header span');

toggleButton.addEventListener('click', function() {
  navbar.classList.toggle('active');
});