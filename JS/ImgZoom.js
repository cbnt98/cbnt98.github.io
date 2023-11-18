const modalWrapper = document.querySelector('.modal-wrapper');
const images = document.querySelectorAll('.contentImg');
const mdImg = document.querySelector('.modal-image');

images.forEach(function(image) {
     image.addEventListener('click', function() {
          modalWrapper.classList.add('show');
          mdImg.classList.add('show');

          var imageSrc = image.getAttribute('src');
          mdImg.src = imageSrc;
     });
});

modalWrapper.addEventListener('click', function() {
     if (this.classList.contains('show')) {
          this.classList.remove('show');
          mdImg.classList.remove('show');
     }
});