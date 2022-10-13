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
