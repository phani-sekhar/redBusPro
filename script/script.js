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
