import db from './db.json';

let count = 0;

const leanerSearch = (array, item) => {
  for (let i = 0; i < array.length; i++) {
    count += 1;
    if (array[i] === item) {
      return i;
    }
  }
  return null;
};

console.log('индекс элемента', leanerSearch(db, 67));
console.log('количество итераций поиска', count);