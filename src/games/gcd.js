import launcherGame from '../index.js';

const showRightAnswer = (number1, number2) => {
  let divisor = 1;
  const maxDivisor = Math.min(number1, number2);

  for (let i = 2; i <= maxDivisor; i += 1) {
    if (number1 % i === 0 && number2 % i === 0) {
      divisor = i;
    }
  }

  return divisor;
};

const gcd = () => {
  const firstNumber = Math.floor(Math.random() * 100) + 1;
  const secondNumber = Math.floor(Math.random() * 100) + 1;

  const rightAnswer = showRightAnswer(firstNumber, secondNumber);
  const question = `Question: ${firstNumber} ${secondNumber}`;

  return [question, rightAnswer.toString()];
};

export default (description) => launcherGame(gcd, description);
