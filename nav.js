document.addEventListener("DOMContentLoaded", () => {
  const openBtn  = document.getElementById("openNavBtn");
  const closeBtn = document.getElementById("closeNavBtn");
  const overlay  = document.getElementById("navOverlay");
  const drawer   = document.getElementById("mobileNav");

  if (!openBtn || !closeBtn || !overlay || !drawer) return;

  const openNav = () => {
    document.body.classList.add("nav-open");
    drawer.setAttribute("aria-hidden", "false");
    overlay.setAttribute("aria-hidden", "false");
    openBtn.setAttribute("aria-expanded", "true");
  };

  const closeNav = () => {
    document.body.classList.remove("nav-open");
    drawer.setAttribute("aria-hidden", "true");
    overlay.setAttribute("aria-hidden", "true");
    openBtn.setAttribute("aria-expanded", "false");
  };

  openBtn.addEventListener("click", (e) => {
    e.preventDefault();
    openNav();
  });

  closeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    closeNav();
  });

  overlay.addEventListener("click", closeNav);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeNav();
  });

  drawer.addEventListener("click", (e) => {
    const link = e.target.closest("a");
    if (link) closeNav();
  });
});
