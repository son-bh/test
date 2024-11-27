import { Locator, Page } from "@playwright/test";
import { BasePage } from "./base-page.page";

export class HomePage extends BasePage {
  readonly emailAddress: Locator;
  readonly password: Locator;
  readonly loginHeader: Locator;
  readonly loginButton: Locator;
  readonly continueShoppingButton: Locator;

  constructor(page: Page) {
    super(page);
    this.emailAddress = page.locator('input[data-qa="login-email"]');
    this.password = page.locator('input[data-qa="login-password"]');
    this.loginHeader = page.locator("h2", { hasText: "Login to your account" });
    this.loginButton = page.locator("button[type='submit']", {
      hasText: "Login",
    });
    this.continueShoppingButton = page.locator(
      "//div[@class='modal-content']//button"
    );
  }

  async verifyAndClickOnAddToCartButton(productId: string): Promise<void> {
    // Define the product card locator

    await this.page.waitForLoadState("networkidle");
    const productCard = await this.page.locator(
      `//div[@class='features_items']//div[contains(@class,'productinfo')]//a[@data-product-id='${productId}']`
    );

    // Small wait for any animations to complete
    // await this.page.waitForTimeout(500);

    // Click the product card
    await productCard.click();
  }

  async clickOnContinueShoppingButton() {
    await this.continueShoppingButton.waitFor({
      state: "visible",
      timeout: 5000,
    });

    await this.isElementVisible(
      this.continueShoppingButton,
      "Verify 'Your product has been added to cart' modal show"
    );
  }
}
