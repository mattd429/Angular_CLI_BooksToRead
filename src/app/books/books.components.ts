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
  
  onSelected(book: Book): void {
    this.selectedBook = book;
  }
  
  books: Book[];
  
  constructor() { }
  
  ngOnInIt() {
  }

}
