import launcherGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';


const calculatedAnswer = (number1, number2, operator) => {
  if (operator === '-') {
    return number1 - number2;
  }
  if (operator === '+') {
    return number1 + number2;
  }
  if (operator === '*') {
    return number1 * number2;
  }
  return 'Error';
};

const calculator = () => {
  const firstNumber = getRandomNumber(0, 10);
  const secondNumber = getRandomNumber(0, 10);

  const operators = ['-', '+', '*'];
  const operatorIndex = getRandomNumber(0, operators.length - 1);

  const operator = operators[operatorIndex];

  const rightAnswer = calculatedAnswer(firstNumber, secondNumber, operator);
  const question = `Question: ${firstNumber} ${operator} ${secondNumber}`;

  return [question, rightAnswer.toString()];
};

export default (description) => launcherGame(calculator, description);
