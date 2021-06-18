let booksHTML = document.getElementById('books');
let booksBtn = document.getElementById('books-btn');
let booksInput = document.getElementById('books-input');
let charactersHTML = document.getElementById('characters');
let charactersBtn = document.getElementById('characters-btn');
let charactersInput = document.getElementById('characters-input');
let housesHTML = document.getElementById('houses');
let housesBtn = document.getElementById('houses-btn');
let housesInput = document.getElementById('houses-input');

const urlBooks = 'https://anapioficeandfire.com/api/books/';
const urlCharacters = 'https://anapioficeandfire.com/api/characters/';
const urlHouses = 'https://anapioficeandfire.com/api/houses/';


async function getData(url, num) {
  let dataJSON = await fetch(url + num);
  let data = await dataJSON.json();
  return data;
}


booksBtn.addEventListener('click', async _ => {
  if (booksInput.value === '') return;
  let number = booksInput.value;
  let bookInfo = await getData(urlBooks, number);
  
  console.log(bookInfo);
  
  booksHTML.innerHTML =  `
    <p>Название: ${bookInfo.name}</p>
    <p>Авторы: ${bookInfo.authors.toString()}</p>
    <p>Кол-во персонажей: ${bookInfo.characters.length}</p>
    <p>Кол-во страниц: ${bookInfo.numberOfPages}</p>
  `;
  booksInput.value = '';
});
housesBtn.addEventListener('click', async _ => {
  if (housesInput.value === '') return;
  let number = housesInput.value;
  let houseInfo = await getData(urlHouses, number);
  
  housesHTML.innerHTML =  `
    <p>Название дома: ${houseInfo.name}</p>
    <p>Регион дома: ${houseInfo.region}</p>
  `;
  housesInput.value = '';
});

charactersBtn.addEventListener('click', async _ => {
  if (charactersInput.value === '') return;
  let number = charactersInput.value;
  let characterInfo = await getData(urlCharacters, number);
  
  console.log(characterInfo);
  
  charactersHTML.innerHTML =  `
    <p>Имя персонажа: ${characterInfo.name}</p>
    <p>Пол: ${characterInfo.gender}</p>
    <p>Союзники: ${characterInfo.aliases.toString()}</p>
  `;
  charactersInput.value = '';
});
