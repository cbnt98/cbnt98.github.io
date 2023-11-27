'use strict';

// アコーディオン
document.addEventListener('DOMContentLoaded', function(){

  const accordionTitle = document.querySelectorAll('.bl_accordionTitle');

  for (let i = 0; i < accordionTitle.length; i++) {
    accordionTitle[i].addEventListener("click", function () {
      for (let j = 0; j < accordionTitle.length; j++) {
        if (accordionTitle[i] !== accordionTitle[j]) {
          accordionTitle[j].classList.remove("active");
          accordionTitle[j].nextElementSibling.classList.remove('open');
        }
      }
      this.classList.toggle('active');
      this.nextElementSibling.classList.toggle('open');
    });
  }
});