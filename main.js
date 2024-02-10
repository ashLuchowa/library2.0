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

//Default Book
document.querySelector('.defaultTitle').textContent = `Title: ${defaultBook.title}`;
document.querySelector('.defaultAuthor').textContent = `Author: ${defaultBook.author}`;
document.querySelector('.defaultPages').textContent = `Pages: ${defaultBook.pages}`;
document.querySelector('.defaultRead').textContent = `Read: ${defaultBook.read}`;


//create a new book form
function createNewBook() {
    const newForm = document.createElement('div');
    newForm.classList.add('main-table');
    const mainContainer = document.querySelector('.main-container');
    mainContainer.appendChild(newForm);

    function infoAdded(className, label, value) {
        const data = document.createElement('div');
        newForm.appendChild(data);
        data.classList.add(className);
        data.textContent = `${label}: ${value}`;
    }

    infoAdded('tableTitle', 'Title', title.value);
    infoAdded('tableAuthor', 'Author', author.value);
    infoAdded('tablePages', 'Pages', pages.value);
    infoAdded('tableRead', 'Read', read.value);
}

//Submit button Event Listener
function submitForm(x) {
    x.preventDefault();
    let title = document.getElementById('title');
    let author = document.getElementById('author');
    let pages = document.getElementById('pages');
    let read = document.getElementById('read');
    const addedBook = new Book(title.value, author.value, pages.value, read.checked);
    myLibrary.push(addedBook);
    createNewBook();
    console.log(addedBook);
};

const form = document.getElementById('main-form');
form.addEventListener('submit', submitForm);

//Display Form
const formBtn = document.querySelector('.form-btn');
formBtn.addEventListener('click', () => {
    form.classList.toggle('hide-form');
}); 