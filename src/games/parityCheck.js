import launcherGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const description = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => num % 2 === 0;

const getData = () => {
  const number = getRandomNumber(1, 100);

  const rightAnswer = isEven(number) ? 'yes' : 'no';
  const question = `Question: ${number}`;

  return [question, rightAnswer];
};

export default () => launcherGame(getData, description);
