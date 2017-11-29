import { LabAccessControlPage } from './app.po';

describe('lab-access-control App', function() {
  let page: LabAccessControlPage;

  beforeEach(() => {
    page = new LabAccessControlPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
