function showNotification(msg, isError = false) {
  const n = document.getElementById('notification');
  n.textContent = msg;
  n.style.background = isError ? '#c0392b' : '#333';
  n.style.display = 'block';
  setTimeout(() => {
    n.style.display = 'none';
  }, 1500);
}

document.querySelectorAll('#keyboard button').forEach(btn => {
  btn.addEventListener('click', () => {
    navigator.clipboard.writeText(btn.textContent)
      .then(() => showNotification('コピーしました'))
      .catch(() => showNotification('コピーできませんでした', true));
  });
});

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js')
    .then(() => console.log('Service Worker registered'))
    .catch(err => console.error('SW registration failed:', err));
}