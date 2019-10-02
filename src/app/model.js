let books = [];

const getBooks = () => {
    return fetch('http://localhost:3000/books')
        .then(res => res.json())
        .then(json => books = json)
        .catch(err => console.log('Error while fetching data ', err));
};

export {getBooks}