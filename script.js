const myLibrary = [];

window.onload = () => {
    loadBookTable(myLibrary);
}

function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.info = function(){
    return this.title + ' by ' + this.author + ', ' + this.pages + ' pages, ' + this.read;
}

function addBookToLibrary(book){
    myLibrary.push(book);
}

function displayLibrary(library){    
    for (let i = 0; i < library.length; i++){
        console.log(`${library[i].title} by ${library[i].author}, ${library[i].pages} pages, ${library[i].read}`);
    }
}

function loadBookTable(bookData){
    const tableBody = document.getElementById('tableBook');
    let dataHtml = ''

    bookData.forEach(book => {
        dataHtml += `<tr><td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.pages}</td>
        <td>${book.read}</td>`;
    });

    
    tableBody.innerHTML = dataHtml;

}

// Dialog box and form event handlers
(() =>{
    const submitButton = document.getElementById("submitNewBook");
})


//hardcoded info for testing

const theHobbit = new Book('The Hobbit', 'J.R.R Tolkien', 295, 'not read yet');
const animalFarm = new Book('Animal Farm', 'George Orwell', 100, 'read');
const atlasShrugged = new Book('Atlas Shrugged', 'Ayn Rand', 1000, 'not read yet');

addBookToLibrary(theHobbit);
addBookToLibrary(animalFarm);
addBookToLibrary(atlasShrugged);

//const holes = new Book('Holes', 'Louis Sachar', 200, 'read');
//addBookToLibrary(holes);