'use strict'

let myLibrary= []; 

function Book(title, author, pages, description, isRead) {
    this.title = title; 
    this.author = author; 
    this.pages = pages; 
    this.description = description; 
    this.isRead = isRead;
}

function addBookToLibrary(book) {
    myLibrary.push(book);
}

let book = new Book("title", "some Author", 234, "dskjfd", true); 
addBookToLibrary(book); 

console.log(myLibrary[0]);

let bookInput = document.createElement('form'); 
let main = document.getElementById('main');
bookInput.style = "display: flex; flex-direction: column; justify-content: center; align-items:center; gap:3%; position: absolute; top: 25vh; align-self:center; border: solid black 1px; border-radius: 15px; width: 25%; height: 40%; background: #fff7ed;";


let addBookBtn = document.getElementById('new-book'); 

let html = `

    <input type="text" name="title" id="title" placeholder="title">
    <input type="text" name="author" id="author" placeholder="author">
    <input type="number" name="pages" id="pages" min="1" placeholder="number of pages">
    <textarea  id="description" placeholder="describe the book..." name="description"></textarea>
    <div>
        <label for="isRead">Have you read it?</label>
        <input type="checkbox" name="isRead" id="isRead">
    </div>

    <button type="submit" id="submit-button">Add Book</button>

`;

bookInput.insertAdjacentHTML('afterbegin', html);

bookInput.addEventListener("submit", (event) => {
    event.preventDefault();
    
    const title = bookInput.elements['title'].value; 
    const author = bookInput.elements['author'].value;
    const pages = bookInput.elements['pages'].value;
    const description = bookInput.elements['description'].value; 
    const isRead = bookInput.elements['isRead'].checked; 

    const newBook = new Book(title, author, pages, description, isRead); 
    myLibrary.push(newBook);
    console.log(newBook);

    document.body.removeChild(bookInput);

    const bookHTML = `
    <div id=${myLibrary.length}>
        <h2>${title}</h2>
        <h3>${author}</h3>
        <p>${description}</p>
        <button id="isRead${myLibrary.length}" style="background-color: ${isRead? "lightgreen" : "red"}">${isRead? "Read": "not Read"}</button>
        <button id="delete${myLibrary.length}" style ="background-color: red;">Delete Book</button>
    </div>
`;

    main.insertAdjacentHTML('afterbegin', bookHTML);
    
    let btn = document.getElementById(`isRead${myLibrary.length}`);
    btn.addEventListener("click", () => {
        console.log(btn.textContent);
        if(btn.textContent == "Read") {
            btn.style.backgroundColor = "red";
            btn.textContent = "Not Read"; 
        }
        else {
            btn.style.backgroundColor = "lightgreen"; 
            btn.textContent = "Read"; 
        }
    });

    let deleteBtn = document.getElementById(`delete${myLibrary.length}`);
    deleteBtn.addEventListener("click", () => {
        console.log(deleteBtn.parentElement);
        const btnNum = deleteBtn.parentElement.getAttribute('id');
        const bookToDelete = document.getElementById(btnNum);
        main.removeChild(bookToDelete);
        
    });
    bookInput.reset();

});

addBookBtn.addEventListener("click", () => {
    
    document.body.appendChild(bookInput);
});