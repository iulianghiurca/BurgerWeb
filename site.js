//Navbar
const menu = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");

menu.onclick = () => {
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  navbar.classList.remove("active");
};

//Darkmode
const darkMode = document.querySelector("#darkmode");
darkMode.onclick = () => {
  if (darkMode.classList.contains("fa-moon")) {
    darkMode.classList.replace("fa-moon", "fa-sun");
    document.body.classList.add("active");
  } else {
    darkMode.classList.replace("fa-sun", "fa-moon");
    document.body.classList.remove("active");
  }
};

//Scroll Reveal
const sr = ScrollReveal({
  origin: "top",
  distance: "40px",
  duration: "2000",
  reset: true,
});
sr.reveal(
  ".home-text, .home-img, .about-img, .about-text, .box, .s-box, .connect-text, .btn, .contact-box",
  { interval: 200 }
);
