import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Book } from './book';
import { BOOKS } from './mock-books';
import { MessagesService } from './message.service';

@Injectable()
export class BookService {
  
  // Inject MessageService into book.service.ts
  constructor(private messageService: MessageService) { }
  
  getBooks(): Observable<Book[]> {
    this.messageService.add('BookService: fetched books');
    return of(BOOKS);
  }
  
}
