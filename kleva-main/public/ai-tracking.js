// AI Referrer Detection
(function () {
  const aiReferrers = ["chatgpt", "perplexity", "claude", "gemini", "copilot"];
  const referrer = document.referrer.toLowerCase();

  const isAIReferral = aiReferrers.some((ai) => referrer.includes(ai));

  if (isAIReferral) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "ai_referral",
      ai_source: referrer,
    });
  }

  // Prompt Landing Page Tracking
  const promptPages = {
    "/use-cases/spanish-debt-collection": "spanish_collections",
    "/use-cases/portuguese-debt-collection": "portuguese_collections",
    "/comparisons/kleva-vs-traditional": "vs_traditional",
  };

  const currentPath = window.location.pathname;
  const promptTag = promptPages[currentPath];

  if (promptTag) {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({
      event: "prompt_page_view",
      prompt_target: promptTag,
    });
  }
})();
