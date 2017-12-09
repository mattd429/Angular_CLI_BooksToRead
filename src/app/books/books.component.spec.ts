import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookComponent } from './books.component';

// Fixture for debugging and testing a component...
describe('BookComponents', () => {
  let component: BooksComponent;
  let fixture: ComponentFixture<BooksComponent>;
  
  // Configures and initializes environment for unit testing and provides methods for creating components and services in unit tests.
  beforeEach(async()) => {
    TestBed.configureTestingModule({
      declarations: [ BooksComponent ]
    })
    .compileComponent();
  }));
  
    beforeEach(() => {
    fixture = TestBed.createComponent(BooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

