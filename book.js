//global variables
let bookName = document.querySelector('.book-name'),
    authorName = document.querySelector('.author-name'),
    pageNumber = document.querySelector('.pages'),
    setBookBtn = document.querySelector('#info-setter'),
    bookContainer = document.querySelector('main');

const bookLibrary = [];

function Book(title, author, pages, id) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.id = id;
}
Book.prototype.bookId = function() {
    this.id = crypto.randomUUID();
}
Book.prototype.bookCard = function () {
        let bookCard = document.createElement('div');
        bookCard.classList.add('book-card');
        let bookTitle = document.createElement('p');
        bookTitle.textContent = `Book Title: ${this.title}`;
        bookCard.appendChild(bookTitle);
        let bookAuthor = document.createElement('p');
        bookAuthor.textContent = `Book Author: ${this.author}`;
        bookCard.appendChild(bookAuthor);
        let bookPages = document.createElement('p');
        bookPages.textContent = `Book Pages: ${this.pages}`;
        bookCard.appendChild(bookPages);
        bookContainer.appendChild(bookCard);
}
function addBookToLibrary(...book) {
    bookLibrary.push(...book);
}
setBookBtn.addEventListener('click', function () {
    
    
})

const firstBook = new Book("Men's Rage", 'Habeeb Abdullahi', 98);
firstBook.bookId();
const secondBook = new Book('Moment of Happiness', 'Habeeb Abdullahi', 138);
secondBook.bookId();
const thirdBook = new Book('The crazy programmer', 'Habeeb Abdullahi', 215);
thirdBook.bookId();

addBookToLibrary(firstBook, secondBook, thirdBook);
firstBook.bookCard();
secondBook.bookCard();
thirdBook.bookCard();
console.log(bookLibrary);