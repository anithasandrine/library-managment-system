// Define the library object to store books
const library = {
    books: [],
    // Function to add books to the library
    addBook: function(title, author) {
        const book = {
            title: title,
            author: author,
            available: true
        };
        this.books.push(book);
        console.log(`${title} by ${author} has been added to the library.`);
    },
    // Function to display available books
    displayAvailableBooks: function() {
        console.log("Available Books:");
        this.books.forEach(book => {
            if (book.available) {
                console.log(`${book.title} by ${book.author}`);
            }
        });
    },
    // Function to borrow a book
    borrowBook: function(title) {
        const book = this.books.find(book => book.title === title);
        if (!book) {
            console.log(`${title} is not available in the library.`);
        } else if (!book.available) {
            console.log(`${title} is already borrowed.`);
        } else {
            book.available = false;
            console.log(`${title} has been borrowed.`);
        }
    },
    // Function to return a book
    returnBook: function(title) {
        const book = this.books.find(book => book.title === title);
        if (!book) {
            console.log(`${title} is not a valid book.`);
        } else if (book.available) {
            console.log(`${title} is already in the library.`);
        } else {
            book.available = true;
            console.log(`${title} has been returned.`);
        }
    }
};

// Add some books to the library
library.addBook("The Great Gatsby", "F. Scott Fitzgerald");
library.addBook("To Kill a Mockingbird", "Harper Lee");
library.addBook("1984", "George Orwell");

// Display available books
library.displayAvailableBooks();
// Borrow a book
library.borrowBook("The Great Gatsby");
library.borrowBook("To Kill a Mockingbird");

// Return a book
library.returnBook("The Great Gatsby");

// Display available books again
library.displayAvailableBooks();


const borrow = (bookName, holder) => {
    // Find the book in the library
    const book = library.find(book => book.title === bookName);

    // Check if the book exists
    if (!book) {
        console.log('That book does not exist in the library.');
        return;
    }

    // Check if the book is available
    if (!book.availability) {
        console.log('Sorry, that book is currently unavailable.');
        return;
    }

    // Update book availability and holder
    book.availability = false;
    book.holder = holder;
    console.log(`The book "${bookName}" has been borrowed by ${holder}.`);
}

