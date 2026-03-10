(function () {
  var ua = navigator.userAgent || navigator.vendor || window.opera;
  var isMobile = /Android|iPhone|iPod|Mobile|webOS|BlackBerry|IEMobile|Opera Mini/i.test(ua);

  if (!isMobile) return;

  var path = window.location.pathname;
  var file = path.split("/").pop();

  if (!file || file === "index.html") {
    window.location.replace("mobile_index.html");
    return;
  }

  var map = {
    "models.html": "mobile_models.html",
    "services.html": "mobile_services.html",
    "fleet-finance.html": "mobile_fleet-finance.html",
    "contact.html": "mobile_contact.html",

    "g5s-4x2-cargo-cab-chassis.html": "mobile_g5s-4x2-cargo-cab-chassis.html",
    "g5s-6x4-cargo-cab-chassis.html": "mobile_g5s-6x4-cargo-cab-chassis.html",
    "g5s-8x4-cargo-cab-chassis.html": "mobile_g5s-8x4-cargo-cab-chassis.html",
    "g5s-8x4-mixer-cab-chassis.html": "mobile_g5s-8x4-mixer-cab-chassis.html",
    "g5s-6x4-tipper-cab-chassis.html": "mobile_g5s-6x4-tipper-cab-chassis.html",
    "g5s-8x4-tipper-cab-chassis.html": "mobile_g5s-8x4-tipper-cab-chassis.html",

    "g7s-6x4-prime-mover.html": "mobile_g7s-6x4-prime-mover.html",
    "g7s-6x4-tipper-cab-chassis.html": "mobile_g7s-6x4-tipper-cab-chassis.html",
    "g7s-8x4-tipper-cab-chassis.html": "mobile_g7s-8x4-tipper-cab-chassis.html",

    "c9h-6x4-prime-mover.html": "mobile_c9h-6x4-prime-mover.html"
  };

  if (map[file]) {
    window.location.replace(map[file]);
  }
})();
