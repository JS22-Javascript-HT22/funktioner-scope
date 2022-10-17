const buttonElem = document.querySelector('#button');

function add(firstNumber, secondNumber) {
    const sum = firstNumber + secondNumber;

    return sum;
}

function showSum(sum) {
    console.log(`Summan är: ${sum}`); // template strings
}

function start() {
    const sumToAdd = add(5, 5);

    showSum(sumToAdd); // Värdet i variabeln (sumToAdd) som vi skickar med
}

start();

buttonElem.addEventListener('click', () => {

});