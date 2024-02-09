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

//Submit button Event Listener
function submitForm(x) {
    x.preventDefault();
    title = document.getElementById('title');
    author = document.getElementById('author');
    pages = document.getElementById('pages');
    read = document.getElementById('read');
    const addedBook = new Book(title.value, author.value, pages.value, read.checked);
    myLibrary.push(addedBook);
    console.log(addedBook);
};

const form = document.getElementById('main-form');
form.addEventListener('submit', submitForm);