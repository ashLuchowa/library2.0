const myLibrary = [];

//constructor
function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read;
};

//Default book
const book1 = new Book('The Hobbit', 'Tolkien', 201, true);

//add a book
function addBookToLibrary() {
    myLibrary.push('book1');
}

addBookToLibrary();