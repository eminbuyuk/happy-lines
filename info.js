if (window.HappyAndroid) {
  document.querySelectorAll('a[href^="https://"]').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      window.HappyAndroid.openTrustedLink(link.href);
    });
  });
  document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      window.HappyAndroid.openFeedback('emin.buyuk@gmail.com', 'Happy Lines · Destek', '');
    });
  });
}

// a close button in the corner takes the reader back to where the page was opened from
{
  const close = document.createElement('a');
  close.className = 'info-close';
  close.href = './index.html';
  close.setAttribute('aria-label', document.documentElement.lang === 'en' ? 'Close' : 'Kapat');
  close.innerHTML = '<img src="./assets/ui/close-v1.png" alt="">';
  close.addEventListener('click', event => {
    if (history.length > 1 && document.referrer) { event.preventDefault(); history.back(); }
  });
  document.body.prepend(close);
}
