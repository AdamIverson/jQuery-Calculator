$(document).ready(onReady);

function onReady() {
    console.log('in jQuery');
    $('.plus-btn').on('click', handlePlusClick);
    $('.minus-btn').on('click', handleMinusClick);
    $('.multiply-btn').on('click', handleMultiplyClick);
    // $('.divide-btn').on('click', handleDivideClick);
    $('#equal-btn').on('click', handleEqualButton);
    $('#clear-btn').on('click', handleClearButton);
}

function handleEqualButton() {
    console.log('click');
    
    if($('#equal-btn').hasClass('plus-btn')){
        submitAddition();
    } else if($('#equal-btn').hasClass('minus-btn')){
        submitSubtraction();
    } else if($('#equal-btn').hasClass('multiply-btn')){
        submitMultiply();
    }
}

function handlePlusClick() {
    console.log('in plus click');
    $('#equal-btn').addClass('plus-btn');
    $('#equal-btn').removeClass('minus-btn');
    $('#equal-btn').removeClass('multiply-btn');
    $('#equal-btn').removeClass('divide-btn')
}

function handleMinusClick() {
    console.log('in minus click');
    $('#equal-btn').addClass('minus-btn');
    $('#equal-btn').removeClass('plus-btn');
    $('#equal-btn').removeClass('multiply-btn');
    $('#equal-btn').removeClass('divide-btn')
}

function handleMultiplyClick() {
    console.log('in multiply click');
    $('#equal-btn').addClass('multiply-btn');
    $('#equal-btn').removeClass('minus-btn');
    $('#equal-btn').removeClass('plus-btn');
    $('#equal-btn').removeClass('divide-btn')
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
        renderAddition();
    }).catch((error) => {
        console.log('dang, it did not work');
    })
}

function submitSubtraction() {
    const subtractionObject = {
        firstInputValue: $('#first-input').val(),
        secondInputValue: $('#second-input').val(),
    };

    $.ajax({
        method: 'POST',
        url: '/subtractions',
        data: subtractionObject
    }).then((response) => {
        console.log('inside POST request');
        renderSubtraction();
    }).catch((error) => {
        console.log('dang, it did not work');
    })
}

function submitMultiply() {
    const MultiplyObject = {
        firstInputValue: $('#first-input').val(),
        secondInputValue: $('#second-input').val(),
    };

    $.ajax({
        method: 'POST',
        url: '/Multiply',
        data: MultiplyObject
    }).then((response) => {
        console.log('inside POST request');
        renderMultiply();
    }).catch((error) => {
        console.log('dang, it did not work');
    })
}

function renderAddition() {
    $.ajax({
        method: 'GET',
        url: '/additions'
    }).then((response) => {
        console.log('response', response);
            $('#calculation-list').append(`
            <li>${response.at(-1).firstInputValue} + ${response.at(-1).secondInputValue} = ${response.at(-1).sum}</li>
            `)
            $('#current-total').empty();
            $('#current-total').append(`
            ${response.at(-1).sum}
            `)
        }).catch((error) => {
        console.log('error', error);
        })
    }

    function renderMultiply() {
        $.ajax({
            method: 'GET',
            url: '/Multiply'
        }).then((response) => {
            console.log('response', response);
                $('#calculation-list').append(`
                <li>${response.at(-1).firstInputValue} * ${response.at(-1).secondInputValue} = ${response.at(-1).sum}</li>
                `)
                $('#current-total').empty();
                $('#current-total').append(`
                ${response.at(-1).sum}
                `)
            }).catch((error) => {
            console.log('error', error);
            })
        }

        function renderSubtraction() {
            $.ajax({
                method: 'GET',
                url: '/subtractions'
            }).then((response) => {
                console.log('response', response);
                    $('#calculation-list').append(`
                    <li>${response.at(-1).firstInputValue} - ${response.at(-1).secondInputValue} = ${response.at(-1).sum}</li>
                    `)
                    $('#current-total').empty();
                    $('#current-total').append(`
                    ${response.at(-1).sum}
                    `)
                }).catch((error) => {
                console.log('error', error);
                })
            }

    // function renderAddition() {
    //     $.ajax({
    //         method: 'GET',
    //         url: '/subtracttions'
    //     }).then((response) => {
    //         console.log('response', response);
    //         $('#calculation-list').empty();
    //         for (let calculation of response) {
    //             $('#calculation-list').append(`
    //             <li>${calculation.firstInputValue} - ${calculation.secondInputValue} = ${calculation.sum}</li>
    //             `)
    //             $('#current-total').empty();
    //             $('#current-total').append(`
    //             ${calculation.sum}
    //             `)
    //         }
    //         }).catch((error) => {
    //         console.log('error', error);
    //         })
    //     }

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

function handleClearButton() {
    console.log('in the clear');
    $('#first-input').val('')
    $('#second-input').val('')
}