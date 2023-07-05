// https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event
document.addEventListener("DOMContentLoaded", () => {
  console.log("kunstaushang JS imported successfully!");
});
document.addEventListener("DOMContentLoaded", function() {
  let slides = document.querySelectorAll(".slide");
  let currentSlide = 0;
  let slideInterval = setInterval(nextSlide, 3000); // Change slide every 3 seconds

  function showSlide(index) {
    slides[currentSlide].classList.remove("active");
    slides[index].classList.add("active");
    currentSlide = index;
  }

  function nextSlide() {
    let nextIndex = (currentSlide + 1) % slides.length;
    showSlide(nextIndex);
  }
});
