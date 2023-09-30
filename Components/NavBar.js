const topNav = document.getElementById("topNav");
function openNav() {
  topNav.classList.toggle("navOpened");
}
const body = document.getElementsByTagName('body');
function darkMode() {
  body[0].classList.toggle('darkMode');
}