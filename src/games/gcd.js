import launcherGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const description = 'Find the greatest common divisor of given numbers.';

const getRightAnswer = (number1, number2) => {
  let divisor = 1;
  const maxDivisor = Math.min(number1, number2);

  for (let i = 2; i <= maxDivisor; i += 1) {
    if (number1 % i === 0 && number2 % i === 0) {
      divisor = i;
    }
  }

  return divisor;
};

const getData = () => {
  const firstNumber = getRandomNumber(1, 100);
  const secondNumber = getRandomNumber(1, 100);

  const rightAnswer = getRightAnswer(firstNumber, secondNumber);
  const question = `Question: ${firstNumber} ${secondNumber}`;

  return [question, rightAnswer.toString()];
};

export default () => launcherGame(getData, description);
