import {createModalSuccess} from "./createElements.js";
import {createModalError} from "./createElements.js";

export const URL = 'date.json';  

export const httpRequest = (URL, {
  method = 'GET',
  callback,
  body = {},
  headers,
}) => {
  try { 
    const xhr = new XMLHttpRequest();
    xhr.open(method, URL);

    if (headers) {
      for (const [key, value] of Object.entries(headers)) {
        xhr.setRequestHeader(key, value)
      };
    };

    xhr.addEventListener('load', () => {
      if (xhr.status < 200 || xhr.status > 400) {
        callback(new Error(xhr.status), xhr.response)
        return;
      };

      const data = JSON.parse(xhr.response);
      if (callback) callback(null, data);
    });

    xhr.addEventListener('error', () => {
      callback(new Error(xhr.status), xhr.response)
    });

    xhr.send(JSON.stringify(body));
  } catch (err) {
    callback(new Error(err));
  };
};
  
export const renderDatesTour = (err, data) => {
  if (err) {
    console.warn(err, data)
    console.log('сюда модальное с ошибкой');
    return;
  };

  const dateTour = document.querySelectorAll('.tour__select')[0];
  const peopleTour = document.querySelectorAll('.tour__select')[1];
  const dateReservation = document.querySelectorAll('.reservation__select')[0];
  const peopleReservation = document.querySelectorAll('.reservation__select')[1];
  let htmlDateTour = '<option> Выбери дату </option>';
  let htmlDateReservation = '<option> Дата путешествия </option>';

  const peopleCount = (index) => {
    let minPeople = data[index - 1]['min-people'];
    let maxPeople = data[index - 1]['max-people'];
    let arrPeople = [minPeople];

    for (let i = 0; i < maxPeople; i++) {
      if (minPeople < maxPeople) {
        minPeople++
        arrPeople.push(minPeople)
      };
    };
    return arrPeople;
  };

  data.map((item, i) => {
    htmlDateTour += `
      <option value="${item.date}" class="tour__option" data-date="${i}">
      ${item.date}
      </option> 
    `;
    htmlDateReservation += `
      <option value="${item.date}" class="tour__option" data-date="${i}">
      ${item.date}
      </option> 
    `;
  });

  dateTour.addEventListener('input', function(e) {
    let htmlPeopleTour = '<option> Количество человек </option>';
    const target = e.target;
    const indexOption = target.options.selectedIndex;
    const human = peopleCount(indexOption);    
    human.forEach(item => {
      htmlPeopleTour += `
        <option value="${item}" class="tour__option" data-date="${item}">
        ${item}
        </option> 
      `;
    });
    peopleTour.innerHTML = htmlPeopleTour;
  });

  dateReservation.addEventListener('input', function(e) {
    let htmlPeopleReservation = '<option> Количество человек </option>';

    const target = e.target;
    const indexOption = target.options.selectedIndex;
    const human = peopleCount(indexOption);    
    human.forEach(item => {
      htmlPeopleReservation += `
        <option value="${item}" class="tour__option" data-date="${item}">
        ${item}
        </option> 
      `;
    });
    peopleReservation.innerHTML = htmlPeopleReservation;
  });

  peopleReservation.addEventListener('input', function(e) {
    const targetPeople = e.target;
    const indexOptionPeople = dateReservation.options.selectedIndex;
    const infoTour = document.querySelector('.reservation__data')
    const price = document.querySelector('.reservation__price');
    infoTour.textContent = `${dateReservation.value}, ${targetPeople.value} человек`;
    
    data.forEach((item, i) => {
      if(indexOptionPeople === (i + 1)) {
        price.textContent = `${targetPeople.value * item['price']} р.`;
      }
    });
  });

  dateTour.innerHTML = htmlDateTour;
  dateReservation.innerHTML = htmlDateReservation;
};

export const sendForm = function() {
  const reservationForm = document.querySelector('.reservation__form');
  const chooseDate = document.querySelectorAll('.reservation__select')[0];
  const chooseCount = document.querySelectorAll('.reservation__select')[1];
  const reservationName = document.querySelector('.reservation__input_name');
  const reservationPhone = document.querySelector('#reservation__phone');
  const footerInputWrap = document.querySelector('.footer__input-wrap');
  const footerInput = document.querySelector('.footer__input');
  const footerForm = document.querySelector('.footer__form');
  const footerTitle = document.querySelector('.footer__form-title');
  const footerText = document.querySelector('.footer__text');

  reservationForm.addEventListener('submit', e => {
    e.preventDefault();

    httpRequest('https://jsonplaceholder.typicode.com/posts', {
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
        }else modalOpenSuccess();

        // Следующие три строчки для основного задания, закоментировала, потому что сделала с модальным окном
        // footerTitle.textContent = `Заявка с номером ${data.id} успешно отправлена`;
        // footerText.textContent = 'Наши менеджеры свяжутся с Вами в течение 3-х рабочих дней'
        // footerForm.removeChild(footerInputWrap);
      },
      headers: {
        'Content-Type': 'application/json'
      },
    });
  });

  footerForm.addEventListener('submit', e => {
    e.preventDefault();
    sendData({
      title: 'E-mail',
      body: footerInput.value,
    }, () => {
      footerTitle.textContent = 'Ваша заявка успешно отправлена';
      footerText.textContent = 'Наши менеджеры свяжутся с Вами в течение 3-х рабочих дней';
      footerForm.removeChild(footerInputWrap);
    });
  });
};

const closeModal = (elem) => {
  const modalBtn = document.querySelector('.modal-btn');
  const reservationForm = document.querySelector('.reservation__form');
  modalBtn.addEventListener('click', () => {
    if (elem.style.display = 'block') {
      elem.style.display = 'none';
      reservationForm.reset();
      closeModal(elem);
    };
  });
};

export const modalOpenSuccess = function() {
  createModalSuccess();
  const modal = document.querySelector('.modal-success');
  modal.style.display = 'block';  
  if (modal.style.display = 'block') closeModal(modal);
};

export const modalOpenError = function() {
  createModalError();
  const modal = document.querySelector('.modal-error');
  modal.style.display = 'block';
  if (modal.style.display = 'block') closeModal(modal);
};








// Это дополнительный вариант для меня

// const fetchResponse = async (URL, {
//   method = 'GET',
//   callback,
//   body = {},
//   headers,
//   }) => {
//     try {
//       const options = {
//         method,
//       };

//       if (body) options.body = JSON.stringify(body);
//       if (headers) options.headers = headers;

//       const responce = await fetch(URL, options);
//       if (responce.ok) {
//         const data = await responce.json();
//         if (callback) callback(null, data);
//         return;
//       };

//       throw new Error(`Ошибка ${responce.status}: ${responce.statusText}`);

//     } catch (err) {
//       callback(err);
//     };
// };

