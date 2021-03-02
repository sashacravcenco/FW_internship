class BookList {
    numberOfReadBooks = 0;
    numberOfUnreadBooks = 0;
    nextToRead = null;
    currentReading = null;
    prevRead = null;
    allBooks = [];

    add(book) {
        if (this.allBooks.length === 0) {
            this.currentReading = book;
        }
        
        this.allBooks.push(book);
        this.nextToRead = this.allBooks[this.numberOfReadBooks + 1];
        this.numberOfUnreadBooks++;
    }

    finishCurrentBook() {
        this.currentReading.isRead = true;
        this.currentReading.readDate = new Date(Date.now());
        this.prevRead = this.currentReading;
        this.currentReading = this.nextToRead;
        this.numberOfReadBooks++;
        this.numberOfUnreadBooks--; 
        if (this.numberOfUnreadBooks === 1) {
            this.nextToRead = null;
        } else {
            this.nextToRead = this.allBooks[this.numberOfReadBooks + 1];
        }
    }

    addAll(books) {
        for (let book of books) {
            this.add(book);
        }
    }

    getByAuthor(author) {
        return this.allBooks.filter(book => book.author === author);
    }

    getByGenre(genre) {
        return this.allBooks.filter(book => book.genre === genre);
    }
}

class Book {
    title;
    genre;
    author;
    isRead = false;
    readDate;

    constructor (title, genre, author) {
        this.title = title;
        this.genre = genre;
        this.author = author;
    }

}

const bookList = new BookList();
const daVinciCode = new Book("The Da Vinci Code", "Crime", "Dan Brown");
const harryPotter = new Book("Harry Potter", "Children's Fiction", "Joan Rowling");
const angelsDemons = new Book("Angels and Demons", "Crime", "Dan Brown");
const twilight = new Book("Twilight","Fiction", "S. Meyer");
const chocolat = new Book("Chocolat", "General Fiction", "J. Harris");
bookList.add(daVinciCode);
console.dir(bookList);
bookList.add(harryPotter);
console.dir(bookList);
bookList.addAll([angelsDemons, twilight, chocolat]);
bookList.finishCurrentBook();
bookList.getByAuthor("Dan Brown");
bookList.getByGenre("Crime");


