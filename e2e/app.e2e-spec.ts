import { ClisamplePage } from './app.po';

describe('clisample App', () => {
  let page: ClisamplePage;

  beforeEach(() => {
    page = new ClisamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
