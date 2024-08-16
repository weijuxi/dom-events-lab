/*-------------------------------- Constants --------------------------------*/

/*-------------------------------- Variables --------------------------------*/
let currentInput = '';  
let previousInput = '';
let operator = ''; 
/*------------------------ Cached Element References ------------------------*/
const buttons = document.querySelectorAll('.button');
const calculator = document.querySelector('#calculator');
const display = document.querySelector('.display');
/*----------------------------- Event Listeners -----------------------------*/

/*-------------------------------- Functions --------------------------------*/
calculator.addEventListener('click', (event) => {
    // This log is for testing purposes to verify we're getting the correct value
    // You have to click a button to see this log
    //console.log(event.target.innerText);
    const buttonValue = event.target.innerText;
    const clickedButton = event.target;
  
    // Example
    if (event.target.classList.contains('number')) {
        // Do something with a number
        //console.log(`You clicked a number: ${buttonValue}`);
        currentInput += buttonValue;
        display.textContent = currentInput;
        console.log(buttonValue);
    }
  
    // Example
    if (buttonValue === '*') {
        // Do something with this operator
        //console.log(`You clicked the * operator`);
        if (currentInput) {
            previousInput = currentInput;
            currentInput = '';
            operator = '*';
            console.log('You clicked the * operator');
        }
    }
    
    if (buttonValue === '=') {
        // Handle the equals button click
        //console.log('Equals button clicked');
        // Convert the string inputs into numbers and perform the operation
        if (previousInput && operator) {
            currentInput = eval(`${previousInput}${operator}${currentInput}`);
            display.textContent = currentInput;
            previousInput = '';  
            operator = '';      
            console.log('Equals button clicked');
        }
    }

    if (buttonValue === '+') {
        // Handle the plus button click
        if (currentInput) {
            previousInput = currentInput;
            currentInput = '';
            operator = '+';
            console.log('Plus button clicked');
        }
    }

    if (buttonValue === '-') {
        // Handle the minus button click
        if (currentInput) {
            previousInput = currentInput;
            currentInput = '';
            operator = '-';
            console.log('Minus button clicked');
        }
    }

    if (buttonValue === '/') {
        // Handle the divide button click
        if (currentInput) {
            previousInput = currentInput;
            currentInput = '';
            operator = '/';
            console.log('Divide button clicked');
        }
    }

    if (buttonValue === 'C') {
    // Handle the clear button click
    // Reset the calculator state and clear the display
        currentInput = '';
        previousInput = '';
        operator = '';
        display.innerText = '';  // Clear the display
        console.log('Clear button clicked');
    }
});
  