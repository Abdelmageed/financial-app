import { FinancialAppPage } from './app.po';

describe('financial-app App', () => {
  let page: FinancialAppPage;

  beforeEach(() => {
    page = new FinancialAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
