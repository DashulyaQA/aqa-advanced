import {Book} from './Book.js'

class EBook extends Book{
    constructor(title, author, year, format){
        super(title, author, year);
        this._format = format
    }

    static fromBook(book, format){
        return new EBook(book.title, book.author, book.year, format)
    }

    get format(){
        return this._format;
    }

     printInfo(){
        super.printInfo()
        console.log(`Format: ${this.format}`)
    }

    set format(format){
        if (typeof format === 'string'){
            this._format = format
        } 
    }
}

export {EBook}