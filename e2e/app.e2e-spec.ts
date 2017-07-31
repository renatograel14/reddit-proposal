import { ReggitPage } from './app.po';

describe('reddit App', () => {
  let page: ReggitPage;

  beforeEach(() => {
    page = new ReggitPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
