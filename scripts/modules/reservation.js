const loadDates = async () => {
  const result = await fetch('date.json')
  const data = await result.json()
  return data;
};
  
export const renderDatesTour = async () => {
  const data = await loadDates();
  const dateTour = document.querySelectorAll('.tour__select')[0];
  const peopleTour = document.querySelectorAll('.tour__select')[1];
  const dateReservation = document.querySelectorAll('.reservation__select')[0];
  const peopleReservation = document.querySelectorAll('.reservation__select')[1];
  let htmlDateTour = '<option> Выбери дату </option>';
  let htmlDateReservation = '<option> Дата путешествия </option>';
  let htmlPeopleReservation = '<option> Количество человек </option>';

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