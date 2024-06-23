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
