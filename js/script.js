// store book objects here 
let myLibrary = [];

function Book(title, author, pages, isRead) {
    // the constructor...
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

// sample books 

function addSampleBooks(){
    let sleepInSea = new Book('To Sleep In A Sea Of Stars', 'Christopher Paolini', 880, true);
    let solutionsProblems = new Book('Solutions and Other Problems', 'Allie Brosh', 220, false);

    myLibrary.push(sleepInSea, solutionsProblems);

}

addSampleBooks();


// function for the add button 
function addBookToLibrary() {

    // elements values 
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;
    let isRead = document.getElementById('read').checked;

    // creating new books 
    let newBook = new Book(title, author, pages, isRead);

    // logging results --  DELETE LATER --
    console.log(newBook.title);
    console.log(newBook.author);
    console.log(newBook.pages);
    console.log(newBook.isRead);

    // pushing NEW book object to Library for storage 
    myLibrary.push(newBook);

    // logging Library -- DELETE LATER --
    console.log(myLibrary, ' :my library');

    // loop through library array and display books on DOM Function
    displayBook()
}



//Create new Elements to hold each book card.
let bookContainer = document.getElementById('book-container');
// let bookCard = document.querySelector('.book-card');

// DISPLAY SAMPLE BOOKS 

function displaySampleBooks(){

    for (let i = 0; i < myLibrary.length; i++){
        let bookCard = document.createElement('div');
        bookCard.classList.add('book-card');

        let bookTitles = document.createElement('div');
        bookTitles.classList.add(`card`);
        let bookAuthors = document.createElement('div');
        bookAuthors.classList.add(`card`);
        let bookPages = document.createElement('div');
        bookPages.classList.add(`card`);
        let bookHasRead = document.createElement('div');
        bookHasRead.classList.add(`card`);


        bookTitles.innerText += myLibrary[i].title
        bookAuthors.innerText += myLibrary[i].author
        bookPages.innerText += myLibrary[i].pages
        bookHasRead.innerText += 'yes';

        bookCard.append(bookTitles);
        bookCard.append(bookAuthors);
        bookCard.append(bookPages);
        bookCard.append(bookHasRead);

        bookContainer.append(bookCard)
    }
}

displaySampleBooks()


// DISPLAY USER INPUT BOOKS 

function displayBook(){
    let bookCard = document.createElement('div');
    bookCard.classList.add('book-card');

    let bookTitles = document.createElement('div');
    bookTitles.classList.add(`card`);
    let bookAuthors = document.createElement('div');
    bookAuthors.classList.add(`card`);
    let bookPages = document.createElement('div');
    bookPages.classList.add(`card`);
    let bookHasRead = document.createElement('div');
    bookHasRead.classList.add(`card`);

        for (let i = 0; i < myLibrary.length; i++){
            bookTitles.innerText = myLibrary[i].title
            bookAuthors.innerText = myLibrary[i].author
            bookPages.innerText = myLibrary[i].pages
            bookHasRead.innerText = 'yes';
        }

        bookCard.append(bookTitles);
        bookCard.append(bookAuthors);
        bookCard.append(bookPages);
        bookCard.append(bookHasRead);

        bookContainer.append(bookCard)
}





// **********---------------
// **********---------------
// **********---------------
// **********---------------
// -------------------------
// -------------------------
// -------------------------






