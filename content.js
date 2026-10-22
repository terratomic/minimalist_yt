const defaults = {
  comments: true,
  sidebar: true,
  shorts: true,
  recommendations: false,
};

function applySettings(settings) {
  const root = document.documentElement;
  root.classList.toggle('minimalist-hide-comments', settings.comments);
  root.classList.toggle('minimalist-hide-sidebar', settings.sidebar);
  root.classList.toggle('minimalist-hide-shorts', settings.shorts);
  root.classList.toggle('minimalist-hide-recommendations', settings.recommendations);
}

chrome.storage.sync.get(defaults, applySettings);
chrome.storage.onChanged.addListener((changes, area) => {
  if (area !== 'sync') return;
  chrome.storage.sync.get(defaults, applySettings);
});
