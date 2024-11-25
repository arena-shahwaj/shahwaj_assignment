

document.addEventListener('DOMContentLoaded', () => {
   // type(); // Start typing effect

    // Scroll event for navbar background
    window.addEventListener('scroll', () => {
        const navbar = document.getElementById('navbar');
        if (window.scrollY > 150) {
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        }
    });
});


document.querySelectorAll('.slider').forEach(slider => {
  slider.addEventListener('input', function() {
    const label = this.nextElementSibling;
    label.textContent = `${this.value}%`;
  });
});


let scrollTimeout;

window.onscroll = function() {
    const navbar = document.getElementById('navbar');

    // Clear the previous timeout if there's any
    clearTimeout(scrollTimeout);

    // Set a new timeout to change the navbar's background after 1 second
    scrollTimeout = setTimeout(function() {
        if (window.pageYOffset > 150) {  
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        }
    }, 200);  // 200ms = 0.2 seconds (reducing delay for more responsiveness)
};


// Skill Progress Bars (Technical Skills)

document.addEventListener("DOMContentLoaded", () => {
  const progressbars = document.querySelectorAll(".percentagem");

  progressbars.forEach((bar) => {
    const width = bar.getAttribute("data-width"); // Retrieve the target width
    bar.style.setProperty("--target-width", width); // Set custom property for animation
  });
});




function toggleMenu() {
  const navLinks = document.getElementById("nav-links");
  navLinks.classList.toggle("show");
}
document.addEventListener('click', function(event){
    const navLinks = document.querySelectorAll("#nav-links li a");  // Select all anchor tags within the #nav-links
    const navLinks_container = document.getElementById("nav-links");

    // Check if the click occurred inside a nav link
    if (navLinks_container.contains(event.target)) {
        // If the click is on one of the nav links, remove the "show" class from the container
        navLinks_container.classList.remove("show");
    }
});





