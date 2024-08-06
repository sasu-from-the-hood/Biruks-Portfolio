// About Me section starts
const tabTitle = document.querySelector(".tab-titles");
const tabLink = document.querySelectorAll(".tab-links");
const tabContent = document.querySelectorAll(".tab-contents");

tabTitle.addEventListener("click", function (e) {
  const clicked = e.target;
  if (clicked.classList.contains("tab-links")) {
    tabLink.forEach((t) => t.classList.remove("active-link"));
    clicked.classList.add("active-link");
    tabContent.forEach((t) => t.classList.remove("active-tab"));

    document
      .querySelector(`.tab-contents-${clicked.dataset.tab}`)
      .classList.add("active-tab");
  }
});
// About Me section ends

// The sidebar section starts
let sidemenu = document.getElementById("sidemenu");

function openMenu() {
  sidemenu.style.right = "0";
  document.body.style.overflow = "hidden";
}
function closeMenu() {
  sidemenu.style.right = "-100%";
  document.body.style.overflow = "scroll";
}

const openMenuIcon = document.querySelector(".open-menu-icon");
const closeMenuIcon = document.querySelector(".close-menu-icon");
const navBar = document.querySelectorAll(".js-nav-bar");
openMenuIcon.addEventListener("click", openMenu);
closeMenuIcon.addEventListener("click", closeMenu);

navBar.forEach((element) => {
  element.addEventListener("click", closeMenu);
});
// The sidebar section ends

// Contact Section starts

const scriptURL =
  "https://script.google.com/macros/s/AKfycbydwZ-Dpu1-lX4lCkEmTNgJUGS438s9j2bXBkV47j_rSLbdNNdwf1HyscdZ6neNPfGs/exec";
const form = document.forms["submit-to-google-sheet"];
const msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(scriptURL, { method: "POST", body: new FormData(form) })
    .then((response) => {
      msg.innerHTML = "Message sent successfully";
      setTimeout(function () {
        msg.innerHTML = "";
      }, 5000);
      form.reset();
    })
    .catch((error) => console.error("Error!", error.message));
});
// Contact Section ends

// Dark and Light mode start
const headerText = document.querySelector(".header-text");
const icon = document.getElementById("icon");
const profile = document.getElementById("profile-of-sasu");
const logo = document.querySelector(".logo");

icon.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    headerText.classList.add("header-text-dark");
    icon.src = "sun.png";
    // profile.src = "black-anime-uchiha-sasuke-.jpg";
    logo.src = "logo.jpg";
  } else {
    headerText.classList.remove("header-text-dark");
    icon.src = "moon.png";
    // profile.src = "zazake.jpg";
    logo.src = "logo2.png";
  }
});

// Dark and Light mode start
