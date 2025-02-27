function toggleMenu() {
    const menuWrapper = document.querySelector(".group");
    if (menuWrapper.getAttribute("data-state") === "active") {
      menuWrapper.setAttribute("data-state", "inactive");
    } else {
      menuWrapper.setAttribute("data-state", "active");
    }
  }