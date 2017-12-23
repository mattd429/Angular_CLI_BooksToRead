import { Component, OnInIt } from '@angular/core';
import { Book } from '../book';
import { BookService } from '../book.service';

@Component({
  selector: 'app-books',
  templateUrls: './books.components.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInIt {
  selectedBook: Book;
  books: Book[];
  
  constructor(private bookService: BookService) { }
  
  ngOnInIt() {
    
  }
  
  onSelected(book: Book): void {
    this.selectedBook = book;
  }
  
  // retreive books from the service...
  getBooks(): void {
    this.bookService.getBooks()
      .subscribe(books => this.books = books);
  }

}
