
import { BasePage } from './BasePage';
import { assertText } from '../utils/assertions';

export class CheckoutPage extends BasePage {

  async enterInfo(first: string, last: string, postal: string) {
    await this.fill('[data-test="firstName"]', first);
    await this.fill('[data-test="lastName"]', last);
    await this.fill('[data-test="postalCode"]', postal);
    await this.click('[data-test="continue"]');
  }

  async finishOrder() {
    await this.click('[data-test="finish"]');
  }

  async assertOrderComplete() {
    await assertText(this.page, '.complete-header', 'Thank you for your order!');
  }
}
