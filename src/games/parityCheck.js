import launcherGame from '../index.js';

const isEven = (num) => num % 2 === 0;

const parityCheck = () => {
  const number = Math.floor(Math.random() * 101);

  const rightAnswer = isEven(number) ? 'yes' : 'no';
  const question = `Question: ${number}`;

  return [question, rightAnswer];
};

export default (description) => launcherGame(parityCheck, description);
