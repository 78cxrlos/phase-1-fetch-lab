function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!

function fetchBooks() {
  return fetch('https://anapioficeandfire.com/api/books')
    .then(response => response.json())
    .then(data => renderBooks(data))
    .catch(error => console.log('Error fetching books:', error));
}

function renderBooks(data) {
  const mainElement = document.querySelector('main');

  data.forEach(book => {
    const titleElement = document.createElement('h2');
    titleElement.textContent = book.name;
    mainElement.appendChild(titleElement);
  });
}

fetchBooks();

  }



function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
  function fetchBooks() {
    fetch('https://anapioficeandfire.com/api/books')
      .then(response => response.json())
      .then(data => renderBooks(data))
      .catch(error => console.log('Error fetching books:', error));
  }
  
});
