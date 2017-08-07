import { FoodOrganizerPage } from './app.po';

describe('food-organizer App', () => {
  let page: FoodOrganizerPage;

  beforeEach(() => {
    page = new FoodOrganizerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
