import { initLazyImages } from "./lazyImages";
import { setLinkToActive } from "./setLinksToActive";
import { initScrollToButtons } from "./scrollToButtons";
import { detectLocale } from "./detectLocale";

document.addEventListener("DOMContentLoaded", () => {
  console.log(`
    Hello there!👋
    This site was built by Rodrigo G. Wilkens 🚀
    From sidetool.co
    `);

  detectLocale();
  initLazyImages();
  setLinkToActive();
  initScrollToButtons();
});
