const topNav = document.getElementById("topNav");
function openNav() {
  topNav.classList.toggle("navOpened");
}
const body = document.getElementsByTagName('body');
function darkMode() {
  body[0].classList.toggle('darkMode');
}

// let prevScrollpos = window.scrollY;
// window.onscroll = function() {topNavShrink()};
// function topNavShrink() {
//   let currentScrollPos = window.scrollY;
//     if (prevScrollpos > currentScrollPos) {
//       topNav.classList.remove("topNavShrink");
//     } else {
//       topNav.classList.add("topNavShrink");
//     }
//   prevScrollpos = currentScrollPos;
// }