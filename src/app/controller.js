import * as model from "./model";
import * as view from "./view";

const init = () => {
    console.log('Controller works!');
    view.displayBooks();
};

const getBooks = () => model.books;

export {init, getBooks}