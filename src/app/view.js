import * as controller from './controller';

const displayBooks = () => {
    const books = controller.getBooks();
    const booksList = document.getElementById('js-books');
    books.forEach(book => {
        const listElement = document.createElement('li');
        listElement.innerText = book.title;
        booksList.appendChild(listElement);
    })
};

export {displayBooks}