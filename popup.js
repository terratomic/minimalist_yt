const defaults = {
  comments: true,
  sidebar: true,
  shorts: true,
  recommendations: false,
};

const controls = [...document.querySelectorAll('[data-setting]')];
const status = document.querySelector('#status');

chrome.storage.sync.get(defaults, (settings) => {
  controls.forEach((control) => {
    control.checked = Boolean(settings[control.dataset.setting]);
    control.addEventListener('change', () => {
      chrome.storage.sync.set({ [control.dataset.setting]: control.checked });
      status.textContent = 'Saved · applies instantly';
      window.setTimeout(() => { status.textContent = 'Changes apply instantly'; }, 1400);
    });
  });
});
