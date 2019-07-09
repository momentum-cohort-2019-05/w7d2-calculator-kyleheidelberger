const display = document.querySelector('#result');
const buttons = document.querySelectorAll(['.number', '.op']);
for (let button of buttons) {
    button.addEventListener('click', function () {
        display.innerText += button.innerText;
    })
};

const clearButton = document.querySelector('.clear')
clearButton.addEventListener('click', function () {
    display.innerText = '';
});

const equalButton = document.querySelector('.equals')
equalButton.addEventListener('click', function () {
    display.innerText = eval(display.innerText)
});

const decimalButton = document.querySelector('.decimal')
decimalButton.addEventListener('click', function () {
    if (display.innerText === '') {
        display.innerText += "0.";
    }
    else {
        display.innerText += decimalButton.innerText;
    }
})