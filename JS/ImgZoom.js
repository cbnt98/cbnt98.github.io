const modalWrapper = document.querySelector('.modal-wrapper');
const images = document.querySelectorAll('.contentImg');
// const mdImg = document.querySelector('.modal-image');

const mdText = document.querySelector('.modal-text');
const mdComment = document.querySelector('.modal-comment');
const mdNext = document.querySelector('.modal-next');
const mdBack = document.querySelector('.modal-back');

var imgNo = Number(0);

for(let i = 1; i <= images.length; i++){
     var mdImg = document.createElement('Img');
     mdImg.setAttribute('class','modal-image');
     mdImg.setAttribute('id',i);
     mdImg.setAttribute('src',images[i-1].getAttribute('data-src'))
     modalWrapper.appendChild(mdImg);
}

images.forEach(function(image) {
     image.addEventListener('click', function() {
          modalWrapper.classList.add('show');
          var mdImg = document.getElementById(image.getAttribute('id'));
          mdImg.classList.add('show');
          mdText.classList.add('show');

          // var imageSrc = image.getAttribute('data-src');
          // mdImg.src = imageSrc;
          imgNo = Number(image.getAttribute('id'));

          mdComment.textContent = imgNo+'/'+images.length
     });
});

modalWrapper.addEventListener('click', function() {
     if (this.classList.contains('show')) {
          this.classList.remove('show');

          var mdImg = document.getElementById(imgNo);

          mdImg.classList.remove('show');
          mdText.classList.remove('show');

          // mdImg.src = '';
     }
});

mdBack.addEventListener('click' ,function() {
     if (imgNo > 1) {
          var mdImg = document.getElementById(imgNo);
          mdImg.classList.remove('show');
          imgNo -= 1;
          var mdImgBack = document.getElementById(imgNo);
          mdImgBack.classList.add('show');

          // mdImg.src = images[(imgNo-1)].getAttribute('data-src');
          mdComment.textContent = imgNo+'/'+images.length;
          // mdImg.classList.add('show');
          // mdImg.style.zIndex = Number(mdImg.style.zIndex)+1;
          // alert(Number(mdImg.style.zIndex));
     }
})
mdNext.addEventListener('click' ,function() {
     if(imgNo < images.length){
          var mdImg = document.getElementById(imgNo);
          mdImg.classList.remove('show');
          imgNo = (imgNo + 1);
          var mdImgNext = document.getElementById(imgNo);
          mdImgNext.classList.add('show');
          // mdImg.src = images[(imgNo-1)].getAttribute('data-src');
          mdComment.textContent = imgNo+'/'+images.length
          // mdImg.classList.add('show');
          // mdImg.style.zIndex = Number(mdImg.style.zIndex)+1;
          // alert(Number(mdImg.style.zIndex));
     }
})


window.addEventListener('keydown',
event => {
     let keys = event.key
     // alert(`${keys}`+'が押されました');
     if (modalWrapper.classList.contains('show')){
          if(keys === 'ArrowRight' && imgNo > 1){
               var mdImg = document.getElementById(imgNo);
               mdImg.classList.remove('show');
               imgNo -= 1;
               var mdImgBack = document.getElementById(imgNo);
               mdImgBack.classList.add('show');

               mdComment.textContent = imgNo+'/'+images.length
               // alert(imgNo);
          }
          if(keys === 'ArrowLeft' && imgNo < images.length){
               var mdImg = document.getElementById(imgNo);
               mdImg.classList.remove('show');
               imgNo = (imgNo + 1);
               var mdImgNext = document.getElementById(imgNo);
               mdImgNext.classList.add('show');

               mdComment.textContent = imgNo+'/'+images.length

          }
          if(keys === 'Escape' || keys === ' '){
               modalWrapper.classList.remove('show');
               var mdImg = document.getElementById(imgNo);
               mdImg.classList.remove('show');
          }
     }
});