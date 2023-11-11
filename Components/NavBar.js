const topNav = document.getElementById("topNav");
function openNav() {
  topNav.classList.toggle("navOpened");
}

function darkMode() {
  let theme = sessionStorage.getItem("theme");
  if(theme=='dark'){
    sessionStorage.setItem("theme",'light');
    document.documentElement.setAttribute('data-theme','light');
  }else{
    sessionStorage.setItem("theme",'dark');
    document.documentElement.setAttribute('data-theme','dark');
  }
}

// const body = document.getElementsByTagName('body');
// if(getCookie('darkMode')=='true'){
//   body[0].classList.add('darkMode');
// }
// function darkMode() {
//   let cookie = getCookie('darkMode');
//   if(cookie=='false' || cookie==''){
//     setCookie('darkMode',true,1);
//     body[0].classList.add('darkMode');
//   }else{
//     setCookie('darkMode',false,1);
//     body[0].classList.remove('darkMode');
//   }
// }
// function setCookie(name,value,exhours) {
//   const exTime = new Date();
//   exTime.setTime(exTime.getTime() + (exhours*60*60*1000));
//   let expires = "expires=" + exTime.toUTCString();
//   document.cookie = name + "=" + value + ";" + expires + ";path=/";
// }
// function getCookie(cookieName) {
//   let name = cookieName + "=";
//   let decodedCookie = decodeURIComponent(document.cookie);
//   let ca = decodedCookie.split(';');
//   for(let i = 0; i < ca.length; i++) {
//     let c = ca[i];
//     while (c.charAt(0) == ' ') {
//       c = c.substring(1);
//     }
//     if (c.indexOf(name) == 0) {
//       return c.substring(name.length, c.length);
//     }
//   }
//   return "";
// }
// function darkMode() {
//   body[0].classList.toggle('darkMode');
// }

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