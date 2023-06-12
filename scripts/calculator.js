function add(a, b) {return a + b};
function subtract(a, b) {return a - b};
function multiply(a, b) {return a * b};
function divide(a, b) {return a / b};

function operate(operator, a, b){
    switch(operator){
        case '+': 
            return add(a, b);
        case '-':
            return subtract(a, b);
        case 'x':
            return multiply(a, b);
        case '÷':
            return divide(a, b);
    }
}

let buttonText = [
    'C', '%', '←', '7',
    '8', '9', '÷', '4',
    '5', '6', 'x', '1',
    '2', '3', '-', '+/-',
    '0', '.', '+', '='
]

let buttons = document.querySelector('.container');
let display = document.querySelector('.display');
let firstValue = 0;
let secondValue = 0;
let result = 0;
let operator = "";

buttonText.forEach(symbol => {
    const button = document.createElement('button');
    const dispLen = display.textContent.length; // check for max 12 characters later

    button.textContent = symbol;
    button.setAttribute('type', 'button');
    button.classList.add('calc-button');

    if (symbol === 'C'){
        button.classList.add('calc-clear');
        button.addEventListener('click', () => {
            display.textContent = "0";
            firstValue = 0;
        });
    }
    else if (symbol === '='){
        button.classList.add('calc-equals');
        button.addEventListener('click', () => {
            if(operator){
                secondValue = parseInt(display.textContent);
                console.log(firstValue);
                console.log(secondValue);
                result = operate(operator, firstValue, secondValue);
                console.log(result);
                display.textContent = result;
                operator = ""
            }
        });
    }
    else if (symbol === '÷' || symbol === 'x' || symbol === '-' || symbol === '+'){
        button.classList.add('calc-arithmetic');
        button.addEventListener('click', () => {
            if(!operator){
                firstValue = parseInt(display.textContent);
                operator = symbol;
                display.textContent = "0";
            }
        });
    }
    else if (parseInt(symbol) >= 0 && parseInt(symbol) < 10) {
        button.addEventListener('click', () => {
            if(display.textContent === '0'){
                display.textContent = "";
            }
            display.textContent += symbol;
        });
    }
    
    buttons.appendChild(button);
});

