import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Book } from './book';
import { BOOKS } from './mock-books';
import { MessagesService } from './message.service';

@Injectable()
export class BookService {
  
  constructor() { }
  
  getBooks(): Observable<Book[]> {
    return of(BOOKS);
  }
  
}
