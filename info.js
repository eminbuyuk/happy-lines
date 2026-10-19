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
