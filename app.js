(function () {
  var fullImg = document.querySelector('.full-image');
  var lqipImg = document.querySelector('.lqip-image');
  if (!fullImg) return;

  function showFullImage() {
    requestAnimationFrame(function () {
      fullImg.classList.add('loaded');
      if (lqipImg) {
        setTimeout(function () {
          lqipImg.classList.add('hidden');
        }, 400);
      }
    });
  }

  if (fullImg.complete && fullImg.naturalWidth > 0) {
    showFullImage();
  } else {
    fullImg.addEventListener('load', showFullImage);
    fullImg.addEventListener('error', showFullImage);
  }
})();
