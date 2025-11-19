const resultInput = document.getElementById('result');

function appendResult(value) {
    resultInput.value += value;
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

function deleteLast() {
    resultInput.value = resultInput.value.slice(0, -1);
}

function calculateResult() {
    try {
        resultInput.value = eval(resultInput.value);
    } catch (error) {
        resultInput.value = 'Error';
    }
}
