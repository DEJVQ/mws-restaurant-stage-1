// Custom JS

let mapContainer = document.querySelector(".main__map-container");
let buttonMap = document.querySelector(".button__map")

buttonMap.addEventListener("click", (e) => {
    console.log(mapContainer.style.right);
    
    if (mapContainer.style.right = "100%") {
        console.log("dsadsadsa12");
         mapContainer.style.right = 0;
    }
    else {
        alert("dasdsa");
        mapContainer.style.right = "100px"
    }
    
    if()
});