import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Read'`, async()) => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Books');
  }));
  it('should render title in a h1 tag', async()) => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanged();
    const compiled = fixture.debugElement.nativeElement;
    expect(complied.querySelector('h1').textContent).toContain('Books to Read!')
  }
