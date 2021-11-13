$(document).ready(onReady);

function onReady() {
    console.log('in jQuery');
    $('#plus-btn').on('click', handlePlusClick);
    $('#equal-btn').on('click', submitCalculation);
    // renderCalculation();
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
        $('#calculation-history').empty();
    
        for (let calculation of response) {
            $('#calculation-history').append(`
            <li>${calculation}</li>
            `)
        }
        }).catch((error) => {
        console.log('error', error);
        });
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
    $.ajax({
    method: 'POST',
    url: '/calculations',
    data: { 
        calculationObject: {
            firstInputValue: $('#veggie-input').val(),
            secondInputValue: $('#second-input').valu()
        }
    }.then((response) => {
    renderVeggies();
    }).catch((error) => {
    console.log('dang, it did not work');
    })})}