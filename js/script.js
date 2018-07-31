// Custom JS

let mapContainer = document.querySelector(".main__map-container");
let buttonMap = document.querySelector(".button__map");
let buttonMapClose = document.querySelector(".button__map--close");

buttonMap.addEventListener("click", (e) => {
        mapContainer.style.right = 0;
        buttonMap.style.display = "none";
});

buttonMapClose.addEventListener("click", (e) => {
    mapContainer.style.right = "105%";
});