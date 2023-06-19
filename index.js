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