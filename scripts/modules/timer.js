export const getElements = () => {
  const setTimer = document.querySelector('.timer');
  setTimer.removeAttribute('data-timer-deadline');
  setTimer.setAttribute('data-deadline', '2022/10/30');
  const getTimer = setTimer.getAttribute('data-deadline');
  
  return getTimer;
};

export const timer = deadline => {
  const daysCount= document.querySelector('.timer__count_days');
  const hoursCount = document.querySelector('.timer__count_hours');
  const minutesCount = document.querySelector('.timer__count_minutes');
  const daysUnits = document.querySelector('.timer__units_days');
  const hoursUnits = document.querySelector('.timer__units_hours');
  const minutesUnits = document.querySelector('.timer__units_minutes');

  const getTimeRemaining = () => {
    const dateStop = new Date(deadline).getTime();
    const dateNow = Date.now();
    const timeRemaining = dateStop - dateNow;
    const minutes= Math.floor(timeRemaining / 1000 / 60 % 60);
    const hours = Math.floor(timeRemaining / 1000 / 60 / 60 % 24);
    const days= Math.floor(timeRemaining / 1000 / 60 / 60 / 24);

    return {timeRemaining, minutes, hours, days};
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

    if(timer.timeRemaining <= 0) {
      clearTimeout(intervalId);
      document.querySelector('.hero__text').remove();
      document.querySelector('.hero__timer').remove();
    };
  };
  start();
};


