//Global Variables
const mainContainer = document.querySelector('.main-container');

//Library array + default books
const defaultBook = new Book('The Hobbit', 'Tolkien', 201, 'Yes');
const defaultBook2 = new Book('Warcraft', 'Blizzard Entertainment', 410, 'No');
const defaultBook3 = new Book('Nunuko', 'Akimoto', 190, 'Yes');
const myLibrary = [defaultBook, defaultBook2, defaultBook3];

//Constructor
function Book(title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read;
};

// //Delete Btn
// function deleteTableRow() {
//     const delBtn = document.createElement('span');
//     delBtn.classList.add('.delete-btn-style');

//     const mainTable = document.querySelectorAll('.main-table');
//     mainTable.appendChild(delBtn);
// }

//Loop myLibrary Array
myLibrary.forEach((element) => {
    createNewBook(element);
});

//Submit button Event Listener
function submitForm(x) {
    x.preventDefault();
    const addedBook = new Book(title.value, author.value, pages.value, read.checked);
    myLibrary.push(addedBook);
    createNewBook(addedBook);
    resetForm();
    hideForm();
    blurBackground();
};

//Create a new book
function createNewBook(target) {
    const mainTable = document.createElement('div');
    mainTable.classList.add('main-table');
    mainContainer.appendChild(mainTable);
    
    //create Book data
    function createBookData(className, value) {
        const item = document.createElement('div');
        item.classList.add(className);
        mainTable.appendChild(item);
        item.textContent = value;
    };

    createBookData('title', target.title);
    createBookData('author', target.author);
    createBookData('pages', target.pages);
    createBookData('read', target.read);
};

const form = document.getElementById('main-form');
form.addEventListener('submit', submitForm);

//Display Form
const formBtn = document.querySelector('.form-btn');
formBtn.addEventListener('click', () => {
    form.classList.toggle('hide-form');
    blurBackground();
});

//Hide Form()
function hideForm() {
    form.classList.add('hide-form');
};

//Blur background()
function blurBackground() {
    const mainBody = document.querySelector('.main-container');
    mainBody.classList.toggle('opacity-bg');
};

//Reset Form
function resetForm() {
    title.value = '';
    author.value = '';
    pages.value = '';
    read.value = '';
};