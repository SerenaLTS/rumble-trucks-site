// nav.js
(() => {
  const openBtn = document.getElementById("openNavBtn");
  const closeBtn = document.getElementById("closeNavBtn");
  const overlay = document.getElementById("navOverlay");
  const mobileNav = document.getElementById("mobileNav");

  if (!openBtn || !overlay || !mobileNav) return;

  const setExpanded = (isOpen) => {
    openBtn.setAttribute("aria-expanded", String(isOpen));
    mobileNav.setAttribute("aria-hidden", String(!isOpen));
    overlay.setAttribute("aria-hidden", String(!isOpen));
  };

  const openNav = () => {
    document.body.classList.add("nav-open");
    setExpanded(true);
  };

  const closeNav = () => {
    document.body.classList.remove("nav-open");
    setExpanded(false);
  };

  const toggleNav = () => {
    const isOpen = document.body.classList.contains("nav-open");
    if (isOpen) closeNav();
    else openNav();
  };

  // ✅ 点击汉堡按钮：开/关 toggle
  openBtn.addEventListener("click", (e) => {
    e.preventDefault();
    toggleNav();
  });

  // ✅ 右上角 X 关闭
  if (closeBtn) {
    closeBtn.addEventListener("click", (e) => {
      e.preventDefault();
      closeNav();
    });
  }

  // ✅ 点击遮罩关闭
  overlay.addEventListener("click", () => closeNav());

  // ✅ ESC 关闭（桌面调试也舒服）
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeNav();
  });

  // ✅ 点菜单里的链接后自动收回（体验更好）
  mobileNav.addEventListener("click", (e) => {
    const a = e.target.closest("a");
    if (a) closeNav();
  });

  // 初始状态同步
  setExpanded(false);
})();
