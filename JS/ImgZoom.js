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
          imgNo = image.getAttribute('id');
     });
});

modalWrapper.addEventListener('click', function() {
     if (this.classList.contains('show')) {
          this.classList.remove('show');
          mdImg.classList.remove('show');
          mdImg.src = '';
     }
});

window.addEventListener('keydown',
event => {
     let keys = event.key
     // alert(`${keys}`+'が押されました');
     if (modalWrapper.classList.contains('show')){
          if(keys === 'ArrowRight' && imgNo > 1){
               imgNo -= 1;
               mdImg.src = images[(imgNo-1)].getAttribute('data-src');
               // alert(imgNo);
          }
          if(keys === 'ArrowLeft' && imgNo < images.length){
               imgNo += 1;
               mdImg.src = images[(imgNo-1)].getAttribute('data-src');
               // alert(imgNo);
          }
          if(keys === 'Escape' || keys === ' '){
               modalWrapper.classList.remove('show');
                    mdImg.classList.remove('show');
          }
     }
});



