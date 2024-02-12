//Global Variables
const mainContainer = document.querySelector('.main-container');
let mainTable;

//Library array + default books
const defaultBook = new Book('The Hobbit', 'Tolkien', 201, true);
const defaultBook2 = new Book('Warcraft', 'Blizzard Entertainment', 410, false);
const defaultBook3 = new Book('Dragon Ball', 'Akira Toriyama', 190, true);
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
    let addedBook = new Book(title.value, author.value, pages.value, read.checked);
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
    // createBookData('read', target.read);

    //switch to read
    toggleReadSwitch(target.read);

    //Delete button
    appendDelBtn();
};

//switch to read
function toggleReadSwitch(y) {
    toggleDiv = document.createElement('div');
    toggleDiv.classList.add('read');
    toggleContainer = document.createElement('label');
    toggleItem = document.createElement('input');

    toggleItem.type = 'checkbox';
    mainTable.appendChild(toggleDiv);
    toggleDiv.appendChild(toggleContainer);
    toggleContainer.appendChild(toggleItem);

    //Style
    toggleContainer.classList.add('switch');
    const newSpan = document.createElement('span');
    toggleContainer.appendChild(newSpan);
    newSpan.classList.add('slider', 'round');

    if(y === true) {
        toggleItem.checked = true;
    }
};

//Delete Btn
function appendDelBtn() {
    //create the btn
    const delBtn = document.createElement('span');
    delBtn.classList.add('delete-btn-style');
    mainTable.appendChild(delBtn);
    //Del event listener
    delBtn.addEventListener('click', ()=> {
        const result = delBtn.parentNode;
        const targetTitle = result.querySelector('.title');
        if (confirm(`Delete ${targetTitle.textContent}?`)) {
            mainContainer.removeChild(result);
            //Dont forget to remove in library also
            myLibrary.pop(result)
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