//INITIALIZE
//initialize library array
const myLibrary = [];

class Book {
    constructor(_title, _author, _pages, _read) {
        this.title = _title;
        this.author = _author;
        this.pages = _pages;
        this.read = _read;
    }

}

//add book to library array
function addBookToLibrary(book, library){
    library.push(book);
}

//delete a book from library array
function deleteBook(index, library){
    return library.splice(index, 1);
}



//load table onto page
function loadBookTable(library){
    const tableBody = document.getElementById('tableBook');
    //set empty table contents
    let dataHtml = ''

    //iteratively add table contents to dataHtml
    //also add data-index and data-type to change status/delete buttons
    library.forEach((book, index) => {
        dataHtml += `<tr><td>${book.title}</td>
        <td>${book.author}</td>
        <td class="rightColumn">${book.pages}</td>
        <td class="centerColumn">${book.read}</td>
        <td class="centerColumn"><button class="changeButton" data-index="${index}" data-type='change'>📖</button></td>
        <td class="centerColumn"><button class="deleteButton" data-index="${index}" data-type="delete">🗑️</button></td>`;
    });

    //set table to show dataHtml table contents
    tableBody.innerHTML = dataHtml;

    //query select nodelists of all change/delete buttons
    let listChangeButton = document.querySelectorAll('.changeButton');
    let listDeleteButton = document.querySelectorAll('.deleteButton');
    
    //for every button, set a event listener

    for (i = 0; i < listChangeButton.length; i++){
        buttonListener(listChangeButton[i], library);
    }

    for (i = 0; i < listDeleteButton.length; i++){
        buttonListener(listDeleteButton[i], library);
    }

}

//add click event listener to each button
//for both change and delete buttons
function buttonListener(button, library){
    button.addEventListener("click", () =>{
        if (button.dataset.type === 'change'){
            if (library[button.dataset.index].read === 'Y'){
                library[button.dataset.index].read = 'N';
            }else{
                library[button.dataset.index].read = 'Y';
            }
            loadBookTable(library);
        }else{
            deleteBook(button.dataset.index, library);
            loadBookTable(library);
        }
    })
}

//load table upon opening page
window.onload = () => {
    loadBookTable(myLibrary);
}




//DIALOG BOX
// initialize buttons for dialog
const openButton = document.getElementById("newBookButton");
const submitButton = document.getElementById("submitNewBook");
const cancelButton = document.getElementById("cancelNewBook");
const dialog = document.getElementById("newBookDialog");
const inputs = document.querySelectorAll('input');

//open dialog box for adding new books
openButton.addEventListener("click", () => {
    dialog.showModal();
});

//submit new book in dialog box
submitButton.addEventListener("click", () =>{
    let newTitle = document.getElementById("title");
    let newAuthor = document.getElementById("author");
    let newPages = document.getElementById("pages");
    let newRead = document.getElementById("read");


    //create new Book object from form inputs
    const newBook = new Book(newTitle.value, newAuthor.value, newPages.value, newRead.value);

    addBookToLibrary(newBook,myLibrary);
    loadBookTable(myLibrary);
    clearForm(inputs)
    
})


//cancel out of new book dialog box
cancelButton.addEventListener("click", () =>{
    dialog.close();
    clearForm(inputs);
});

//clears form inputs
function clearForm(inputs){
    inputs.forEach(input =>input.value = '');
}














//hardcoded info for testing

const theMedium = new Book('The Medium is the Massage', 'Marshall McLuhan & Quentin Fiore', 159, 'Y');
const illusions = new Book('Illusions', 'Richard Bach', 192, 'Y');
const loveless = new Book('Loveless', 'Mike McGonigal', 119, 'Y');
const slouching = new Book('Slouching Towards Bethlehem', 'Joan Didion', 236, 'Y');
const onTheRoad = new Book('On The Road', 'Jack Kerouac', 254, 'Y');
const tropicOfCancer = new Book('Tropic of Cancer', 'Henry Miller', 318, 'Y');
const loveInTheTime = new Book('Love in the Time of Cholera', 'Gabriel Garcia Marquez', 348, 'Y');
const storyOfTheEye = new Book('Story of the Eye', 'Georges Bataille', 126, 'Y');
const zenMind = new Book('Zen Mind, Beginner\'s Mind', 'D.T Suzuki', 138, 'Y');
const mythOfSisyphus = new Book('The Myth of Sisyphus', 'Albert Camus', 212, 'Y');
const bloodMeridian = new Book('Blood Meridian', 'Cormac McCarthy', 353, 'Y');
const sailorWho = new Book('The Sailor Who Fell From Grace With the Sea', 'Yukio Mishima', 181, 'Y');
const stoner = new Book('Stoner', 'John Williams', 278, 'Y');
const crash = new Book('Crash', 'J.G. Ballard', 224, 'Y');
const lordJim = new Book('Lord Jim', 'Joseph Conrad', 271, 'N');
const deltaOfVenus = new Book('Delta of Venus', 'Anaïs Nin', 268, 'N');
const asILayDying = new Book('As I Lay Dying', "William Faulkner", 267, 'N');
const nakedLunch = new Book('Naked Lunch', 'William S. Burroughs', 232, 'N');
const whiteNoise = new Book('White Noise', 'Don DeLillo', 326, 'N');
const toTheLighthouse = new Book('To the Lighthouse', 'Virginia Woolf', 209, 'N');

addBookToLibrary(theMedium, myLibrary);
addBookToLibrary(illusions, myLibrary);
addBookToLibrary(loveless, myLibrary);
addBookToLibrary(slouching, myLibrary);
addBookToLibrary(onTheRoad, myLibrary);
addBookToLibrary(tropicOfCancer, myLibrary);
addBookToLibrary(loveInTheTime, myLibrary);
addBookToLibrary(storyOfTheEye, myLibrary);
addBookToLibrary(zenMind, myLibrary);
addBookToLibrary(mythOfSisyphus, myLibrary);
addBookToLibrary(bloodMeridian, myLibrary);
addBookToLibrary(sailorWho, myLibrary);
addBookToLibrary(stoner, myLibrary);
addBookToLibrary(crash, myLibrary);
addBookToLibrary(lordJim, myLibrary);
addBookToLibrary(deltaOfVenus, myLibrary);
addBookToLibrary(asILayDying, myLibrary);
addBookToLibrary(nakedLunch, myLibrary);
addBookToLibrary(whiteNoise, myLibrary);
addBookToLibrary(toTheLighthouse, myLibrary);