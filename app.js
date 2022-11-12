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

const bank = [add, subtract, multiply, divide];

const operate = (num1, num2) => {
    return bank[Math.floor(Math.random() * bank.length)](num1, num2);
};

console.log(operate(1, 4));