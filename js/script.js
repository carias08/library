// store book objects here 
let myLibrary = [];
// BOOK CONTAINER
let bookContainer = document.getElementById('book-container');
const myTable = document.getElementById('my-table');
const tBody = document.getElementById('tbody');
// const readBtn = document.querySelectorAll('.read-btn');

// CONSTRUCTOR 
function Book(title, author, pages, isRead) {
    // the constructor...
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
}

// SAMPLE BOOK 

function addSampleBooks(){
    let sleepInSea = new Book('To Sleep In A Sea Of Stars', 'Christopher Paolini', 880, true);
    let solutionsProblems = new Book('Solutions and Other Problems', 'Allie Brosh', 220, false);
    let thursdayMurderClub = new Book('The Thursday Murder Club', 'Richard Osman', 208, true);


    myLibrary.push(sleepInSea, solutionsProblems, thursdayMurderClub);

}
addSampleBooks();

function displaySampleBooks(){
    for (let i = 0; i < myLibrary.length; i++){
        let tableRow = document.createElement('tr');
        tableRow.classList.add('table-row');
    
        let bookTitles = document.createElement('td');
        bookTitles.classList.add(`table-data`);
        let bookAuthors = document.createElement('td');
        bookAuthors.classList.add(`table-data`);
        let bookPages = document.createElement('td');
        bookPages.classList.add(`table-data`);
        let bookHasRead = document.createElement('td');
        bookHasRead.classList.add(`table-data`);


        bookTitles.innerText = myLibrary[i].title
        bookAuthors.innerText = myLibrary[i].author
        bookPages.innerText = myLibrary[i].pages

        console.log(myLibrary[i].isRead, ' :book readdddd')

        if(myLibrary[i].isRead === true){
            bookHasRead.innerHTML = '<button class="read-btn">Yes</button>';
        } else {
            bookHasRead.innerHTML = '<button class="read-btn">No</button>';
        }

        // bookHasRead.innerText = 'yes';

        tableRow.append(bookTitles);
        tableRow.append(bookAuthors);
        tableRow.append(bookPages);
        tableRow.append(bookHasRead);

        tBody.append(tableRow)
        myTable.append(tbody);
        bookContainer.append(myTable);
    }

    // hasReadBtnToggle()
}
displaySampleBooks()




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



    // consoles ------ 

    console.log(myLibrary[0].isRead, ' :book read')







}

// DISPLAY SAMPLE BOOKS 



// **********---------------
// **********---------------
// **********---------------
// **********---------------
// -------------------------
// -------------------------
// -------------------------


function displayBook(){
    let tableRow = document.createElement('tr');
    tableRow.classList.add('table-row');

    let bookTitles = document.createElement('td');
    bookTitles.classList.add(`table-data`);
    let bookAuthors = document.createElement('td');
    bookAuthors.classList.add(`table-data`);
    let bookPages = document.createElement('td');
    bookPages.classList.add(`table-data`);
    let bookHasRead = document.createElement('td');
    bookHasRead.classList.add(`table-data`);

        for (let i = 0; i < myLibrary.length; i++){
            bookTitles.innerText = myLibrary[i].title
            bookAuthors.innerText = myLibrary[i].author
            bookPages.innerText = myLibrary[i].pages
            if(myLibrary[i].isRead === true){
                bookHasRead.innerHTML = '<button class="read-btn">Yes</button>';
            } else {
                bookHasRead.innerHTML = '<button class="read-btn">No</button>';
            } 
        }  

        tableRow.append(bookTitles);
        tableRow.append(bookAuthors);
        tableRow.append(bookPages);
        tableRow.append(bookHasRead);

        tBody.append(tableRow)
        myTable.append(tbody);
        bookContainer.append(myTable);
}


// const readBtn = document.querySelectorAll('.read-btn');


// for (let i = 0; i < myLibrary.length; i++) {
//     readBtn[i].addEventListener('click', function(){
//         console.log('clicked');
//         console.log(readBtn, ' :readBtn');
//         console.log(myLibrary[i].isRead, ' :isRead')
//         // readBtn[i].innerText === 'Yes' ? readBtn[i].innerText = 'No' : readBtn[i].innerText = 'Yes';
//     })
// }

// function hasReadBtn(){
//     for (let i = 0; i < myLibrary.length; i++) {
//         readBtn[i].addEventListener('click', function(){
//             console.log('clicked');
//             console.log(readBtn, ' :readBtn');
//             readBtn[i].innerText === 'Yes' ? readBtn[i].innerText = 'No' : readBtn[i].innerText = 'Yes';
//         })
//     }
// }


const readBtn = document.querySelectorAll('.read-btn');

for (let i = 0; i < readBtn.length; i++) {
    readBtn[i].addEventListener('click', function(){
        if(readBtn[i].innerText === 'Yes'){
            return readBtn[i].innerText = 'No'
        } else {
            return readBtn[i].innerText = 'Yes'
        }
        // readBtn[i].innerText === 'Yes' ? readBtn[i].innerText = 'No' : readBtn[i].innerText = 'Yes';
    })
}
