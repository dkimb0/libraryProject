//initialize library array
const myLibrary = [];

// initialize buttons for dialog
const openButton = document.getElementById("newBookButton")
const submitButton = document.getElementById("submitNewBook");
const cancelButton = document.getElementById("cancelNewBook");
const dialog = document.getElementById("newBookDialog");

//makes table load on opening page
window.onload = () => {
    loadBookTable(myLibrary);
}

//open/close dialog box
openButton.addEventListener("click", () => {
    dialog.showModal();
});

submitButton.addEventListener("click", () =>{
    let newTitle = document.getElementById("title");
    let newAuthor = document.getElementById("author");
    let newPages = document.getElementById("pages");
    let newRead = document.getElementById("read");
    console.log(newRead.value);

    const newBook = new Book(newTitle.value, newAuthor.value, newPages.value, newRead.value);
    console.log(newBook);

    addBookToLibrary(newBook);

    loadBookTable(myLibrary);


})

cancelButton.addEventListener("click", () =>{
    dialog.close();
});


//Book object
function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

//fxn to add book to library array
function addBookToLibrary(book){
    myLibrary.push(book);
}



function deleteBook(index){
    return myLibrary.splice(index, 1);
}


// function displayLibrary(library){    
//     for (let i = 0; i < library.length; i++){
//         console.log(`${library[i].title} by ${library[i].author}, ${library[i].pages} pages, ${library[i].read}`);
//     }
// }

function loadBookTable(bookData){
    const tableBody = document.getElementById('tableBook');
    let dataHtml = ''

    bookData.forEach((book, index) => {
        dataHtml += `<tr><td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.pages}</td>
        <td>${book.read}</td>
        <td><button class="changeButton" data-index="${index}" data-type='change'>Change Read</button></td>
        <td><button class="deleteButton" data-index="${index}" data-type="delete">Delete</button></td>`;


    });

    

    tableBody.innerHTML = dataHtml;

    let listChangeButton = document.querySelectorAll('.changeButton');
    let listDeleteButton = document.querySelectorAll('.deleteButton');
    listChangeButton.forEach(buttonListener);
    listDeleteButton.forEach(buttonListener);



}

function buttonListener(button){
    button.addEventListener("click", () =>{
        if (button.dataset.type === 'change'){
            console.log(myLibrary[button.dataset.index].read);
            if (myLibrary[button.dataset.index].read === 'Y'){
                myLibrary[button.dataset.index].read = 'N';
            }else{
                myLibrary[button.dataset.index].read = 'Y';
            }
            loadBookTable(myLibrary);
        }else{
            deleteBook(button.dataset.index);
            loadBookTable(myLibrary);
        }
    })
}



//hardcoded info for testing

const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', 295, 'N');
const animalFarm = new Book('Animal Farm', 'George Orwell', 100, 'Y');
const atlasShrugged = new Book('Atlas Shrugged', 'Ayn Rand', 1000, 'N');

addBookToLibrary(theHobbit);
addBookToLibrary(animalFarm);
addBookToLibrary(atlasShrugged);

//const holes = new Book('Holes', 'Louis Sachar', 200, 'read');
//addBookToLibrary(holes);


// Dialog box and form event handlers





