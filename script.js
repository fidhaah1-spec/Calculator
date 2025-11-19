const resultInput = document.getElementById('result');
let isResultCalculated = false;

document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (/[0-9]/.test(key)) {
        appendResult(key);
    } else if (['+', '-', '*', '/', '%'].includes(key)) {
        appendResult(key);
    } else if (key === 'Enter') {
        calculateResult();
    } else if (key === 'Backspace') {
        backspace();
    } else if (key === 'Delete') {
        clearResult();
    }
});

function appendResult(value) {
    if (isResultCalculated && /^[0-9]+$/.test(value)) {
        resultInput.value = '';
    }

    const lastChar = resultInput.value.slice(-1);
    const operators = ['+', '-', '*', '/', '%'];

    if (operators.includes(lastChar) && operators.includes(value)) {
        resultInput.value = resultInput.value.slice(0, -1) + value;
    } else {
        resultInput.value += value;
    }
    isResultCalculated = false;
}

function clearResult() {
    resultInput.value = '';
    isResultCalculated = false;
}

function clearEntry() {
    let currentValue = resultInput.value;
    let lastOperatorIndex = -1;
    for (let i = currentValue.length - 1; i >= 0; i--) {
        if (['+', '-', '*', '/', '%'].includes(currentValue[i])) {
            lastOperatorIndex = i;
            break;
        }
    }
    if (lastOperatorIndex !== -1) {
        resultInput.value = currentValue.slice(0, lastOperatorIndex + 1);
    } else {
        resultInput.value = '';
    }
    isResultCalculated = false;
}

function backspace() {
    resultInput.value = resultInput.value.slice(0, -1);
    isResultCalculated = false;
}

function calculateResult() {
    try {
        const expression = resultInput.value;
        if (expression.includes('/0')) {
            resultInput.value = 'Error: Division by zero';
        } else {
            resultInput.value = eval(expression);
            isResultCalculated = true;
        }
    } catch (error) {
        resultInput.value = 'Error';
    }
}
