$(document).ready(onReady);

function onReady() {
    console.log('in jQuery');
    $('#plus-btn').on('click', handlePlusClick);
    $('#equal-btn').on('click', submitCalculation);
    renderCalculation();
}

function captureObject() {
    
}
function handlePlusClick() {
    console.log('in plus click');
    //toggle?
}

function renderCalculation() {
    $.ajax({
        method: 'GET',
        url: '/calculations'
    }).then((response) => {
        console.log('response', response);
        $('#calculation-list').empty();
        for (let calculation of response) {
            $('#calculation-list').append(`
            <li>${calculation}</li>
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

function submitCalculation() {
    const calculationObject = {
        firstInputValue: $('#first-input').val(),
        secondInputValue: $('#second-input').val()
    };

    $.ajax({
        method: 'POST',
        url: '/calculations',
        data: calculationObject
    }).then((response) => {
    renderCalculation();
    }).catch((error) => {
        console.log('dang, it did not work');
    })
}