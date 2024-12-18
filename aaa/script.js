function toggleMenu() {
  console.log("Hamburger menu clicked"); // To check if this function is triggered  
  const navLinks = document.getElementById('nav-links');
  navLinks.classList.toggle('open');
}

