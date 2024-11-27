import { expect, Locator, Page } from "@playwright/test";
import { BasePage } from "./base-page.page";

export class RegisterPage extends BasePage {
  readonly username: Locator;
  readonly emailAddress: Locator;
  readonly title: Locator;
  readonly name: Locator;
  readonly email: Locator;
  readonly password: Locator;
  readonly day: Locator;
  readonly month: Locator;
  readonly year: Locator;
  readonly signupButton: Locator;
  readonly signupLink: Locator;
  readonly signupHeader: Locator;
  readonly signUpButton: Locator;
  readonly accountInformationHeader: Locator;
  readonly ourNewsletter: Locator;
  readonly ourPartners: Locator;

  constructor(page: Page) {
    super(page);
    this.username = page.locator('input[data-qa="signup-name"]');
    this.emailAddress = page.locator('input[data-qa="signup-email"]');
    this.name = page.locator("#name");
    this.email = page.locator("#email");
    this.password = page.locator("#password");
    this.day = page.locator("#days");
    this.month = page.locator("#months");
    this.year = page.locator("#years");
    this.ourNewsletter = page.getByLabel("Sign up for our newsletter!");
    this.ourPartners = page.getByLabel(
      "Receive special offers from our partners!"
    );
    this.signupLink = page.locator('[href="/login"]');
    this.signupHeader = page.locator("h2", { hasText: "New User Signup!" });
    this.signUpButton = page.locator("button[type='submit']", {
      hasText: "Signup",
    });
    this.accountInformationHeader = page.locator("h2 b", {
      hasText: "Enter Account Information",
    });
  }

  async enterSignUpForm(username: string, password: string): Promise<void> {
    await this.username.fill(username);
    await this.emailAddress.fill(password);
  }

  async clickOnSignUpLoginButton() {
    await this.signupLink.waitFor({ state: "visible" });
    await this.signupLink.click();
  }

  async checkNewUserSignupVisible() {
    await this.isElementVisible(
      this.signupHeader,
      "check New User Signup! to be visible"
    );
  }

  async clickSignUpBtn() {
    await this.signUpButton.click();
  }

  async checkAccountInformationVisible() {
    await this.isElementVisible(
      this.accountInformationHeader,
      "check New Enter Account Information! to be visible"
    );
  }

  async enterAccountInformation(
    title: string,
    name: string,
    password: string,
    day: string,
    month: string,
    year: string
  ) {
    await this.page.locator(".radio-inline label", { hasText: title }).check();
    await this.name.fill(name);
    await this.password.fill(password);
    await this.day.selectOption(day);
    await this.month.selectOption(month);
    await this.year.selectOption(year);
  }

  async checkOurNewsletter() {
    await this.ourNewsletter.check();
  }

  async checkOurPartners() {
    await this.ourPartners.check();
  }

  async verifyAndClickOnAddToCartButton(productId: string) {
    const productCart = this.page.locator(
      `//div[@class='features_items']//div[contains(@class,'productinfo')]//a[@data-product-id=${productId}]`
    );

    await productCart.click();
  }
}
