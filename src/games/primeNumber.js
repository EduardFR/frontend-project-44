import launcherGame from '../index.js';
import getRandomNumber from '../getRandomNumber.js';

const isPrime = (num) => {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const primeNumber = () => {
  const randomNumber = getRandomNumber(1, 100);

  const rightAnswer = isPrime(randomNumber) ? 'yes' : 'no';
  const question = `Question: ${randomNumber}`;

  return [question, rightAnswer];
};

export default (description) => launcherGame(primeNumber, description);
