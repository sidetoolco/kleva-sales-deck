export function initScrollToButtons() {
  const scrollButtons = document.querySelectorAll(".scroll-to");

  scrollButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();

      const targetSelector = button.getAttribute("data-scroll");

      if (targetSelector) {
        const targetElement = document.querySelector(targetSelector);

        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        } else {
          console.warn(`Target element not found: ${targetSelector}`);
        }
      } else {
        console.warn(
          "Button with scroll-to class is missing data-scroll attribute"
        );
      }
    });
  });
}
