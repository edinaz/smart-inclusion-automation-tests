import type { Locator, Page } from "@playwright/test";
import { ORANGEHRM_LOGIN_URL } from "../../config/orangehrm";

/**
 * OrangeHRM demo login (Vue SPA). The hosted app does not expose data-testid on the form;
 * after the page is ready we assign stable ids in the DOM so every Playwright interaction
 * uses getByTestId only.
 */
export class OrangeHrmLoginPage {
  static readonly testIds = {
    username: "orangehrm-login-username",
    password: "orangehrm-login-password",
    submit: "orangehrm-login-submit",
  } as const;

  constructor(private readonly page: Page) {}

  private usernameInput(): Locator {
    return this.page.getByTestId(OrangeHrmLoginPage.testIds.username);
  }

  private passwordInput(): Locator {
    return this.page.getByTestId(OrangeHrmLoginPage.testIds.password);
  }

  private submitButton(): Locator {
    return this.page.getByTestId(OrangeHrmLoginPage.testIds.submit);
  }

  /**
   * Waits for the SPA form, then maps native controls to stable data-testid values.
   */
  private async attachTestIdsToLoginForm(): Promise<void> {
    await this.page.waitForLoadState("networkidle");
    await this.page.evaluate((ids) => {
      document
        .querySelector("input[name=\"username\"]")
        ?.setAttribute("data-testid", ids.username);
      document
        .querySelector("input[name=\"password\"]")
        ?.setAttribute("data-testid", ids.password);
      document
        .querySelector("button[type=\"submit\"]")
        ?.setAttribute("data-testid", ids.submit);
    }, OrangeHrmLoginPage.testIds);
  }

  async goto(): Promise<void> {
    await this.page.goto(ORANGEHRM_LOGIN_URL, { waitUntil: "domcontentloaded" });
    await this.attachTestIdsToLoginForm();
  }

  async login(username: string, password: string): Promise<void> {
    await this.usernameInput().fill(username);
    await this.passwordInput().fill(password);
    await this.submitButton().click();
  }
}
