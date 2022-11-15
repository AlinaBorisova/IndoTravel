export const getElements = () => {
  const setTimer = document.querySelector('.timer');
  setTimer.removeAttribute('data-timer-deadline');
  setTimer.setAttribute('data-deadline', '2022/11/30');
  const getTimer = setTimer.getAttribute('data-deadline');
  
  return getTimer;
};

export const timer = deadline => {
  const daysCount= document.querySelector('.timer__count_days');
  const daysUnits = document.querySelector('.timer__units_days');
  const hoursCount = document.querySelector('.timer__count_hours');
  const hoursUnits = document.querySelector('.timer__units_hours');
  const minutesCount = document.querySelector('.timer__count_minutes');
  const minutesUnits = document.querySelector('.timer__units_minutes');

    // доп. задание с секундами
  const seconds = document.createElement('p');
  seconds.classList.add('timer__item', 'timer__item_seconds');
  const secondsCount = document.createElement('span');
  secondsCount.classList.add('timer__count', 'timer__count_seconds');
  const secondUnits = document.createElement('span');
  secondUnits.classList.add('timer__units', 'timer__units_seconds');

  const itemSeconds = document.querySelector('.timer');
  seconds.append(secondsCount, secondUnits);
  seconds.style.display = 'none'
  itemSeconds.append(seconds);

  const getTimeRemaining = () => {
    // Доп задиние с временем по Гринвичу +03:00
    const dateStop = new Date(deadline);
    dateStop.setHours(dateStop.getHours() + 3);

    // const dateStop = new Date(deadline).getTime();     Изначальный вариант с местным временем
    const dateNow = Date.now();
    const timeRemaining = dateStop - dateNow;
    const seconds = Math.floor(timeRemaining / 1000 % 60);
    const minutes= Math.floor(timeRemaining / 1000 / 60 % 60);
    const hours = Math.floor(timeRemaining / 1000 / 60 / 60 % 24);
    const days= Math.floor(timeRemaining / 1000 / 60 / 60 / 24);

    return {timeRemaining, seconds, minutes, hours, days};
  };
    
  const start = () => {
    const timer = getTimeRemaining();
    daysCount.textContent = timer.days;
    hoursCount.textContent = timer.hours;
    minutesCount.textContent = timer.minutes;
    
    if(hoursCount.textContent < 10) {
      hoursCount.textContent = "0" + hoursCount.textContent;
    };
    if(minutesCount.textContent < 10) {
      minutesCount.textContent = "0" + minutesCount.textContent;
    };

    const sklonenie = (number, txt) => {
      const cases = [2, 0, 1, 1, 1, 2];
      return txt[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
    };

    daysUnits.textContent = sklonenie(daysCount.textContent, ['день', 'дня', 'дней']);
    hoursUnits.textContent = sklonenie(hoursCount.textContent, ['час', 'часа', 'часов']);
    minutesUnits.textContent = sklonenie(minutesCount.textContent, ['минута', 'минуты', 'минут']);

    const intervalId = setTimeout(start, 60000);
  
    if (timer.days === 0 && timer.hours <= 24) { // доп. задание с секундами
      clearTimeout(timer.intervalId);
      setTimeout(start, 1000);
      const itemDays = document.querySelector('.timer__item_days');
      itemDays.style.display = 'none'
      
      secondsCount.textContent = timer.seconds;
      secondUnits.textContent = sklonenie(secondUnits.textContent, ['секунда', 'секунды', 'секунд']);
      seconds.style.display = null;
    } else if(timer.timeRemaining <= 0) {
      clearTimeout(intervalId);
      document.querySelector('.hero__text').remove();
      document.querySelector('.hero__timer').remove();
    };
  };
  start();
};


