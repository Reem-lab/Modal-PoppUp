'use strict';
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

const btnsOpenModal = document.querySelectorAll('.show-modal');

const openPopUp = function () {
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');
}

const ClosePopUp = function () {
    modal.classList.add('hidden');
    overlay.classList.add('hidden');
}

for(let i = 0 ; i < btnsOpenModal.length ;i++)
  btnsOpenModal[i].addEventListener('click', openPopUp); 

  closeModal.addEventListener('click', ClosePopUp);
  overlay.addEventListener('click', ClosePopUp);



  document.addEventListener('keydown', function (e) {
         console.log(e.key);
         
         if(e.key === 'Escape' && !modal.classList.contains('hidden') ){
             ClosePopUp();
         }
  })