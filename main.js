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

//create a new book form
function createNewBook() {
    const newForm = document.createElement('div');
    newForm.classList.add('main-table');
    const mainContainer = document.querySelector('.main-container');
    mainContainer.appendChild(newForm);
    const tableTitle = document.createElement('div');
    newForm.appendChild(tableTitle);
    tableTitle.classList.add('mainTitle');
    tableTitle.textContent = `Title: ${title.value}`;
}

//Submit button Event Listener
function submitForm(x) {
    x.preventDefault();
    title = document.getElementById('title');
    author = document.getElementById('author');
    pages = document.getElementById('pages');
    read = document.getElementById('read');
    const addedBook = new Book(title.value, author.value, pages.value, read.checked);
    myLibrary.push(addedBook);
    createNewBook();
    console.log(addedBook);
};

const form = document.getElementById('main-form');
form.addEventListener('submit', submitForm);