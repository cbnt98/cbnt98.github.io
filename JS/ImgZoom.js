const modalWrapper = document.querySelector('.modal-wrapper');
const images = document.querySelectorAll('.contentImg');
const mdImg = document.querySelector('.modal-image');

const mdText = document.querySelector('.modal-text');
const mdComment = document.querySelector('.modal-comment');
const mdNext = document.querySelector('.modal-next');
const mdBack = document.querySelector('.modal-back');

var imgNo = Number(0);

images.forEach(function(image) {
     image.addEventListener('click', function() {
          modalWrapper.classList.add('show');
          mdImg.classList.add('show');
          mdText.classList.add('show');

          var imageSrc = image.getAttribute('data-src');
          mdImg.src = imageSrc;
          imgNo = Number(image.getAttribute('id'));

          mdComment.textContent = imgNo+'/'+images.length
     });
});

modalWrapper.addEventListener('click', function() {
     if (this.classList.contains('show')) {
          this.classList.remove('show');
          mdImg.classList.remove('show');
          mdText.classList.remove('show');

          mdImg.src = '';
     }
});

mdBack.addEventListener('click' ,function() {
     if (imgNo > 1) {
          imgNo -= 1;
          mdImg.src = images[(imgNo-1)].getAttribute('data-src');
          mdComment.textContent = imgNo+'/'+images.length;
     }
})
mdNext.addEventListener('click' ,function() {
     if(imgNo < images.length){
          imgNo = (imgNo + 1);
          mdImg.src = images[(imgNo-1)].getAttribute('data-src');
          mdComment.textContent = imgNo+'/'+images.length
     }
})


window.addEventListener('keydown',
event => {
     let keys = event.key
     // alert(`${keys}`+'が押されました');
     if (modalWrapper.classList.contains('show')){
          if(keys === 'ArrowRight' && imgNo > 1){
               imgNo -= 1;
               mdImg.src = images[(imgNo-1)].getAttribute('data-src');
               mdComment.textContent = imgNo+'/'+images.length
               // alert(imgNo);
          }
          if(keys === 'ArrowLeft' && imgNo < images.length){
               imgNo = (imgNo + 1);
               // alert(imgNo);
               mdImg.src = images[(imgNo-1)].getAttribute('data-src');
               mdComment.textContent = imgNo+'/'+images.length
          }
          if(keys === 'Escape' || keys === ' '){
               modalWrapper.classList.remove('show');
                    mdImg.classList.remove('show');
          }
     }
});