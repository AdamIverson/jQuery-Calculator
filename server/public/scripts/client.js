$(document).ready(onReady);

function onReady() {
    console.log('in jQuery');
    $('#plus-btn').on('click', handlePlusClick);
    $('#equal-btn').on('click', submitCalculation );
    renderCalculation();
}

function handlePlusClick() {
    console.log('in plus click');
    //toggle?
}

function submitCalculation() {
    const calculationObject = {
        firstInputValue: $('#first-input').val(),
        secondInputValue: $('#second-input').val(),
    };

    $.ajax({
        method: 'POST',
        url: '/calculations',
        data: calculationObject
    }).then((response) => {
        console.log('inside POST request');
        renderCalculation();
    }).catch((error) => {
        console.log('dang, it did not work');
    })
}

// function renderNumber() {
//     $.ajax({
//         method: 'GET',
//         url: '/'
//             }).then((response) => {
//             console.log('response', response);
//             $('#').empty();
        
//             for (let  of response) {
//                 $('#').append(`
//                 `)
//             }
//             }).catch((error) => {
//             console.log('error', error);
//             });
//         }
// }

function renderCalculation() {
    $.ajax({
        method: 'GET',
        url: '/calculations'
    }).then((response) => {
        console.log('response', response);
        $('#calculation-list').empty();
        for (let calculation of response) {
            $('#calculation-list').append(`
            <li>${calculation.firstInputValue} + ${calculation.secondInputValue} = ${calculation.sum}</li>
            `)
        }
        }).catch((error) => {
        console.log('error', error);
        })
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

