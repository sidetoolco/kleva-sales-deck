/**
 * Lazy Image Loading with Fade-in Animation
 * Handles both <img> elements and elements with background images
 */
export function initLazyImages() {
  const lazyImages = document.querySelectorAll(".lazy-img");

  if (lazyImages.length === 0) {
    return;
  }

  lazyImages.forEach((element) => {
    element.style.opacity = "0";
    element.style.transition = "opacity 0.3s ease-in-out";
    if (element.tagName === "IMG") {
      handleImageElement(element);
    }
  });
}

function handleImageElement(imgElement) {
  if (imgElement.complete && imgElement.naturalHeight !== 0) {
    applyFadeIn(imgElement);
    return;
  }
  imgElement.addEventListener("load", () => {
    applyFadeIn(imgElement);
  });

  imgElement.addEventListener("error", () => {
    applyFadeIn(imgElement);
  });
}

function applyFadeIn(element) {
  element.classList.add("fade-in");
  element.style.opacity = "1";
  element.classList.remove("lazy-img");
}
