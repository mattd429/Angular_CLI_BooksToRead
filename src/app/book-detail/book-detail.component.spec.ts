import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookDetailComponent } from './book-detail.component';

describe('BookDetailComponent', () => {
  let component: BookDetailComponet;
  let fixture: ComponentFixture<BookDetailComponent>;
  
  beforeEach(async()) => {
    TestBed.configureTestingModule({
      // used to declare components is this module
      declarations: [ BookDetailComponent ]
    })
    .compileComonents();
  }));
  
  beforeEach(() => {
    fixture = TestBed.createComponent(BookDetailComponent);
    component = fixture.componentInstance;
    fixture.detechChanges(); 
  });
  
  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
