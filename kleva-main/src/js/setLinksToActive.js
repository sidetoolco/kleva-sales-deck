export function setLinkToActive() {
  const currentPath = window.location.pathname;
  const navigationLinks = document.querySelectorAll(".navigation__link");
  navigationLinks.forEach((link) => {
    if (link.dataset.path === currentPath) {
      link.classList.add("active");
    }
  });
}
