export function detectLocale() {
  if (
    window.location.pathname.includes("blog") ||
    window.location.pathname.includes("sanity") ||
    window.location.pathname.includes("post") ||
    window.location.pathname.includes("comparisons") ||
    window.location.pathname.includes("use-cases")
  )
    return;

  const supportedLocales = ["en", "es"];
  const defaultLocale = "en";

  // Get the first segment of the path
  const pathParts = window.location.pathname.split("/").filter(Boolean);
  const firstSegment = pathParts[0];

  // 1. Check if user already chose a language
  const saved = localStorage.getItem("preferredLang");
  if (saved && supportedLocales.includes(saved)) {
    // If the path already has a locale prefix
    if (supportedLocales.includes(firstSegment)) {
      // If it's the wrong locale, replace it
      if (firstSegment !== saved) {
        pathParts[0] = saved;
        window.location.pathname = `/${pathParts.join("/")}`;
      }
      // If it's the correct locale, do nothing
      return;
    }

    // If no locale in path, add the saved preference
    if (!window.location.pathname.startsWith(`/${saved}`)) {
      window.location.pathname = `/${saved}${window.location.pathname}`;
    }
    return;
  }

  // 2. Otherwise, use browser language
  const browserLang = navigator.language?.slice(0, 2).toLowerCase();
  const lang = supportedLocales.includes(browserLang)
    ? browserLang
    : defaultLocale;

  // 3. Redirect if needed
  // If path already has a locale, replace it with browser lang
  if (supportedLocales.includes(firstSegment)) {
    if (firstSegment !== lang) {
      pathParts[0] = lang;
      window.location.pathname = `/${pathParts.join("/")}`;
    }
    return;
  }

  // If no locale in path, add browser language
  if (!window.location.pathname.startsWith(`/${lang}`)) {
    window.location.pathname = `/${lang}${window.location.pathname}`;
  }
}
