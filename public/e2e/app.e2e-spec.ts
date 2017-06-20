import { AnnonymousAngularPage } from './app.po';

describe('annonymous-angular App', () => {
  let page: AnnonymousAngularPage;

  beforeEach(() => {
    page = new AnnonymousAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
