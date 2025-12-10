
import { BasePage } from './BasePage';
import { expect } from '@playwright/test';

export class ProductsPage extends BasePage {

  async assertOnProductsPage() {
    await this.assertVisible('.inventory_list');
  }

  async addItem(itemName: string) {
    const item = this.page.locator('.inventory_item').filter({ hasText: itemName });
    await item.locator('button').click();
  }

  async openCart() {
    await this.click('.shopping_cart_link');
  }

  async sortBy(option: string) {
    await this.page.selectOption('.product_sort_container', { label: option });
  }

  async assertPriceSortedAsc() {
    const prices = await this.page.$$eval('.inventory_item_price', els =>
      els
        .map(e => e.textContent?.replace('$', '') ?? '')
        .map(v => parseFloat(v))
        .filter(v => !isNaN(v))
    );
  
    for (let i = 1; i < prices.length; i++) {
      if (prices[i] < prices[i - 1]) {
        throw new Error('Prices are not sorted in ascending order');
      }
    }
  }
  
}
