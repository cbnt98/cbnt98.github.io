const modalWrapper = document.querySelector('.modal-wrapper');
const images = document.querySelectorAll('.contentImg');
const mdImg = document.querySelector('.modal-image');
var imgNo = 0;

images.forEach(function(image) {
     image.addEventListener('click', function() {
          modalWrapper.classList.add('show');
          mdImg.classList.add('show');

          var imageSrc = image.getAttribute('data-src');
          mdImg.src = imageSrc;

     });
});

modalWrapper.addEventListener('click', function() {
     if (this.classList.contains('show')) {
          this.classList.remove('show');
          mdImg.classList.remove('show');
     }
});

window.addEventListener('keydown',
event => {
     let keys = event.key
     // alert(`${keys}`+'が押されました');
       if(keys === 'ArrowRight'){
          // alert(`${keys}`+'が押されました');
        }
        if(keys === 'ArrowLeft'){
          // alert(`${keys}`+'が押されました');
        }
        if(keys === 'Escape' || keys === ' '){
          // alert(`${keys}`+'が押されました');
          if (modalWrapper.classList.contains('show')) {
               modalWrapper.classList.remove('show');
               mdImg.classList.remove('show');
          }
        }
});



