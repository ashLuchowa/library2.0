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

//Submit button
const submitBtn = document.getElementById('submitBtn');

submitBtn.addEventListener('click', (x) => {
    x.preventDefault();
    console.log('works');
});
