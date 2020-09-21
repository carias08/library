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
    this.isRead = false;
}

// function for the add button 
function addBookToLibrary() {
    let title = document.getElementById('title').value;
    let author = document.getElementById('author').value;
    let pages = document.getElementById('pages').value;

    let newBook = new Book(title, author, pages, true);

    
    console.log(newBook.title);
    console.log(newBook.author);
    console.log(newBook.pages);

    myLibrary.push(newBook);

    console.log(myLibrary, ' :my library')
}

// Write a function that loops through the array
// and displays each book on the page.
// You can display them in some sort of table,
// or each on their own “card”. 

// It might help for now to manually add a few books
// to your array so you can see the display.


// LOOP THROUGH ARRAY 
function displayBook(){
    // loop through library array and display books on DOM
}