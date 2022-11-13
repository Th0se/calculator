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
    displayedSequence = displayedSequence + ` / `;
    display.textContent = displayedSequence;
});