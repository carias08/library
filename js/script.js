// store book objects here 
let myLibrary = [];
// BOOK CONTAINER
let bookContainer = document.getElementById('book-container');
const myTable = document.getElementById('my-table');
const tBody = document.getElementById('tbody');

// ----------------------MODAL
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
        tableRow.classList.add(`row-${i}`);
    
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

        // console.log(myLibrary[i].isRead, ' :book readdddd')

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

        // console.log(myLibrary[i])
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
        myLibrary[i].id = i;
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







// -------------------------- 

// const removeBtn = document.querySelectorAll('.remove-btn');
// console.log(removeBtn, ' :remove btn');


// removeBtn.forEach(btn => {
//     let index = btn.id;
//     let book = myLibrary[index]
//     for (let i = index; i < myLibrary.length; i++) {
//         if(index ===  i){
//             // myLibrary.splice(index, 1);
//             console.log(index, ' :index')
//             console.log(book, ' :book')
//             console.log(myLibrary, ' :library')
//             // bookContainer.remove();
//         }
//     }
// });

// DONT DELETE UP
// DONT DELETE UP
// DONT DELETE UP

function removeBook(){
    const removeBtn = document.querySelectorAll('.remove-btn');

    myLibrary.forEach(book => {
        removeBtn.forEach(btn => {
            btn.addEventListener('click', function(){
                for (let i = parseInt(book.id); i < myLibrary.length; i++) {
                    let books = document.querySelectorAll(`.row-${i}`)
                    // console.log(myLibrary, 'library outside if statement ')
                    if (book.id === parseInt(btn.id)){
                        console.log(book.id, 'book id')
                        console.log(parseInt(btn.id), 'btn id')
                        console.log(books, 'books[i]')
                        myLibrary.splice(i, 1)
                        // books.style.display = 'none';
                        // books[i].splice(books[i], 1)
                        console.log(myLibrary, 'library if true')
                    } else {
                        console.log('bollooo')
                        console.log(myLibrary, 'library else')
                    }
                }
            })
        })
    })
}

removeBook()

