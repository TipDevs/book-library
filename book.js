//global variables
let bookName = document.querySelector('.book-name'),
    authorName = document.querySelector('.author-name'),
    pageNumber = document.querySelector('.pages'),
    setBookBtn = document.querySelector('#info-setter'),
    bookContainer = document.querySelector('main');

// new book object creator
let newBook = '';

// book library storage
const bookLibrary = [];

// book constructor
function Book(title, author, pages, id) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.id = id;
}

// book Id generator
Book.prototype.bookId = function() {
    this.id = crypto.randomUUID();
    
}

// book card to display the book info on the webpage
Book.prototype.bookCard = function () {
    // book card dom element and its attributes
    let bookCard = document.createElement('div');
    bookCard.classList.add('book-card');
    // append book identifier dom element and its attributes to book card dom element
    let bookIdentifier = document.createElement('p');
    bookIdentifier.textContent = `${this.id}`
    bookIdentifier.classList.add('bookIdentity')
    bookCard.appendChild(bookIdentifier)
    // append book title dom element and its attributes to book card dom element
    let bookTitle = document.createElement('p');
    bookTitle.textContent = `Book Title: ${this.title}`;
    bookTitle.classList.add('bookInfo')
    bookCard.appendChild(bookTitle);
    // append book author dom element and its attributes to book card dom element
    let bookAuthor = document.createElement('p');
    bookAuthor.textContent = `Book Author: ${this.author}`;
    bookAuthor.classList.add('bookInfo')
    bookCard.appendChild(bookAuthor);
    // append book pages dom element and its attributes to book card dom element
    let bookPages = document.createElement('p');
    bookPages.textContent = `Book Pages: ${this.pages}`;
    bookPages.classList.add('bookInfo')
    bookCard.appendChild(bookPages);
    // append book delete button dom element and its attributes to book card dom element
    let deleteBook = document.createElement('button');
    deleteBook.classList.add('deleteBTN');
    deleteBook.setAttribute('id', this.id);
    deleteBook.textContent = 'Delete';
    bookCard.appendChild(deleteBook);
    // append book card dom element to book container html element
    bookContainer.appendChild(bookCard);
    deleteBook.addEventListener('click', function () {
        bookCard.remove();
        for (let i = 0; i < bookLibrary.length; i++) {
            if (deleteBook.id === bookLibrary[i].id) {
                bookLibrary.splice(i, i + 1);
            }
        }
    })
}

// function that add all book added to book library
function addBookToLibrary(...book) {
    return bookLibrary.push(...book)
}

// button that get the book info from user input to create new books
setBookBtn.addEventListener('click', function () {
    // throws an error if book already exist in the book library
    for ( let books of bookLibrary) {
        if (books.title === bookName.value &&
            books.author === authorName.value) {
            return alert('Book already exist');
        }
    }
    if (bookName.value === '' || authorName.value === '' || pageNumber.value === '') {
        alert('Must provide all information about the book to added')
    }

    else {
        newBook = new Book(bookName.value,
            authorName.value, pageNumber.value);
        newBook.bookId();
        addBookToLibrary(newBook);
        newBook.bookCard();
    }
});