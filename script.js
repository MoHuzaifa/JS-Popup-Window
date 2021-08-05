"use strict";

//VARIABLES MADE TO HOLD HTML ELEMENTS//
const modal = document.querySelector(`.modal`);
const overlay = document.querySelector(`.overlay`);
const btnCloseModal = document.querySelector(`.close-modal`);
const btnOpenModal = document.querySelectorAll(`.show-modal`);

//FUNCTION TO CLOSE POP UP//
let closeModal = function () {
  modal.classList.add(`hidden`);
  overlay.classList.add(`hidden`);
};

//FUNCTION TO OPEN POP UP//
let openModal = function () {
  modal.classList.remove(`hidden`);
  overlay.classList.remove(`hidden`);
};

//EVENTLISTENER FOR THE THREE BUTTONS WITH SAME CLASS//
for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener(`click`, openModal);
}

//EVENTLISTENER FOR THE CLOSE POPUP BUTTON//
btnCloseModal.addEventListener(`click`, closeModal);

//EVENTLISTENER FOR CLICKING BACKGROUND//
overlay.addEventListener(`click`, closeModal);
