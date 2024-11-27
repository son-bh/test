//Cart.spec.ts
import { test, expect } from "@playwright/test";

import { BasePage } from "../page/base-page.page";
import { LoginPage } from "../page/login.page";
import { RegisterPage } from "../page/register.page";
import { HomePage } from "../page/home.page";

test.beforeEach(async ({ page }) => {
  const loginPage = new LoginPage(page);
  const basePage = new BasePage(page);
  const registerPage = new RegisterPage(page);

  // await register(page);
  await basePage.goTo("http://automationexercise.com");

  await registerPage.clickOnSignUpLoginButton();

  await loginPage.enterLoginForm("ailinhno1@gmail.com", "123123");

  await loginPage.clickLoginBtn();

  // Re-initialize page objects after reload if needed
  await page.waitForLoadState("networkidle");
  await page.waitForLoadState("domcontentloaded");
});

// test.afterEach(async ({ page }) => {
//   await deleteAccount(page);
// });

test("Testcase 6: Verify products in cart are persisted when user opens another tab ", async ({
  page,
}) => {
  const homePage = new HomePage(page);

  test.step("3. Add 2 products to cart", async () => {
    await homePage.verifyAndClickOnAddToCartButton("1");
    await homePage.clickOnContinueShoppingButton;
    // await homePage.clickOnContinueShoppingButton();
    // await homePage.verifyAndClickOnAddToCartButton("2");
    // await homePage.clickOnContinueShoppingButton();
  });

  test.step("4. Open new tab", async () => {});
});
