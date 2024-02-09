//Library Array
const defaultBook = new Book('The Hobbit', 'Tolkien', 201, true);
const myLibrary = [defaultBook];

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

const addedBook = new Book('Harry Potter', 'Rowling', 510, false);

//Submit button Event Listener
function submitForm(x) {
    x.preventDefault();
    console.log('works');
};

const form = document.getElementById('main-form');
form.addEventListener('submit', submitForm);