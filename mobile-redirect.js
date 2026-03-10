<script>
(function () {
  var isMobile = /Android|iPhone|iPad|iPod|Mobile|Opera Mini|IEMobile/i.test(navigator.userAgent);
  if (!isMobile) return;

  var path = window.location.pathname;
  var file = path.substring(path.lastIndexOf("/") + 1) || "index.html";

  var map = {
    "": "mobile_index.html",
    "index.html": "mobile_index.html",
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

  var target = map[file];
  if (!target) return;

  var currentUrl = new URL(window.location.href);
  var targetUrl = new URL(target, window.location.origin + window.location.pathname.replace(file, ""));
  targetUrl.hash = currentUrl.hash;
  targetUrl.search = currentUrl.search;

  if (file !== target) {
    window.location.replace(targetUrl.toString());
  }
})();
</script>
