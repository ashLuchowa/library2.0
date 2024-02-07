//Library Array
const book1 = new Book('The Hobbit', 'Tolkien', 201, true);
const myLibrary = [book1];

//Constructor
function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read;
};

//Add a book function
function addBookToLibrary(bookObject) {
    myLibrary.push(bookObject);
}

const book2 = new Book('Harry Potter', 'Rowling', 510, false);

addBookToLibrary(book2);