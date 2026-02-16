self.addEventListener('install', (event) => {
  console.log('Ready2Race App Installed');
});

self.addEventListener('fetch', (event) => {
  // This allows the app to load from cache in the future
  event.respondWith(fetch(event.request));
});
