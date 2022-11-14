const add = ((num1, num2) => {
    return num1 + num2;
});

const subtract = ((num1, num2) => {
    return num1 - num2;
});

const multiply = ((num1, num2) => {
    return num1 * num2;
});

const divide = ((num1, num2) => {
    return num1 / num2;
});

const operate = (num1, operator, num2) => {
    if (operator === `*`) {
        return multiply(num1, num2);
    } else if (operator === `/`) {
        return divide(num1, num2);
    } else if (operator === `-`) {
        return subtract(num1, num2);
    } else if (operator === `+`) {
        return add(num1, num2);
    };
};


let displayedSequence = ``; /* I decided to put the numbers and operators as a string,
                                which will be displayed on the calculator display, and 
                                calculate the displayed sequence to mimic the way most
                                people will experience the calculator. */


const display = document.querySelector(`#calculatorDisplay`);
display.textContent = displayedSequence;

const deleteButton = document.querySelector(`#deleteButton`);
deleteButton.addEventListener(`click`, () => {
    if (displayedSequence.charAt(displayedSequence.length - 1) === ` `) {
        displayedSequence = displayedSequence.slice(0, -2);
        display.textContent = displayedSequence;
    } else {
        displayedSequence = displayedSequence.slice(0, -1);
        display.textContent = displayedSequence;
    };
});

const resetButton = document.querySelector(`#resetButton`);
resetButton.addEventListener(`click`, () => {
    displayedSequence = ``;
    display.textContent = displayedSequence;
});

const number1 = document.querySelector(`#b1`);
number1.addEventListener(`click`, () => {
    displayedSequence = displayedSequence + `1`;
    display.textContent = displayedSequence;
});

const number2 = document.querySelector(`#b2`);
number2.addEventListener(`click`, () => {
    displayedSequence = displayedSequence + `2`;
    display.textContent = displayedSequence;
});

const number3 = document.querySelector(`#b3`);
number3.addEventListener(`click`, () => {
    displayedSequence = displayedSequence + `3`;
    display.textContent = displayedSequence;
});

const number4 = document.querySelector(`#b4`);
number4.addEventListener(`click`, () => {
    displayedSequence = displayedSequence + `4`;
    display.textContent = displayedSequence;
});

const number5 = document.querySelector(`#b5`);
number5.addEventListener(`click`, () => {
    displayedSequence = displayedSequence + `5`;
    display.textContent = displayedSequence;
});

const number6 = document.querySelector(`#b6`);
number6.addEventListener(`click`, () => {
    displayedSequence = displayedSequence + `6`;
    display.textContent = displayedSequence;
});

const number7 = document.querySelector(`#b7`);
number7.addEventListener(`click`, () => {
    displayedSequence = displayedSequence + `7`;
    display.textContent = displayedSequence;
});

const number8 = document.querySelector(`#b8`);
number8.addEventListener(`click`, () => {
    displayedSequence = displayedSequence + `8`;
    display.textContent = displayedSequence;
});

const number9 = document.querySelector(`#b9`);
number9.addEventListener(`click`, () => {
    displayedSequence = displayedSequence + `9`;
    display.textContent = displayedSequence;
});

const number0 = document.querySelector(`#b0`);
number0.addEventListener(`click`, () => {
    displayedSequence = displayedSequence + `0`;
    display.textContent = displayedSequence;
});

const addition = document.querySelector(`#addition`);
addition.addEventListener(`click`, () => {
    displayedSequence = displayedSequence + ` + `;
    display.textContent = displayedSequence;
});

const substraction = document.querySelector(`#substraction`);
substraction.addEventListener(`click`, () => {
    displayedSequence = displayedSequence + ` - `;
    display.textContent = displayedSequence;
});

const multiplication = document.querySelector(`#multiplication`);
multiplication.addEventListener(`click`, () => {
    displayedSequence = displayedSequence + ` * `;
    display.textContent = displayedSequence;
});

const division = document.querySelector(`#division`);
division.addEventListener(`click`, () => {
    displayedSequence = displayedSequence + ` ÷ `;
    display.textContent = displayedSequence;
});

const result = document.querySelector(`#result`);
result.addEventListener(`click`, () => {
    let processed = displayedSequence.split(` `);
    if (processed.length === 3) {
        let num1 = parseInt(processed[0]);
        let operator = (processed[1]);
        let num2 = parseInt(processed[2]);
        if (operator === `*`) {
            displayedSequence = String(multiply(num1, num2));
            display.textContent = displayedSequence;
        } else if (operator === `+`) {
            displayedSequence = String(add(num1, num2));
            display.textContent = displayedSequence;
        } else if (operator === `-`) {
            displayedSequence = String(subtract(num1, num2));
            display.textContent = displayedSequence;
        } else if (operator === `÷`) {
            if (num2 === 0) {
                displayedSequence = `No, dumass!`;
                display.textContent = displayedSequence;
            } else {
            displayedSequence = String(divide(num1, num2));
            display.textContent = displayedSequence;
            };
        };
    } else {
        let num1 = parseInt(processed[0]);
        let m = 1;
        let operator = processed[m];
        let n = 2;
        let num2 = parseInt(processed[n]);
        while (n < processed.length) {
            if (operator === `+`) {
                num1 = add(num1, num2);
                m = m + 2;
                n = n + 2;
                operator = processed[m];
                num2 = parseInt(processed[n]);
            } else if (operator === `-`) {
                num1 = subtract(num1, num2);
                m = m + 2;
                n = n + 2;
                operator = processed[m];
                num2 = parseInt(processed[n]);
            } else if (operator === `÷`) {
                num1 = divide(num1, num2);
                m = m + 2;
                n = n + 2;
                operator = processed[m];
                num2 = parseInt(processed[n]);
            } else {
                num1 = multiply(num1, num2);
                m = m + 2;
                n = n + 2;
                operator = processed[m];
                num2 = parseInt(processed[n]);
            };
        };
        displayedSequence = String(num1);
        display.textContent = displayedSequence;
    }
});