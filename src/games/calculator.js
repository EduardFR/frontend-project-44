import launcherGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const description = 'What is the result of the expression?';

const calculatedAnswer = (number1, number2, operator) => {
  switch (operator) {
    case '-':
      return number1 - number2;
    case '+':
      return number1 + number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error('Error operator');
  }
};

const getData = () => {
  const firstNumber = getRandomNumber(0, 10);
  const secondNumber = getRandomNumber(0, 10);

  const operators = ['-', '+', '*'];
  const operatorIndex = getRandomNumber(0, operators.length - 1);

  const operator = operators[operatorIndex];

  const rightAnswer = calculatedAnswer(firstNumber, secondNumber, operator);
  const question = `Question: ${firstNumber} ${operator} ${secondNumber}`;

  return [question, rightAnswer.toString()];
};

export default () => launcherGame(getData, description);
