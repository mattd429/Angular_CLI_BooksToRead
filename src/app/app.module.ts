import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // <-- NgModule lives here.
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BookComponents } from './books/books.component';
import { BookService } from './book.service.ts';
@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BookDetailComponent
  ],
  imports: [
    BrowserModule,
    ServiceWorkerModule.register('/ngsw-worker.js', {enabled: environment.production}), // will not work unless PROD.
    FormsModule
  ],
  providers: [ BookService ],
  boostrap: [AppComponent]
})
export class AppModule { }
