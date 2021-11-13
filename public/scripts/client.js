$(document).ready(onReady);

function onReady() {
    console.log('in jQuery');
    $('#plus-btn').on('click', handlePlusClick);
    $('#equal-btn').on('click', handleEqualClick);
    renderCalculation();
}

function handleEqualClick() {
    console.log('in handleEqualClick');
    const calculationObject = {
        firstInput: $('#first-input'),
        secondInput: $('#second-input'),
    }
}

function handlePlusClick() {
    console.log('in plus click');
    //toggle?
}

// function renderCalculation() {
//     $.ajax({
//       method: 'GET',
//       url: '/'
//     }).then((response) => {
//       console.log('response', response);
//       $('#').empty();
//
//       for (let  of response) {
//         $('#').append(`
//         `)
//       }
//     }).catch((error) => {
//       console.log('error', error);
//     });
//   }