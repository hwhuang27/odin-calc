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
        case '*':
            return multiply(a,b);
        case '/':
            return divide(a,b);
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

buttonText.forEach(symbol => {
    const button = document.createElement('button');
    button.textContent = symbol;
    button.setAttribute('type', 'button');
    button.classList.add('calc-button');
    switch(symbol){
        case '%':
        case '←':
        case '÷': 
        case 'x': 
        case '-':
        case '+':
            button.classList.add('calc-symbol');
            break;
        case 'C':
            button.classList.add('calc-clear');
            break;
        case '=':
            button.classList.add('calc-equals');
            break;
    }
    button.addEventListener('click', () => display.textContent += symbol);
    buttons.appendChild(button);
});

function setDisplay(symbol){
    
}
