// Fuente: https://www.w3schools.com/html/html5_geolocation.asp

const info = document.getElementById("info");

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        info.innerHTML = "Geolocation is not supported by this browser.";
    }
}

// Callback que recibe como parámetro la posición obtenida
function showPosition(position) {
    const latSpan = document.getElementById("lat-span");
    const lonSpan = document.getElementById("lon-span");
    latSpan.innerHTML = position.coords.latitude;
    lonSpan.innerHTML = position.coords.longitude;
    
    info.innerHTML = "Geolocation updated";
}

// Callback que recibe información sobre el error, si ocurre
function showError(error) {
    switch(error.code) {
      case error.PERMISSION_DENIED:
        info.innerHTML = "User denied the request for Geolocation."
        break;
      case error.POSITION_UNAVAILABLE:
        info.innerHTML = "Location information is unavailable."
        break;
      case error.TIMEOUT:
        info.innerHTML = "The request to get user location timed out."
        break;
      case error.UNKNOWN_ERROR:
        info.innerHTML = "An unknown error occurred."
        break;
    }
  }