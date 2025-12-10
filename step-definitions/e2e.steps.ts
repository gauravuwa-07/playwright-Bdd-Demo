
import { Given, When, Then, BeforeAll, AfterAll } from '@cucumber/cucumber';
import { chromium, Browser, Page } from 'playwright';

import { LoginPage } from '../pages/LoginPage';
import { ProductsPage } from '../pages/ProductsPage';
import { CartPage } from '../pages/CartPage';
import { CheckoutPage } from '../pages/CheckoutPage';

let browser: Browser;
let page: Page;

let loginPage: LoginPage;
let productsPage: ProductsPage;
let cartPage: CartPage;
let checkoutPage: CheckoutPage;

BeforeAll(async () => {
  browser = await chromium.launch({ headless: false, slowMo: 500 });
  const context = await browser.newContext();
  page = await context.newPage();

  loginPage = new LoginPage(page);
  productsPage = new ProductsPage(page);
  cartPage = new CartPage(page);
  checkoutPage = new CheckoutPage(page);
});

AfterAll(async () => {
  await browser.close();
});

Given('I open the Sauce Demo login page', async () => {
  await loginPage.open();
});

When('I login with username {string} and password {string}', async (u, p) => {
  await loginPage.login(u, p);
});

Then('I should see the products page', async () => {
  await productsPage.assertOnProductsPage();
});

Then('I should see a login error message', async () => {
  await loginPage.assertLoginError();
});

When('I add items {string} to cart', async (csv) => {
  const items = csv.split(',').map((i: string) => i.trim());
  ;
  for (const item of items) await productsPage.addItem(item);
});

When(
  'I go to cart and checkout with user details {string},{string},{string}',
  async (f, l, p) => {
    await productsPage.openCart();
    await cartPage.checkout();
    await checkoutPage.enterInfo(f, l, p);
    await checkoutPage.finishOrder();
  }
);

Then('I should see the order complete page', { timeout: 20000 }, async () => {
  await checkoutPage.assertOrderComplete();
});

When('I sort items by {string}', async (opt) => {
  await productsPage.sortBy(opt);
});

Then('items should be sorted by price ascending', async () => {
  await productsPage.assertPriceSortedAsc();
});
