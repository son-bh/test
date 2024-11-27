import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base-page.page";

export class LoginPage extends BasePage {
  readonly emailAddress: Locator;
  readonly password: Locator;
  readonly loginHeader: Locator;
  readonly loginButton: Locator;

  constructor(page: Page) {
    super(page);
    this.emailAddress = page.locator('input[data-qa="login-email"]');
    this.password = page.locator('input[data-qa="login-password"]');
    this.loginHeader = page.locator("h2", { hasText: "Login to your account" });
    this.loginButton = page.locator("button[type='submit']", {
      hasText: "Login",
    });
  }

  async enterLoginForm(emailAddress: string, password: string): Promise<void> {
    await this.emailAddress.fill(emailAddress);
    await this.password.fill(password);
  }

  async checkNewUserSignupVisible() {
    await this.isElementVisible(
      this.loginHeader,
      "check Login to your account to be visible"
    );
  }

  async clickLoginBtn() {
    await this.loginButton.click();
  }
}
