class Book {
    constructor (title, author, year){
        this._title = title,
        this._author = author,
        this._year = year
    }
    
    get title(){
        return this._title;
    }

    get year(){
        return this._year;
    }

    get author(){
        return this._author;
    }

    set title (title){
        if (typeof title === 'string'){
            this._title = title
        } 
    }

    set author (author){
        if (typeof author === 'string'){
            this._author = author
        } 
    }

    set year (year){
        if (typeof year === 'number'){
            this._year = year
        } 
    }

     printInfo(){
        console.log(`Title: ${this._title}, Author: ${this._author}, Year: ${this._year}`)
    } 
    static oldestBook(books){
        return books.reduce((oldest, book) => oldest.year < book.year ? oldest : book); 
    }
}

export {Book}   