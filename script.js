function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

function toggleProjectDetails(projectId) {
  const projectDetails = document.getElementById(projectId);
  if (projectDetails.style.display === "none" || projectDetails.style.display === "") {
    projectDetails.style.display = "flex";
  } else {
    projectDetails.style.display = "none";
  }
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

function typeWriter(elementId, text, speed = 100) {
  let i = 0;
  const element = document.getElementById(elementId);
  element.innerHTML = '';
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

function animateSections() {
  const sections = document.querySelectorAll('section');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
      }
    });
  }, { threshold: 0.1 });

  sections.forEach(section => {
    observer.observe(section);
  });
}

window.onload = function() {
  typeWriter('name-title', 'Mohamed Elsayed');
  animateSections();
};
// Function to toggle project details
function toggleProjectDetails(projectId) {
  const projectDetails = document.getElementById(projectId);
  projectDetails.classList.toggle('show');
}

// Function to animate project containers on scroll
function animateProjectsOnScroll() {
  const projectContainers = document.querySelectorAll('.details-container');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, { threshold: 0.1 });

  projectContainers.forEach(container => {
    container.style.opacity = 0;
    container.style.transform = 'translateY(20px)';
    observer.observe(container);
  });
}

// Call the animation function when the page loads
window.addEventListener('load', animateProjectsOnScroll);