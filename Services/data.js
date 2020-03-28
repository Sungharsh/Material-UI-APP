export function createData (name, code, dateModified,dateCreated, edit, setDelete){
  return{name, code, dateCreated, dateModified, edit, setDelete}
}

const rows = [
  createData('Sunny', 'sunny@.jarathi.com', 2020-2-8, 2020-2-8,'edit', 'button'),
  createData('William', 'william@smith.com', 2019-2-23, 2019-2-23,'edit', 'button'),
  createData('Ella', 'ella@dean.com', 2019-2-23, 2019-2-23,'edit', 'button'),
  createData('Avery', 'avery@karter.com', 2020-2-8, 2020-2-8,'edit', 'button'),
  createData('James', 'james@hyden.com', 2020-2-8, 2020-2-8,'edit', 'button'),
  createData('Evelyn', 'evelyn@tucker.com', 2020-2-8, 2020-2-8,'edit', 'button'),
  createData('Jakson', 'jakson@grace.com', 2020-2-8, 2020-2-8,'edit', 'button'),
  createData('Rosy', 'rosy@marley.com', 2020-2-8, 2020-2-8,'edit', 'button'),
  createData('Faith', 'faith@harley.com', 2020-2-8, 2020-2-8,'edit', 'button'),
  createData('Holly', 'holly@brooke.com', 2020-2-8, 2020-2-8,'edit', 'button'),
  createData('Ashton', 'ashton@paige.com', 2020-2-8, 2020-2-8,'edit', 'button'),
  createData('Laura', 'laura@tanner.com', 2020-2-8, 2020-2-8,'edit', 'button'),
  createData('Alexis', 'alexis@cash.com', 2020-2-8, 2020-2-8,'edit', 'button'),
  createData('Grace', 'grace@reid.com', 2020-2-8, 2020-2-8,'edit', 'button'),
  createData('Amy', 'amy@jeffrey.com', 2020-2-8, 2020-2-8,'edit', 'button'),
];

export function getData () {
  return rows;
}