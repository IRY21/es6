"use strict";

function applyForVacation(document) {
  console.log('Обработка заявления...');
  var promise = new Promise(function (resolve, reject) {
    setTimeout(function () {
      var visa = {};
      Math.random() > 0 ? resolve(visa) : reject('В визе отказано: не хватило документов');
    }, 2000);
  });
  return promise;
}

function getVisa(visa) {
  console.info('Виза получена');
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      return resolve(visa);
    }, 2000);
  });
}

function bookHotel(visa) {
  console.log(visa);
  console.log('Бронируем отель');
  return Promise.resolve(visa);
}

function buyTickets(booking) {
  console.log('Покупаем билеты');
  console.log('Бронь', booking);
}

applyForVacation({}).then(getVisa).then(bookHotel).then(buyTickets).catch(function (error) {
  return console.error(error);
});
/* applyForVacation(   // Callback Hell
    {}, 
    function(visa) {
        console.info('Виза получена');
        bookHotel(
            visa, 
            function(reservation) {
                buyTickets(
                    reservation,
                    function(ticket) {

                    },
                    function(error) {

                    }
                    );
            },
            function(error) {

            }
        );
    },
    function(reason) {
        console.error(reason);
    }
); */