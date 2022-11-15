const loadDates = async () => {
  const result = await fetch('date.json')
  const data = await result.json()
  return data;
};
  
// export const renderDatesTour = async () => {
//   const data = await loadDates();
//   const dateTrip = document.querySelectorAll('.tour__select')[0];
//   const peopleTrip = document.querySelectorAll('.tour__select')[1];
//   let htmlDate = '<option> Выбери дату </option>';
  
//   const peopleCount = (index) => {
//     let minPeople = data[index - 1]['min-people'];
//     let maxPeople = data[index - 1]['max-people'];
//     let arrPeople = [minPeople];

//     for (let i = 0; i < maxPeople; i++) {
//       if (minPeople < maxPeople) {
//         minPeople++
//         arrPeople.push(minPeople)
//       };
//     };
//     return arrPeople;
//   };

//   data.map((item, i) => {
//     htmlDate += `
//       <option value="${item.date}" class="tour__option" data-date="${i}">
//       ${item.date}
//       </option> 
//     `;
//   });

//   dateTrip.addEventListener('input', function(e) {
//     let htmlPeople = '<option> Количество человек </option>';
//     const target = e.target;
//     const indexOption = target.options.selectedIndex;
//     // const option = target.options[indexOption];
//     const human = peopleCount(indexOption);
//     console.log('peopleCount', peopleCount(indexOption));
    

//     human.forEach(item => {
//       htmlPeople += `
//         <option value="${item}" class="tour__option" data-date="${item}">
//         ${item}
//         </option> 
//       `;
//     });
//     peopleTrip.innerHTML = htmlPeople;
//   });
//   dateTrip.innerHTML = htmlDate;
// };

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


// export const renderDatesReservation = async () => {
//   // const data = await loadDates();
//   // const dateTrip = document.querySelectorAll('.reservation__select')[0];
//   // const peopleTrip = document.querySelectorAll('.reservation__select')[1];
//   // let htmlDate = '<option> Дата путешествия </option>';
  
//   const peopleCount = (index) => {
//     let minPeople = data[index - 1]['min-people'];
//     let maxPeople = data[index - 1]['max-people'];
//     let arrPeople = [minPeople];

//     for (let i = 0; i < maxPeople; i++) {
//       if (minPeople < maxPeople) {
//         minPeople++
//         arrPeople.push(minPeople)
//       };
//     };
//     return arrPeople;
//   };

//   data.map((item, i) => {
//     htmlDate += `
//       <option value="${item.date}" class="tour__option" data-date="${i}">
//       ${item.date}
//       </option> 
//     `;
//   });

//   dateTrip.addEventListener('input', function(e) {
//     let htmlPeople = '<option> Количество человек </option>';
//     const targetDate = e.target;
//     const indexOption = targetDate.options.selectedIndex;
//     const human = peopleCount(indexOption);
//     console.log('peopleCount', human);
//     console.log('date:', targetDate.value)

//     human.forEach(item => {
//       htmlPeople += `
//         <option value="${item}" class="tour__option" data-date="${item}">
//         ${item}
//         </option> 
//       `;
//     });
//     peopleTrip.innerHTML = htmlPeople;
//   });
//   dateTrip.innerHTML = htmlDate;

//   peopleTrip.addEventListener('input', function(e) {
//     const targetPeople = e.target;
//     const indexOption = dateTrip.options.selectedIndex;
//     const infoTour = document.querySelector('.reservation__data')
//     infoTour.textContent = `${dateTrip.value}, ${targetPeople.value} человек`;
//     const price = document.querySelector('.reservation__price');
    
//     data.forEach(i => {
//       if(indexOption == i) {
//         price.textContent = targetPeople.value * data[i - 1]['price'];
//       }
//     });
//   });
// };

























  // const renderDatesSecond = async () => {
  //   const date = await loadDates();
  //   const dateTripSecond = document.querySelectorAll('.reservation__select')[0];
  //   const datePeopleSecond = document.querySelectorAll('.reservation__select')[1];
    
  //   const chooseDatesSecond = date.map(item => {
  //     const dateOptionSecond = document.querySelectorAll('.reservation__option')[0];
  //     const peopleOptionSecond = document.querySelectorAll('.reservation__option')[1];
  
  //     const choose1Second = document.querySelector('.tour__option');
  //     console.log(choose1Second)
  
     
  
  //     dateOptionSecond.textContent = item.date;
  
  //     dateOptionSecond.innerHTML = `
  //     <option> ${choose1Second} </option>
  //       <option> ${item.date} </option>
  //     `;
  //     return dateOptionSecond;
  //   })
  
  
  //   // const choosePeople = date.map(item => {
  //   //   const dateOption = document.querySelector('.reservation__option')
  
  //   //   dateOption.innerHTML = `
  //   //     <option> ${item['min-people']} </option>
  //   //   `;
  //   //   return dateOption;
  //   // })
  //   dateTripSecond.append(...chooseDatesSecond);
  //   // datePeople.append(...choosePeople)
  // };
