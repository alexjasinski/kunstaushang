
function startMap() {
  const ironhackBCN = {
  	lat: 41.3977381,
  	lng: 2.190471916};
  const map = new google.maps.Map(
    document.getElementById('map'),
    {
      zoom: 5,
      center: ironhackBCN
    }
  );
 
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function (position) {
    const user_location = {
      lat: ironhackBCN.lat,
      lng: ironhackBCN.lng
    };

    // Center map with user location
    map.setCenter(user_location);

    // Add a marker for your user location
    const ironhackBCNMarker = new google.maps.Marker({
      position: {
        lat: user_location.lat,
        lng: user_location.lng
      },
      map: map,
      title: "You are here."
    });

  }, function () {
    console.log('Error in the geolocation service.');
  });
} else {
  console.log('Browser does not support geolocation.');
}
}



startMap();

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
