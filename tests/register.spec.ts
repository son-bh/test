import { test, expect } from "@playwright/test";
import { RegisterPage } from "../page/register.page";
import { BasePage } from "../page/base-page.page";

test("Test case 1: Register User", async ({ page }) => {
  const registerPage = new RegisterPage(page);
  const basePage = new BasePage(page);

  //Step 1. Launch browser
  //   await test.step("launch Chromium browser", async () => {
  //     await basePage.launchChromiumBrowser(false);
  //   });

  // Step 2: Navigate to url 'http://automationexercise.com'
  await test.step("navigate to url: http://automationexercise.com", async () => {
    await basePage.goTo("http://automationexercise.com");
  });

  //Step 3: Verify that home page is visible successfully
  await test.step("check Home Page is visible", async () => {
    await basePage.checkHomePageVisible();
  });

  await test.step("add to cart", async () => {
    await registerPage.verifyAndClickOnAddToCartButton("1");
  });

  // //Step 4: Click on 'Signup / Login' button
  // await test.step('click on "Signup/Login button"', async () => {
  //   await registerPage.clickOnSignUpLoginButton();
  // });

  // //Step 5: Verify 'New User Signup!' is visible successfully
  // await test.step("verify 'New User Signup!' is visible", async () => {
  //   await registerPage.checkNewUserSignupVisible();
  // });

  // //Step 6: Enter name and email address
  await test.step("enter name and email address", async () => {
    await registerPage.enterSignUpForm(
      basePage.getUserInfo().name,
      "ailinhnumberone@gmail.com"
    );
  });

  // //Step 7: Click 'Signup' button
  // await test.step("click 'Signup' button", async () => {
  //   await registerPage.clickSignUpBtn();
  // });

  // //Step 8: Verify that 'ENTER ACCOUNT INFORMATION' is visible
  // await test.step("verify 'ENTER ACCOUNT INFORMATION'' is visible", async () => {
  //   await registerPage.checkAccountInformationVisible();
  // });

  // //Step 9: Fill details: Title, Name, Email, Password, Date of birth
  // await test.step("fill details: Title, Name, Password, Date of birth", async () => {
  //   await registerPage.enterAccountInformation(
  //     "Mrs.",
  //     "Ngo Diep Ai Linh",
  //     "ailinhdethuong",
  //     "16",
  //     "June",
  //     "2001"
  //   );
  // });

  // //Step 10: Select checkbox 'Sign up for our newsletter!'
  // await test.step("select checkbox 'Sign up for our newsletter!'", async () => {
  //   await registerPage.checkOurNewsletter();
  // });

  // //Step 11: Select checkbox 'Receive special offers from our partners!'
  // await test.step("select checkbox 'Receive special offers from our partners!'", async () => {
  //   await registerPage.checkOurNewsletter();
  // });
});
