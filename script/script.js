// Coupon Popup

function loadCoupon() {
  if (window.matchMedia("(max-width: 896px)").matches) {
    document.getElementById("coupon-container").style.visibility = "hidden";
    document.body.style.overflow = "scroll";
  } else {
    document.getElementById("coupon-container").style.visibility = "visible";
    document.body.style.overflow = "hidden";
  }
}
function closeCoupon() {
  document.getElementById("coupon-container").style.visibility = "hidden";
  document.body.style.overflow = "scroll";
}

// Darkmode
function changeMode() {
  let darkBody = document.body;
  darkBody.classList.toggle("dark-body");

  let darkAD = document.getElementById("appAd");
  darkAD.classList.toggle("dark-body");
  let darkPromise = document.getElementById("promise");
  darkPromise.classList.toggle("dark-body");

  let darkAwards = document.getElementById("awards");
  darkAwards.classList.toggle("dark-body");

  let darkFlags = document.getElementById("flags");
  darkFlags.classList.toggle("dark-body");

  let darkNumbers = document.getElementById("number");
  darkNumbers.classList.toggle("dark-body");

  let darkBus = document.getElementById("buses");
  darkBus.classList.toggle("dark-body");
}

//weather
let y = document.getElementById("weatherOut");
function geolocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    x.innerText = "Geo Not Supported";
  }
}

function showPosition(data) {
  console.log(data);
  let lat = data.coords.latitude;
  let long = data.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/forecast/daily?lat=${lat}&lon=${long}&mode=json&units=metric&cnt=5&appid=fbf712a5a83d7305c3cda4ca8fe7ef29`;
  //api calling
  fetch(url, { method: "GET" })
    // return promise
    .then((res) => res.json())
    // resolve promise
    .then((data) => {
      console.log(data);
      let cityName = data.city.name;
      let temp = data.list[0].temp.day;
      y.innerText = ` ${cityName}  ${temp} °C`;
    })
    .catch((err) => {
      console.log(err);
    });
}
geolocation();
