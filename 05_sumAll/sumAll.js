const sumAll = function(number1, number2) {
    let totalSum = 0;

    if (number1 > number2) {
        [number1, number2] = [number2, number1]; // Troca os valores para garantir que number1 seja o menor
    }

    for (let i = number1; i <= number2; i++) {
        totalSum += i;
    }
    return totalSum;
};
module.exports = sumAll;

