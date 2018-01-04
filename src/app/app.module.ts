import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModule lives here.
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BookComponents } from './books/books.component';
import { BookDetailComponent } from './book-detail/book-detail.component';
import { BookService } from './book.service.ts';
import { MessageService } from './message.service';
import { MessagesComponent } from './messages/messages.component';
import { AppRoutingModule } from './app-routing.module';
@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BookDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}), // will not work unless PROD.
    FormsModule,
    AppRoutingModule
  ],
  providers: [ BookService ],
  boostrap: [AppComponent]
})
export class AppModule { }
