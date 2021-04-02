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
            bookHasRead.innerHTML = "<button class='read-btn'>Yes</button>";
        } else {
            bookHasRead.innerHTML = "<button class='read-btn'>No</button>";
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
    let isRead = document.getElementById('read-checkbox').checked;

    // creating new books 
    let newBook = new Book(title, author, pages, isRead);

    // pushing NEW book object to Library for storage 
    myLibrary.push(newBook);

    // loop through library array and display books on DOM Function
    console.log(isRead, ' i am is read')
    displayBook()
}

// Display USER INPUT books 

// ...............
// ...................
// ............


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

    let hasReadChecked = document.getElementById('read-checkbox').checked;
    console.log(hasReadChecked, 'hasReadChecked')




    for (let i = 0; i < myLibrary.length; i++){
        myLibrary[i].isRead = hasReadChecked;
        bookTitles.innerText = myLibrary[i].title
        bookAuthors.innerText = myLibrary[i].author
        bookPages.innerText = myLibrary[i].pages
        bookHasRead.innerText = myLibrary[i].isRead;
        myLibrary[i].id = i;
        removeBtn.innerHTML = `<button id=${myLibrary[i].id} class='remove-btn'>Remove</button>`;

        if(myLibrary[i].isRead === true){
            bookHasRead.innerHTML = "<button class='read-user-btn'>Yes</button>";
        } else {
            bookHasRead.innerHTML = "<button class='read-user-btn'>No</button>";
        }

    }

    tableRow.append(bookTitles);
    tableRow.append(bookAuthors);
    tableRow.append(bookPages);
    tableRow.append(bookHasRead);
    tableRow.append(removeBtn);

    tBody.append(tableRow);

    myTable.append(tBody);
    bookContainer.append(myTable); 

    const readUserBtn = document.querySelectorAll('.read-user-btn');



    removeBook()
}

function hasReadUserBtn(){
    const readUserBtn = document.querySelectorAll('.read-user-btn');

    for (let i = 0; i < readUserBtn.length; i++){
        console.log(readUserBtn[i], 'rUSERBTNN I I I')
        if (readUserBtn[i] === "Yes"){
            readUserBtn[i].style.backgroundColor = "#E05851";
            readUserBtn[i].innerText = 'No'
        } else if (readUserBtn[i] === "No"){
            readUserBtn[i].style.backgroundColor = "#50B894";
            readUserBtn[i].innerText = 'Yes'
        }
    }

    // readUserBtn.forEach(btn => {
    //     console.log(btn, 'i am btn btn tbn')
    //     if (btn.innerText === 'Yes'){
    //         btn.style.backgroundColor = "#E05851";
    //         btn.innerText = 'No'
    //     } else {
    //         btn.style.backgroundColor = "#50B894";
    //         btn.innerText = 'Yes'
    //     }
    // })
}

// hasReadUserBtn()

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



