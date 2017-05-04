import { RpcPage } from './app.po';

describe('rpc App', () => {
  let page: RpcPage;

  beforeEach(() => {
    page = new RpcPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
