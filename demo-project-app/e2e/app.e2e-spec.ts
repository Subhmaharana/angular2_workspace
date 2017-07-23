import { DemoProjectAppPage } from './app.po';

describe('demo-project-app App', () => {
  let page: DemoProjectAppPage;

  beforeEach(() => {
    page = new DemoProjectAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
