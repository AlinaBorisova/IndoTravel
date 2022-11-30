import {loadStyle} from "./loadStyle.js";
import {sklonenie} from "./timer.js"; 
import {modalOpenSuccess} from "./reservation.js";
import {fetchRequest}  from "./reservation.js";

export const showModal = async () => {
  await loadStyle('css/modal.css');
  const reservationPrice = document.querySelector('.reservation__price');
  const chooseDate = document.querySelectorAll('.reservation__select')[0];
  const chooseCount = document.querySelectorAll('.reservation__select')[1];
  const reservationForm = document.querySelector('.reservation__form');
  const reservationName = document.querySelector('.reservation__input_name');
  const reservationPhone = document.querySelector('#reservation__phone');

  let human = sklonenie(chooseCount.value, ['человек', 'человека', 'человек']);;

  const overlay = document.createElement('div');
  overlay.classList.add('overlay_confirm', 'overlay');

  const modal = document.createElement('div');
  modal.classList.add('modal');

  const title = document.createElement('h2');
  title.classList.add('modal__title');
  title.textContent = 'Подтверждение заявки';

  const people = document.createElement('p');
  people.classList.add('modal__text');
  people.textContent = `Бронирование путешествия в Индию на ${chooseCount.value} ${human}`;

  const dates = document.createElement('p');
  dates.classList.add('modal__text');
  dates.textContent = `В даты: ${chooseDate.value}`;

  const price = document.createElement('p');
  price.classList.add('modal__text');
  price.textContent = `Стоимость тура ${reservationPrice.textContent}`;

  const buttonWrapper = document.createElement('div');
  buttonWrapper.classList.add('modal__button');
  const btnConfirm = document.createElement('button');
  btnConfirm.classList.add('modal__btn_confirm');
  btnConfirm.textContent = 'Подтверждаю';
  const btnEdit = document.createElement('button');
  btnEdit.classList.add('modal__btn_edit');
  btnEdit.textContent = 'Изменить данные';

  overlay.append(modal);
  modal.append(title, people, dates, price, buttonWrapper);
  buttonWrapper.append(btnConfirm, btnEdit);

  document.body.append(overlay);

  return new Promise(resolve =>{
    btnConfirm.addEventListener('click', () => {
      overlay.remove();
      resolve(true);
      const infoTour = document.querySelector('.reservation__data')
      infoTour.textContent = '';
      reservationPrice.textContent = '0 p.';
      fetchRequest('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: {
          title: 'Reservation',
          date: chooseDate.value,
          people: chooseCount.value,
          user: reservationName.value,
          phone: reservationPhone.value,
        },
        callback(err, data) {
          if (err) {
            console.warn(err, data)
            modalOpenError();
          } else {
            modalOpenSuccess();

            reservationForm.reset();
            chooseDate.setAttribute('disabled', true);
            chooseCount.setAttribute('disabled', true);
            reservationName.setAttribute('disabled', true);
            reservationPhone.setAttribute('disabled', true);
          }
        },
        headers: {
          'Content-Type': 'application/json'
        },
      });
    });
    
    btnEdit.addEventListener('click', () => {
      overlay.remove();
      resolve(false);
    });
  });
};
