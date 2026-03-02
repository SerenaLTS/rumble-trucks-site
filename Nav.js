  document.addEventListener("DOMContentLoaded", () => {
    const openBtn = document.getElementById("openNavBtn");
    const closeBtn = document.getElementById("closeNavBtn");
    const overlay = document.getElementById("navOverlay");

    const openNav = () => document.body.classList.add("nav-open");
    const closeNav = () => document.body.classList.remove("nav-open");

    if (openBtn) openBtn.addEventListener("click", openNav);
    if (closeBtn) closeBtn.addEventListener("click", closeNav);
    if (overlay) overlay.addEventListener("click", closeNav);

    // ESC to close
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") closeNav();
    });

    // 点击抽屉里的链接后自动关闭（更像原生体验）
    document.querySelectorAll(".mobile-nav a").forEach(a => {
      a.addEventListener("click", closeNav);
    });
  });
