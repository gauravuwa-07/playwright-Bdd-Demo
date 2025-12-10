
import { BasePage } from './BasePage';

export class CartPage extends BasePage {
  async getItemCount() {
    return await this.page.locator('.cart_item').count();
  }
  async checkout() {
    await this.click('[data-test="checkout"]');
  }
}
