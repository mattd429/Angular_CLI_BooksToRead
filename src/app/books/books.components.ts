import { Component, OnInIt } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-books',
  templateUrls: './books.components.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInIt {
  books: Book[];
  
  constructor(private bookService: BookService) { }
  
  ngOnInIt() {
    this.getBooks();
    
  }
  
  // retreive books from the service...
  getBooks(): void {
    this.bookService.getBooks()
      .subscribe(books => this.books = books);
  }

}
