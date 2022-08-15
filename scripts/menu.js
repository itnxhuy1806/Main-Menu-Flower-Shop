function menuScript() {
  const menuDrawer = document.querySelector(".menu-drawer");
  const hamburger = document.querySelector(".hamburger-btn");
  const cancel = menuDrawer.querySelector(".cancel-btn");
  const bg = menuDrawer.querySelector(".bg");
  const subItems = menuDrawer.querySelectorAll("[sub]");
  const draweBody = menuDrawer.querySelector(".drawer-body");

  function removeActiveAll(query) {
    document.querySelectorAll(query).forEach((e) => {
      e.classList.remove("active");
    });
  }
  function showDrawer() {
    menuDrawer.classList.add("show");
  }
  function hiddenDrawer() {
    menuDrawer.classList.remove("show");
  }
  function showDrawerSub(sub) {
    draweBody.setAttribute("class", `drawer-body ${sub}`);
  }
  subItems.forEach((e) => {
    const sub = e.getAttribute("sub");
    if (sub) {
      e.onclick = () => {
        showDrawerSub(sub);
      };
    }
  });
  hamburger.onclick = showDrawer;
  cancel.onclick = hiddenDrawer;
  bg.onclick = hiddenDrawer;
}
window.onload = menuScript;
