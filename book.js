
const bookLibrary = [];
function Book(title, author, pages, id) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.id = id;
}

function addBookToLibrary(...book) {
    return bookLibrary.push(...book);
}
const firstBook = new Book('Pragmatic Programmer', 'Author not known', 138);
const secondBook = new Book('Systematic Mathematics', 'Author not known', 270);
addBookToLibrary(firstBook, secondBook);
console.log(bookLibrary)
