$(document).ready(onReady);

function onReady() {
    console.log('in jQuery');
    clickHandlers();
    renderHistory();
}

function clickHandlers() {
    $('.plus-btn').on('click', handlePlusClick);
    $('.minus-btn').on('click', handleMinusClick);
    $('.multiply-btn').on('click', handleMultiplyClick);
    $('.divide-btn').on('click', handleDivideClick);
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
    } else if($('#equal-btn').hasClass('divide-btn')){
        submitDivide();
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

function handleDivideClick() {
    console.log('in divide click');
    $('#equal-btn').addClass('divide-btn');
    $('#equal-btn').removeClass('minus-btn');
    $('#equal-btn').removeClass('plus-btn');
    $('#equal-btn').removeClass('multiply-btn')
}

function submitAddition() {
    const additionObject = {
        firstInputValue: $('#first-input').val(),
        secondInputValue: $('#second-input').val(),
        operand: 'plus',
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
        operand: 'minus',
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
    const multiplyObject = {
        firstInputValue: $('#first-input').val(),
        secondInputValue: $('#second-input').val(),
        operand: 'multiply',
    };

    $.ajax({
        method: 'POST',
        url: '/Multiply',
        data: multiplyObject
    }).then((response) => {
        console.log('inside POST request');
        renderMultiply();
    }).catch((error) => {
        console.log('dang, it did not work');
    })
}

function submitDivide() {
    const divideObject = {
        firstInputValue: $('#first-input').val(),
        secondInputValue: $('#second-input').val(),
        operand: 'divide',
    };

    $.ajax({
        method: 'POST',
        url: '/divide',
        data: divideObject
    }).then((response) => {
        console.log('inside POST request');
        renderDivide();
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
        <li class="calculation-on-dom">${response.at(-1).firstInputValue} + ${response.at(-1).secondInputValue} = ${response.at(-1).sum}</li>
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

function renderDivide() {
    $.ajax({
        method: 'GET',
        url: '/divide'
    }).then((response) => {
        console.log('response', response);
        $('#calculation-list').append(`
        <li>${response.at(-1).firstInputValue} / ${response.at(-1).secondInputValue} = ${response.at(-1).sum}</li>
        `)
        $('#current-total').empty();
        $('#current-total').append(`
        ${response.at(-1).sum}
        `)
    }).catch((error) => {
        console.log('error', error);
    })
}

function renderHistory() {
    $.ajax({
        method: 'GET',
        url: '/history'
    }).then((response) => {
        console.log('response', response);
        for (let calculation of response) {
            if(calculation.operand === 'plus') {
            $('#calculation-list').append(`
            <li>${calculation.firstInputValue} + ${calculation.secondInputValue} = ${calculation.sum}
        `)} else if(calculation.operand === 'minus') {
                $('#calculation-list').append(`
                <li>${calculation.firstInputValue} - ${calculation.secondInputValue} = ${calculation.sum}
        `)} else if(calculation.operand === 'multiply'){
                $('#calculation-list').append(`
                <li>${calculation.firstInputValue} * ${calculation.secondInputValue} = ${calculation.sum}
        `)} else if(calculation.operand === 'divide'){
                $('#calculation-list').append(`
                <li>${calculation.firstInputValue} / ${calculation.secondInputValue} = ${calculation.sum}
        `)} else console.log('too bad hoser');
        
    };
    }).catch((error) => {
    console.log('error', error);
    })
}

function handleClearButton() {
    console.log('in the clear');
    $('#first-input').val('')
    $('#second-input').val('')
}