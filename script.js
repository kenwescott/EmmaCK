// script.js
window.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    const splash = document.getElementById("splash-screen");
    splash.classList.add("fade-out");

    setTimeout(() => {
      splash.style.display = "none";
      document.getElementById("home-page").style.display = "block";
    }, 1000); // Wait for the fade-out transition to finish
  }, 6000); // Wait 3 seconds before fading out
});


  function scrollCards(direction) {
    const container = document.getElementById("cardSlider");
    const cardWidth = container.querySelector(".card").offsetWidth + 20; // card + gap
    container.scrollBy({
      left: direction * cardWidth,
      behavior: "smooth"
    });
  }

 
  document.addEventListener("DOMContentLoaded", function () {
    const myModal = new bootstrap.Modal(document.getElementById('welcomeModal'));
    myModal.show();
  });



