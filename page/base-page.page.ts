import {
  expect,
  Page,
  Browser,
  BrowserContext,
  Locator,
} from "@playwright/test";
const { chromium } = require("playwright");

export class BasePage {
  public page: Page;
  protected browser: Browser;
  protected context: BrowserContext;
  protected homePageLink: Locator;
  protected userInfo: { name: string };

  constructor(page: Page) {
    this.page = page;
    this.userInfo = { name: "Son" };
    this.homePageLink = page.locator(
      "#header .shop-menu > ul > li:nth-child(1) > a"
    );
  }

  // Navigate to URL
  async goTo(url: string) {
    await this.page.goto(url, { waitUntil: "domcontentloaded" });
  }

  //Method to launch Chromium browser
  async launchChromiumBrowser(headless: boolean): Promise<void> {
    // Launch the Chromium browser with headless mode
    this.browser = await chromium.launch({ headless });

    // Create a new browser context
    this.context = await this.browser.newContext();

    // Create a new page
    this.page = await this.context.newPage();
  }

  // Method to close the browser after all tests are done
  async closeBrowser(): Promise<void> {
    if (this.browser) {
      await this.browser.close();
    }
  }
  // Check element is visible
  async isElementVisible(locator: Locator, message: string): Promise<void> {
    await expect(locator, message).toBeVisible();
  }

  async checkHomePageVisible() {
    const linkActive = await this.homePageLink.getAttribute("style");

    await this.isElementVisible(
      this.homePageLink,
      "check homepage to be visible"
    );
    await expect(linkActive, "check home page tab is active").toContain(
      "color: orange;"
    );
  }

  getUserInfo() {
    return this.userInfo;
  }
}
