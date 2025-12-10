
import { BasePage } from './BasePage';

export class LoginPage extends BasePage {

  async open() {
    await this.navigate('https://www.saucedemo.com/');
  }

  async login(username: string, password: string) {
    await this.fill('#user-name', username);
    await this.fill('#password', password);
    await this.click('#login-button');
  }

  async assertLoginError() {
    await this.assertVisible('[data-test="error"]');
  }
}
