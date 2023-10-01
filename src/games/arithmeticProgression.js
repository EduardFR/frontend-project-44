import launcherGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';


const findProgression = (startNum, step) => {
  const progression = [];

  for (let i = 0; i < 8; i += 1) {
    progression.push(startNum + step * i);
  }
  return progression;
};

const arithmeticProgression = () => {
  const firstNumber = getRandomNumber(0, 40);
  const step = getRandomNumber(1, 10);
  const progression = findProgression(firstNumber, step);
  const randomIndex = getRandomNumber(0, 7);

  const rightAnswer = String(progression[randomIndex]);

  progression[randomIndex] = '..';

  const question = `Question: ${progression.join(' ')}`;

  return [question, rightAnswer];
};

export default (description) => launcherGame(arithmeticProgression, description);
