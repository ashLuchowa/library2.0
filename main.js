//Variables
const mainContainer = document.querySelector('.main-container');

//Library Array
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

    createBookData('title', element.title);
    createBookData('author', element.author);
    createBookData('pages', element.pages);
    createBookData('read', element.read);
});

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
    };

    infoAdded('tableTitle', 'Title', title.value);
    infoAdded('tableAuthor', 'Author', author.value);
    infoAdded('tablePages', 'Pages', pages.value);
    if(read.checked === true) {
        infoAdded('tableRead', 'Read', 'Yes');
    } else if(read.checked === false) {
        infoAdded('tableRead', 'Read', 'No');
    }
};

//Submit button Event Listener
function submitForm(x) {
    x.preventDefault();
    const addedBook = new Book(title.value, author.value, pages.value, read.checked);
    myLibrary.push(addedBook);
    createNewBook();
    resetForm();
    hideForm();
    blurBackground();
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