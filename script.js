const resultInput = document.getElementById('result');

function appendResult(value) {
    resultInput.value += value;
}

function clearResult() {
    resultInput.value = '';
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
