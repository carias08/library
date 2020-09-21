// All of your book objects are going to be stored in a 
// simple array, so add a function to the script 
// (not the constructor) that can take user’s input and store 
// the new book objects into an array. Your code should look 
// something like this:


// store book objects here 
let myLibrary = [];

function Book(title, author, pages, isRead) {
    // the constructor...
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

// function for the add button 
function addBookToLibrary() {
    let bookContainer = document.getElementById('book-container');

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

// Write a function that loops through the array
// and displays each book on the page.
// You can display them in some sort of table,
// or each on their own “card”. 

//Create new Elements to hold each book card.
function displayBook(){
    for(let i = 0; i < myLibrary.length; i++){
        console.log(myLibrary[i], ' displaaaay')
    }
}
// It might help for now to manually add a few books
// to your array so you can see the display.


