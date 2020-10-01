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
            bookHasRead.innerHTML = "<button class='read-btn' onclick='hasReadUserBtn(e)'>Yes</button>";
        } else {
            bookHasRead.innerHTML = "<button class='read-btn' onclick='hasReadUserBtn(e)'>No</button>";
        }

        tableRow.append(bookTitles);
        tableRow.append(bookAuthors);
        tableRow.append(bookPages);
        tableRow.append(bookHasRead);

        tBody.append(tableRow)
        myTable.append(tbody);
        bookContainer.append(myTable);
    }

    const readBtn = document.querySelectorAll('.read-btn');

    for (let i = 0; i < readBtn.length; i++) {
        readBtn[i].addEventListener('click', function(){
            if(readBtn[i].innerText === 'Yes'){
                return readBtn[i].innerText = 'No'
            } else {
                return readBtn[i].innerText = 'Yes'
            }
        })
    }
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

    // pushing NEW book object to Library for storage 
    myLibrary.push(newBook);

    // loop through library array and display books on DOM Function
    displayBook()
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
            bookHasRead.innerHTML = `<button class='read-user-btn' onclick='hasReadUserBtn()'>Yes</button>`;
        } else {
            bookHasRead.innerHTML = `<button class='read-user-btn' onclick='hasReadUserBtn()'>No</button>`;
        } 
    }

    tableRow.append(bookTitles);
    tableRow.append(bookAuthors);
    tableRow.append(bookPages);
    tableRow.append(bookHasRead);

    tBody.append(tableRow);
    myTable.append(tbody);
    bookContainer.append(myTable); 

    hasReadUserBtn()
}

function hasReadUserBtn(){
    const readUserBtn = document.querySelectorAll('.read-user-btn');

    console.log(readUserBtn)

    readUserBtn.forEach(btn => {
        btn.addEventListener('click', function(){
            console.log(btn.innerText, ' : etargettt')
            if (btn.innerText === 'Yes'){
                return btn.innerText = 'No'
            } else {
                btn.innerText = 'Yes'
            }
        })
    })
}

hasReadUserBtn()

