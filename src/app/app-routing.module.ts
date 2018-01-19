import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BooksComponent }       from
'./books/books.component';
import { DashboardComponent } from
'./dashboard/dashboard.component';
import { BookDetailComponent } from './book-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  { path: 'detail/:id', component: BookDetailComponent},
  { path: 'books', component: BooksComponent },
  { path: 'dashboard', component: DashboardComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}

