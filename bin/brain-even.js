#!/usr/bin/env node
import readlineSync from 'readline-sync';
import cli from '../src/cli.js';

const name = cli();

let count = 0;
console.log('Answer "yes" if the number is even, otherwise answer "no".');
while (count <= 3) {
  const number = Math.floor(Math.random() * 101);
  if (count === 3) {
    count += 1;
    console.log(`Congratulations, ${name}!`);
    break;
  }
  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');
  if (number % 2 === 0 && answer === 'yes') {
    count += 1;
    console.log('Correct!');
  } else if (number % 2 === 0 && answer !== 'yes') {
    console.log('"no" is wrong answer ;(.  Correct answer was "yes".');
    console.log(`Let's try again, ${name}!`);
    break;
  }
  if (number % 2 === 1 && answer === 'no') {
    count += 1;
    console.log('Correct!');
  } else if (number % 2 === 1 && answer !== 'no') {
    console.log('"yes" is wrong answer ;(.  Correct answer was "no".');
    console.log(`Let's try again, ${name}!`);
    break;
  }
}
