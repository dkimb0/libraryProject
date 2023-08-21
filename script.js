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

addBookToLibrary(theMedium);
addBookToLibrary(illusions);
addBookToLibrary(loveless);
addBookToLibrary(slouching);
addBookToLibrary(onTheRoad);
addBookToLibrary(tropicOfCancer);
addBookToLibrary(loveInTheTime);
addBookToLibrary(storyOfTheEye);
addBookToLibrary(zenMind);
addBookToLibrary(mythOfSisyphus);
addBookToLibrary(bloodMeridian);
addBookToLibrary(sailorWho);
addBookToLibrary(stoner);
addBookToLibrary(crash);
addBookToLibrary(lordJim);
addBookToLibrary(deltaOfVenus);
addBookToLibrary(asILayDying);
addBookToLibrary(nakedLunch);
addBookToLibrary(whiteNoise);
addBookToLibrary(toTheLighthouse);

//const holes = new Book('Holes', 'Louis Sachar', 200, 'read');
//addBookToLibrary(holes);


// Dialog box and form event handlers





