//Global Variables
const mainContainer = document.querySelector('.main-container');
let mainTable;

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
    mainTable = document.createElement('div');
    mainTable.classList.add('main-table');
    mainContainer.appendChild(mainTable);
    
    //create book data
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

    //Delete button
    appendDelBtn();
};

//Delete Btn
function appendDelBtn() {
    //create the btn
    const delBtn = document.createElement('span');
    delBtn.classList.add('delete-btn-style');
    mainTable.appendChild(delBtn);
    //Del event listener
    delBtn.addEventListener('click', ()=> {
        result = delBtn.parentNode;
        if (confirm('Are you sure?')) {
            mainContainer.removeChild(result);
        }
    });
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