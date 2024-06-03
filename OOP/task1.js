import { Book } from './Book.js';
import { EBook } from './EBook.js';

let book1 = new Book('Harry Potter', 'J.K. Rowling', 2015)
let book2 = new Book('Twilight', 'Stephenie Meyer', 2006)
let book3 = new Book('Strengthsfinder 2.0', 'Gallup Press', 2007)


book1.printInfo();
book2.printInfo();
book3.printInfo();

let ebook1 = new EBook('Goodnight Moon', 'HarperFestival', 1991 , 'txt')

ebook1.printInfo(); 

let oldestBook = Book.oldestBook([book1, book2, book3, ebook1]);
console.log(`Oldest book is '${oldestBook.title}' by ${oldestBook.author}, published in ${oldestBook.year}.`)

let ebookFormBook = EBook.fromBook(book1, 'PDF');
ebookFormBook.printInfo()