const hiddenFadeInLeft = document.querySelectorAll('.scrollFadeInLeftHidden');
const scrollFadeInLeft = new IntersectionObserver(ScrollFadeInLeftShow);
hiddenFadeInLeft.forEach((el) => scrollFadeInLeft.observe(el));

const hiddenFade = document.querySelectorAll('.scrollFadeHidden');
const scrollFade = new IntersectionObserver(ScrollFadeShow);
hiddenFade.forEach((el) => scrollFade.observe(el));

const skillBar = document.querySelectorAll('.skills');
const progressBar = new IntersectionObserver((entries) => {
   entries.forEach((entry) => {
    if (entry.isIntersecting){
      ProgressBarShow(entry.target);
      entry.target.classList.add('isRunning');
    }
   }); 
});
skillBar.forEach((el) => progressBar.observe(el));

function ScrollFadeShow(entries){
   entries.forEach((entry) => {
    if (entry.isIntersecting){
        entry.target.classList.add('scrollFadeShow');
    } else{
        entry.target.classList.remove('scrollFadeShow');
    }
   }); 
};
function ScrollFadeInLeftShow(entries){
   entries.forEach((entry) => {
    if (entry.isIntersecting){
        entry.target.classList.add('scrollFadeInLeftShow');
    } else{
        entry.target.classList.remove('scrollFadeInLeftShow');
    }
   }); 
};
function ProgressBarShow(progressBar) {
  const progressBarState = progressBar.classList.contains('isRunning');
  if (progressBarState == 0) {
    let progressBarTargetWidth = progressBar.innerHTML.slice(0, -1);
    let progressBarWidth = 1;
    let progressBarRunning = setInterval(ProgressBarFrame, 20);

    function ProgressBarFrame() {
      if (progressBarWidth >= progressBarTargetWidth) {
        clearInterval(progressBarRunning);
        progressBar.classList.remove('isRunning');
      } else {
        progressBarWidth++;
        progressBar.style.width = progressBarWidth + "%";
        progressBar.innerHTML = progressBarWidth + "%";
      }
    }
  }
};
