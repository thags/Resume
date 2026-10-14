const printButton = document.querySelector("#print-resume");
const earlierCareer = document.querySelector(".earlier-career");
let earlierCareerWasOpen = false;

window.addEventListener("beforeprint", () => {
  earlierCareerWasOpen = earlierCareer.open;
  earlierCareer.open = true;
});

window.addEventListener("afterprint", () => {
  earlierCareer.open = earlierCareerWasOpen;
});

printButton.addEventListener("click", () => window.print());
