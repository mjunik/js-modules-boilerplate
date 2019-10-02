import * as model from "./model";
import * as view from "./view";

const init = () => view.displayBooks();

const getBooks = () =>  model.getBooks();

export {init, getBooks}