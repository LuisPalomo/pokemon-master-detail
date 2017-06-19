import { PokemonMasterDetailPage } from './app.po';

describe('pokemon-master-detail App', () => {
  let page: PokemonMasterDetailPage;

  beforeEach(() => {
    page = new PokemonMasterDetailPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
