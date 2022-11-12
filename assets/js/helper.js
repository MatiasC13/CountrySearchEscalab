import { routes } from "./utils.js";

document.querySelector("#btnFilter").addEventListener("click", function (e) {
  location.hash = `${routes.home}_region/${e.target.innerText}`;
});

  document.querySelector("#txtCountry").addEventListener("keydown", (e) => {
    const searchName = e.target.value;

    if (searchName.length == 0) {
      location.hash = routes.home + "_all";
    } else {
      location.hash = `${routes.home}_name/${searchName.trim()}`;
    }

  });

export function preventNotFoundImage() {

  document.querySelectorAll("img").forEach((i) => {
    i.addEventListener("error", onErrorImage);
  });

}

 function onErrorImage(event) {
  event.target.src = "assets/img/noImg.png";
}
