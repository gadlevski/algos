const fs = require('fs');

function getRandomArray(length) {
  const arr = [];
  const numbers = Array.from({ length: length }, (_, i) => i + 1);

  while (numbers.length > 0) {
    const randomIndex = Math.floor(Math.random() * numbers.length);
    arr.push(numbers[randomIndex]);
    numbers.splice(randomIndex, 1);
  }

  return arr;
}

const randomArray = getRandomArray(100);

fs.writeFileSync('./db.json', JSON.stringify(randomArray));
