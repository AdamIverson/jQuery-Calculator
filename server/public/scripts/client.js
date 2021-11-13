$(document).ready(onReady);

function onReady() {
    console.log('in jQuery');
    $('#plus-btn').on('click', handlePlusClick);
    $('#equal-btn').on('click', submitAddition);
    $('#clear-btn').on('click', handleClearButton);
    renderCalculation();
    // renderTotal();
}
function handleClearButton() {
    console.log('in the clear');
    $('#first-input').val('')
    $('#second-input').val('')
}

function handlePlusClick() {
    console.log('in plus click');
    
}

function submitAddition() {
    const additionObject = {
        firstInputValue: $('#first-input').val(),
        secondInputValue: $('#second-input').val(),
    };

    $.ajax({
        method: 'POST',
        url: '/additions',
        data: additionObject
    }).then((response) => {
        console.log('inside POST request');
        renderCalculation();
    }).catch((error) => {
        console.log('dang, it did not work');
    })
}

// function renderTotal() {
//     $.ajax({
//         method: 'GET',
//         url: '/total'
//             }).then((response) => {
//             console.log('response', response);
//             $('#current-total').empty();
//             $('#current-total').append(`
//             <li>${response}</li>
//             `)
//             }).catch((error) => {
//             console.log('error', error);
//             });
//         }

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
            $('#current-total').empty();
            $('#current-total').append(`
            ${calculation.sum}
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

