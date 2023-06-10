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
    'C', '%', '←', '÷',
    '7', '8', '9', 'x',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    '+/-', '0', '.', '='
]

let buttons = document.querySelector('.container');

buttonText.forEach(symbol => {
    const button = document.createElement('button');
    button.textContent = symbol;
    button.setAttribute('type', 'button');
    button.classList.add('calc-button');

    buttons.appendChild(button);    
});


