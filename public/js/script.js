// https://developer.mozilla.org/en-US/docs/Web/API/Window/DOMContentLoaded_event
document.addEventListener("DOMContentLoaded", () => {
  console.log("kunstaushang JS imported successfully!");
});
document.addEventListener("DOMContentLoaded", function () {
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
  const sidebar = document.getElementById("sidebar");
  const content = document.querySelector(".content");

  function toggleSidebar() {
    sidebar.classList.toggle("show-sidebar");
    if (sidebar.classList.contains("show-sidebar")) {
      content.style.marginLeft = "200px"; // Adjust based on sidebar width
    } else {
      content.style.marginLeft = "0";
    }
  }

  window.addEventListener("scroll", function () {
    if (window.scrollY > 2000) {
      // Adjust the scroll position threshold as needed
      sidebar.style.left = "0";
    } else {
      sidebar.style.left = "-200px";
    }
  });
});
