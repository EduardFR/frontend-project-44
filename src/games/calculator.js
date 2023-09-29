import launcherGame from '../index.js';

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
  const firstNumber = Math.floor(Math.random() * 11);
  const secondNumber = Math.floor(Math.random() * 11);

  const operators = ['-', '+', '*'];
  const operatorIndex = Math.floor(Math.random() * 3);

  const operator = operators[operatorIndex];

  const rightAnswer = calculatedAnswer(firstNumber, secondNumber, operator);
  const question = `Question: ${firstNumber} ${operator} ${secondNumber}`;

  return [question, rightAnswer.toString()];
};

export default (description) => launcherGame(calculator, description);
