import launcherGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';


const isEven = (num) => num % 2 === 0;

const parityCheck = () => {
  const number = getRandomNumber(1, 100);

  const rightAnswer = isEven(number) ? 'yes' : 'no';
  const question = `Question: ${number}`;

  return [question, rightAnswer];
};

export default (description) => launcherGame(parityCheck, description);
