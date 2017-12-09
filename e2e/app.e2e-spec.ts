import { AppPage } from './app.po';

describe('Angular_CLI_BooksToRead App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });
  
  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Books to Read!');
  });
});
