
function loadCoupon() {
  document.getElementById("coupon").style.visibility = "visible";
  document.getElementById("main").style.opacity = 0.7;
  // document.body.style.overflowY = "hidden";
}
function closeCoupon() {
  document.getElementById("coupon").style.visibility = "hidden";
  document.getElementById("main").style.opacity = 1;
  // document.body.style.overflowY = "scroll";
}
