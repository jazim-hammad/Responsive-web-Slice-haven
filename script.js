let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides((slideIndex += n)); // Updates the slideIndex by adding n and calls showSlides() to display the updated slide
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides((slideIndex = n)); // Sets the slideIndex to n and calls showSlides() to display the slide with the new index
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides"); // Gets all elements with the class "mySlides"
  let dots = document.getElementsByClassName("dot"); // Gets all elements with the class "dot"
  if (n > slides.length) {
    slideIndex = 1; // If n is greater than the number of slides, set slideIndex to 1 (display the first slide)
  }
  if (n < 1) {
    slideIndex = slides.length; // If n is less than 1, set slideIndex to the number of slides (display the last slide)
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; // Hide all slides
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", ""); // Remove the "active" class from all dots
  }
  slides[slideIndex - 1].style.display = "block"; // Display the slide with the current slideIndex
  dots[slideIndex - 1].className += " active"; // Add the "active" class to the dot representing the current slide
}
