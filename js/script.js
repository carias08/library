// BOOK OBJECTS
let myLibrary = [];
// DOM BOOK CONTAINER
let bookContainer = document.getElementById('book-container');
const myTable = document.getElementById('my-table');
const tBody = document.getElementById('tbody');

// MODAL
const modalBtn = document.getElementById('add-btn');
const myForm = document.querySelector('.show-form');
const closeBtn = document.querySelector('.close-btn')

modalBtn.addEventListener('click', function(){
    myForm.style.display = 'block';
})

closeBtn.addEventListener('click', function(){
    myForm.style.display = 'none';
})

// CONSTRUCTOR 
function Book(title, author, pages, isRead, id) {
    // the constructor...
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isRead = isRead;
    this.id = id;
}

// SAMPLE BOOK 

function addSampleBooks(){
    let sleepInSea = new Book('To Sleep In A Sea Of Stars', 'Christopher Paolini', 880, true, 1);
    let solutionsProblems = new Book('Solutions and Other Problems', 'Allie Brosh', 220, false, 2);
    let thursdayMurderClub = new Book('The Thursday Murder Club', 'Richard Osman', 208, true, 3);

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

        // remove btn 
        let removeBtn = document.createElement('td');
        removeBtn.classList.add('table-data');


        bookTitles.innerText = myLibrary[i].title
        bookAuthors.innerText = myLibrary[i].author
        bookPages.innerText = myLibrary[i].pages
        myLibrary[i].id = i;

        if(myLibrary[i].isRead === true){
            bookHasRead.innerHTML = "<button class='read-btn' onclick='hasReadUserBtn()'>Yes</button>";
        } else {
            bookHasRead.innerHTML = "<button class='read-btn' onclick='hasReadUserBtn()'>No</button>";
        }

        removeBtn.innerHTML = `<button id=${myLibrary[i].id} class='remove-btn'>Remove</button>`

        tableRow.append(bookTitles);
        tableRow.append(bookAuthors);
        tableRow.append(bookPages);
        tableRow.append(bookHasRead);
        tableRow.append(removeBtn);

        tBody.append(tableRow)
        myTable.append(tbody);
        bookContainer.append(myTable);
    }

    const readBtn = document.querySelectorAll('.read-btn');

    for (let i = 0; i < readBtn.length; i++) {
        readBtn[i].addEventListener('click', function(){
            if(readBtn[i].innerText === 'Yes'){
                readBtn[i].style.backgroundColor = "#E05851";
                return readBtn[i].innerText = 'No'
                
            } else {
                readBtn[i].style.backgroundColor = "#50B894";
                return readBtn[i].innerText = 'Yes'
            }
        })
    }

    // style buttons
    for (let i = 0; i < readBtn.length; i++) {
        if(readBtn[i].innerText === 'Yes'){
            readBtn[i].style.backgroundColor = "#50B894";
            readBtn[i].style.border = "none";
            readBtn[i].style.width = "50px";
            readBtn[i].style.color = "white";
            readBtn[i].style.borderRadius = "2px";
        } else {
            readBtn[i].style.backgroundColor = "#E05851";
            readBtn[i].style.border = "none";
            readBtn[i].style.width = "50px";
            readBtn[i].style.color = "white";
            readBtn[i].style.borderRadius = "2px";
        }
    }

    removeBook()
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

    // remove btn 
    let removeBtn = document.createElement('td');
    removeBtn.classList.add('table-data');

    for (let i = 0; i < myLibrary.length; i++){
        bookTitles.innerText = myLibrary[i].title
        bookAuthors.innerText = myLibrary[i].author
        bookPages.innerText = myLibrary[i].pages
        myLibrary[i].id = i;
        removeBtn.innerHTML = `<button id=${myLibrary[i].id} class='remove-btn'>Remove</button>`;
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
    tableRow.append(removeBtn);

    tBody.append(tableRow);
    myTable.append(tbody);
    bookContainer.append(myTable); 

    hasReadUserBtn()
    removeBook()
}

function hasReadUserBtn(){
    const readUserBtn = document.querySelectorAll('.read-user-btn');

    
    readUserBtn.forEach(btn => {
        btn.addEventListener('click', function(){
            if (btn.innerText === 'Yes'){
                return btn.innerText = 'No'
            } else {
                return btn.innerText = 'Yes'
            }
        })
    })
}

hasReadUserBtn()

// REMOVE BOOK BUTTON 
function removeBook(){
    const removeBtn = document.querySelectorAll('.remove-btn');
    let bookCard = document.querySelectorAll('.table-row');

    removeBtn.forEach(btn => {
        btn.addEventListener('click', function(e){
            let index = e.target.id
            bookCard[index].remove()
            console.log(myLibrary)
            myLibrary.splice(bookCard[index], 1)
        })
    })
}



