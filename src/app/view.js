import * as controller from './controller';

const displayBooks = () => {
    const addBooksToDom = books => {
        const booksList = document.getElementById('js-books');
        books.forEach(book => {
            const listElement = document.createElement('li');
            listElement.innerText = book.title;
            booksList.appendChild(listElement);
        });
    };

    controller.getBooks()
        .then(books => addBooksToDom(books));
};

export {displayBooks}