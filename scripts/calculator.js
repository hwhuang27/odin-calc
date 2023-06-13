
let buttonText = [
    'C', '%', '←', '7',
    '8', '9', '+', '4',
    '5', '6', '-', '1',
    '2', '3', 'x', '+/-',
    '0', '.', '÷', '='
]

function add(a, b) {return a + b};
function subtract(a, b) {return a - b};
function multiply(a, b) {return a * b};
function divide(a, b) {return b === 0 ? 'nice try' : a / b};

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

function clearDisplay() {
    display.textContent = "0";
    firstValue = 0;
    secondValue = 0;
    operator = "";
}

function displayResult() {
    if (operator) {
        secondValue = parseFloat(display.textContent);
        console.log(firstValue);
        console.log(operator);
        console.log(secondValue);
        result = operate(operator, firstValue, secondValue);
        if (result.toString().length > 11){
            result = result.toString().slice(0, 12);
        }
        console.log(result);
        display.textContent = result;
        operator = "";
    }
}

function displayPercent(){
    firstValue = display.textContent;
    secondValue = 100;
    result = operate('÷', firstValue, secondValue);
    if (result.toString().length > 11) {
        result = result.toString().slice(0, 12);
    }
    display.textContent = result;
    operator = "";
}

function displayBackspace(){
    display.textContent = display.textContent.slice(0, -1);
}

function displayDecimal() {
    if (!display.textContent.includes('.') && display.textContent.length < 12){
        display.textContent += '.';
    }
}

function displayInverse(){
    if (!display.textContent.includes('-') && display.textContent.length < 12) {
        display.textContent = '-' + display.textContent;
    }
    else{
        display.textContent = display.textContent.slice(1);
    }
}

let buttons = document.querySelector('.container');
let display = document.querySelector('.display');
let firstValue = 0;
let secondValue = 0;
let result = 0;
let operator = "";
 
buttonText.forEach(symbol => {
    const button = document.createElement('button');
    button.textContent = symbol;
    button.setAttribute('type', 'button');
    button.classList.add('calc-button');

    if (symbol === 'C'){
        button.classList.add('calc-clear');
        button.addEventListener('click', clearDisplay);
    }
    else if (symbol === '%'){
        button.addEventListener('click', displayPercent);
    }
    else if (symbol === '←'){
        button.addEventListener('click', displayBackspace);
    }
    else if (symbol === '.'){
        button.addEventListener('click', displayDecimal);
    }
    else if (symbol === '+/-'){
        button.addEventListener('click', displayInverse);
    }
    else if (symbol === '='){
        button.classList.add('calc-equals');
        button.addEventListener('click', displayResult);
    }
    else if (symbol === '÷' || symbol === 'x' || symbol === '-' || symbol === '+'){
        button.classList.add('calc-arithmetic');
        button.addEventListener('click', () => {
            if(!operator){
                firstValue = parseFloat(display.textContent) ? parseFloat(display.textContent) : 0;
                operator = symbol;
                display.textContent = "0";
            }
        });
    }
    else if (parseFloat(symbol) >= 0 && parseFloat(symbol) < 10) {
        button.addEventListener('click', () => {
            if(display.textContent === '0' || display.textContent === 'haha nice try'){
                display.textContent = "";
            }
            if (display.textContent.length > 11){
                return;
            }
            display.textContent += symbol;
        });

    }
    
    buttons.appendChild(button);
});

window.addEventListener('keydown', (e) => {
    e.preventDefault();
    console.log(e.key);
    switch(e.key){
        case 'c':
            clearDisplay();
            break;
        case 'p':
            displayPercent();
            break;
        case 'i':
            displayInverse();
            break;
        case '.':
            displayDecimal();
            break;
        case 'Backspace':
            displayBackspace();
            break;
        case '+':
        case '-':
        case 'x':
        case '/':
            if (!operator) {
                firstValue = parseFloat(display.textContent) ? parseFloat(display.textContent) : 0;
                switch (e.key){
                    case '+':
                        operator = '+';
                        break;
                    case '-':
                        operator = '-';
                        break;
                    case 'x':
                        operator = 'x';
                        break;
                    case '/':
                        operator = '÷';
                        break;
                }
                display.textContent = "0";
            }
            break;
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
        case '0':
            if(display.textContent === '0'){
                display.textContent = e.key;
            }
            else if (display.textContent.length < 12){
                display.textContent += e.key;
            }
            break;
        case 'Enter':
            displayResult();
            break;
    }

});