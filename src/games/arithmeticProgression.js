import launcherGame from '../index.js';

const findProgression = (startNum, step) => {
  const progression = [];

  for (let i = 0; i < 10; i += 1) {
    progression.push(startNum + step * i);
  }
  return progression;
};

const arithmeticProgression = () => {
  const firstNumber = Math.floor(Math.random() * 41);
  const step = Math.floor(Math.random() * 10) + 1;
  const progression = findProgression(firstNumber, step);
  const randomIndex = Math.floor(Math.random() * 10);

  const rightAnswer = String(progression[randomIndex]);

  progression[randomIndex] = '..';

  const question = progression.join(' ');

  return [question, rightAnswer];
};

export default (description) =>
  launcherGame(arithmeticProgression, description);
