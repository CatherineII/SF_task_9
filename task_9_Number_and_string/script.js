let lastOperand = 0;
let operation = null;

const inputWindow = document.getElementById('inputWindow');
const outputWindow = document.getElementById('outputWindow');

document.getElementById('btn_clr').addEventListener('click', function () {
    lastOperand = 0;
    operation = null;
    inputWindow.value = '0';
})
//операции
document.getElementById('btn_sum').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = 'sum';
    inputWindow.value = '';
    outputWindow.value += ' + ';
})
document.getElementById('btn_deduct').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = 'deduct';
    inputWindow.value = '';
    outputWindow.value += ' - ';
})
document.getElementById('btn_mult').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = 'mult';
    inputWindow.value = '';
    outputWindow.value += ' * ';
})
document.getElementById('btn_divide').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = 'divide';
    inputWindow.value = '';
    outputWindow.value += ' / ';
})
document.getElementById('btn_sqrRoot').addEventListener('click', function () {
    outputWindow.value = ' √ ';
    outputWindow.value += inputWindow.value;
    outputWindow.value += ' = ';
    const result = Math.sqrt(parseFloat(inputWindow.value));
    operation = 'result';
    inputWindow.value = result;
    outputWindow.value += result;
})
document.getElementById('btn_sign').addEventListener('click', function () {
    lastOperand = parseFloat(inputWindow.value);
    operation = 'result';
    inputWindow.value = -lastOperand;
    outputWindow.value = -lastOperand
})
document.getElementById('btn_result').addEventListener('click', function () {
    if (operation === 'sum'){
        const result = lastOperand + parseFloat(inputWindow.value);
        operation = 'result';
        lastOperand = 0;
        inputWindow.value = result;
        outputWindow.value += ' = ';
        outputWindow.value += result;
    }
    if (operation === 'deduct'){
        const result = lastOperand - parseFloat(inputWindow.value);
        operation = 'result';
        lastOperand = 0;
        inputWindow.value = result;
        outputWindow.value += ' = ';
        outputWindow.value += result;
    }
    if (operation === 'mult'){
        const result = lastOperand * parseFloat(inputWindow.value);
        operation = 'result';
        lastOperand = 0;
        inputWindow.value = result;
        outputWindow.value += ' = ';
        outputWindow.value += result;
    }
    if (operation === 'divide'){
        const result = lastOperand / parseInt(inputWindow.value);
        operation = 'result';
        lastOperand = 0;
        inputWindow.value = result;
        outputWindow.value += ' = ';
        outputWindow.value += result;
    }
})

//значения

document.getElementById('btn_dot').addEventListener('click', function () {
        //добавить условие ввода точки - она может быть только одна!
    if (operation === 'result') {
        inputWindow.value = '0.';
        outputWindow.value = '0.';
    } else {
        inputWindow.value += '.';
        outputWindow.value += '.';
    }
    lastOperand = 0;
    operation = null;
})
document.getElementById('btn_0').addEventListener('click', function () {
    if (operation === 'result' || inputWindow.value === '0') {
        inputWindow.value = '0';
        outputWindow.value = '0';
    } else {
        inputWindow.value += '0';
        outputWindow.value += '0';
    }
})
document.getElementById('btn_1').addEventListener('click', function () {
    if (operation === 'result' || inputWindow.value === '0') {
        inputWindow.value = '1';
        outputWindow.value = '1';
    } else {
        inputWindow.value += '1';
        outputWindow.value += '1';
    }
})
document.getElementById('btn_2').addEventListener('click', function () {
    if (operation === 'result' || inputWindow.value === '0') {
        inputWindow.value = '2';
        outputWindow.value = '2';
    } else {
        inputWindow.value += '2';
        outputWindow.value += '2';
    }
})
document.getElementById('btn_3').addEventListener('click', function () {
    if (operation === 'result' || inputWindow.value === '0') {
        inputWindow.value = '3';
        outputWindow.value = '3';
    } else {
        inputWindow.value += '3';
        outputWindow.value += '3';
    }
})
document.getElementById('btn_4').addEventListener('click', function () {
    if (operation === 'result' || inputWindow.value === '0') {
        inputWindow.value = '4';
        outputWindow.value = '4';
    } else {
        inputWindow.value += '4';
        outputWindow.value += '4';
    }
})
document.getElementById('btn_5').addEventListener('click', function () {
    if (operation === 'result' || inputWindow.value === '0') {
        inputWindow.value = '5';
        outputWindow.value = '5';
    } else {
        inputWindow.value += '5';
        outputWindow.value += '5';
    }
})
document.getElementById('btn_6').addEventListener('click', function () {
    if (operation === 'result' || inputWindow.value === '0') {
        inputWindow.value = '6';
        outputWindow.value = '6';
    } else {
        inputWindow.value += '6';
        outputWindow.value += '6';
    }
})
document.getElementById('btn_7').addEventListener('click', function () {
    if (operation === 'result' || inputWindow.value === '0') {
        inputWindow.value = '7';
        outputWindow.value = '7';
    } else {
        inputWindow.value += '7';
        outputWindow.value += '7';
    }
})
document.getElementById('btn_8').addEventListener('click', function () {
    if (operation === 'result' || inputWindow.value === '0') {
        inputWindow.value = '8';
        outputWindow.value = '8';
    } else {
        inputWindow.value += '8';
        outputWindow.value += '8';
    }
})
document.getElementById('btn_9').addEventListener('click', function () {
    if (operation === 'result' || inputWindow.value === '0') {
        inputWindow.value = '9';
        outputWindow.value = '9';
    } else {
        inputWindow.value += '9';
        outputWindow.value += '9';
    }
})