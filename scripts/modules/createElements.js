export const createModalSuccess = function() {
  const reservationContainer = document.querySelector('.reservation__container');
  const modal = document.createElement('div');
  modal.classList.add('modal-success');
  modal.style.cssText = `
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1000;
    background: rgba(0, 0, 0, 0.2);
    display: flex;
  `;
  
  const modalСontent = document.createElement('div');
  modalСontent.classList.add('modal-content');
  modalСontent.style.display = 'none';
  modalСontent.style.cssText = `
    box-sizing: border-box;
    position: absolute;
    width: 980px;
    height: 500px;
    top: 20%;
    left: 18%;
    background: #FFFFFF;
    border: 1px solid #AFAFAF;
    border-radius: 30px;
  `;

  const modalTitle  = document.createElement('div');
  modalTitle.classList.add('modal-title');
  modalTitle.textContent = 'Ваша заявка успешно отправлена';
  modalTitle.style.cssText = `
    position: absolute;
    top: 77px;
    left: 200px; 
    width: 580px;
    height: 102px;
    font-family: 'Merriweather';
    font-style: normal;
    font-weight: 400;
    font-size: 34px;
    line-height: 150%;
    text-align: center;
    letter-spacing: 0.02em;
    color: #303030;
  `;

  const modalText = document.createElement('div');
  modalText.classList.add('modal-text');
  modalText.textContent = 'Наши менеджеры свяжутся с вами в течении 3-х рабочих дней';
  modalText.style.cssText = `
    position: absolute;
    top: 219px;
    left: 211px; 
    width: 558px;
    height: 27px;
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 150%;
    color: #303030;
  `;

  const modalBtn = document.createElement('button');
  modalBtn.classList.add('modal-btn');
  modalBtn.innerHTML = '<img src="img/reservation/Ok.png" />';
  modalBtn.style.cssText = `
    top: 310px;
    left: 440px;
    position: absolute;
    width: 100px;
    height: 100px;
  `;

  modalСontent.append(modalTitle, modalText, modalBtn);
  modal.append(modalСontent);
  reservationContainer.append(modal);
};

export const createModalError = function() {
  const reservationContainer = document.querySelector('.reservation__container');
  const modal = document.createElement('div');
  modal.classList.add('modal-error');
  modal.style.cssText = `
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1000;
    background: rgba(0, 0, 0, 0.2);
    display: flex;
  `;
  
  const modalСontent = document.createElement('div');
  modalСontent.classList.add('modal-content');
  modalСontent.style.display = 'none';
  modalСontent.style.cssText = `
    box-sizing: border-box;
    position: absolute;
    width: 980px;
    height: 500px;
    top: 20%;
    left: 18%;
    background: #FFFFFF;
    border: 1px solid #AFAFAF;
    border-radius: 30px;
  `;

  const modalTitle  = document.createElement('div');
  modalTitle.classList.add('modal-title');
  modalTitle.textContent = 'Упс... Что-то пошло не так';
  modalTitle.style.cssText = `
    position: absolute;
    top: 77px;
    left: 200px; 
    width: 580px;
    height: 51px;
    font-family: 'Merriweather';
    font-style: normal;
    font-weight: 400;
    font-size: 34px;
    line-height: 150%;
    text-align: center;
    letter-spacing: 0.02em;
    color: #303030;
  `;

  const modalText = document.createElement('div');
  modalText.classList.add('modal-text');
  modalText.textContent = 'Не удалось отправить заявку. Пожалуйста, повторите отправку еще раз';
  modalText.style.cssText = `
    position: absolute;
    top: 219px;
    left: 211px; 
    width: 639px;
    height: 27px;
    font-family: 'Nunito';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 150%;
    color: #303030;
  `;

  const modalBtn = document.createElement('button');
  modalBtn.classList.add('modal-btn');
  modalBtn.innerHTML = '<img src="img/reservation/btn.png" />';
  modalBtn.style.cssText = `
    top: 310px;
    left: 310px;
    position: absolute;
    width: 360px;
    height: 76px;
  `;

  modalСontent.append(modalTitle, modalText, modalBtn);
  modal.append(modalСontent);
  reservationContainer.append(modal);
};
