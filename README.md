# Minimalist YouTube

A tiny Chrome extension for a calmer YouTube. It can hide comments, the watch-page side bar, Shorts, and video recommendations. Normal homepage videos remain visible.

## Install locally

1. Open `chrome://extensions` in Chrome.
2. Turn on **Developer mode**.
3. Choose **Load unpacked** and select this folder.
4. Open YouTube, then use the extension popup to choose what stays visible.

Settings are synced through Chrome storage and changes apply without refreshing the page.

## Notes

YouTube frequently changes its internal element names. The extension uses stable semantic selectors where possible, but a future YouTube redesign may require selector updates.
