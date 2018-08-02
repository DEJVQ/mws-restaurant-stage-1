// Custom JS
window.onload = () => {
    // Variables
    let mapContainer = document.querySelector(".main__map-container");
    let buttonMap = document.querySelector(".button__map");
    let buttonMapClose = document.querySelector(".button__map--close");

    var leafletImages = document.querySelectorAll(".leaflet-interactive");
    var leafletZoomIn = document.querySelector(".leaflet-control-zoom-in");
    var leafletZoomOut = document.querySelector(".leaflet-control-zoom-out");
    
    if (buttonMap) {
        // Button to map Open
        buttonMap.addEventListener("click", (e) => {
                mapContainer.style.right = 0;
                buttonMap.style.display = "none";
        //    console.log(leafletImages);
        });

        buttonMapClose.addEventListener("click", (e) => {
            mapContainer.style.right = "105%";

        });
    }
    
    console.log(leafletZoomIn);

    // ARIA
    if (leafletImages) {
        leafletImages.forEach((marker) => {
            marker.setAttribute('aria-hidden', 'true');
            marker.removeAttribute("tabIndex");
        });
        
        leafletZoomIn.removeAttribute("tabIndex");
        leafletZoomOut.removeAttribute("tabIndex");
    }

}