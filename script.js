const resultInput = document.getElementById('result');

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
    const lastChar = resultInput.value.slice(-1);
    const operators = ['+', '-', '*', '/', '%'];

    if (operators.includes(lastChar) && operators.includes(value)) {
        resultInput.value = resultInput.value.slice(0, -1) + value;
    } else {
        resultInput.value += value;
    }
}

function clearResult() {
    resultInput.value = '';
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
}

function backspace() {
    resultInput.value = resultInput.value.slice(0, -1);
}

function calculateResult() {
    try {
        const expression = resultInput.value;
        if (expression.includes('/0')) {
            resultInput.value = 'Error: Division by zero';
        } else {
            resultInput.value = eval(expression);
        }
    } catch (error) {
        resultInput.value = 'Error';
    }
}
