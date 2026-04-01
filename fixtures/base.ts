import { test as base } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { OrangeHrmLoginPage } from "../pages/orangehrm/OrangeHrmLoginPage";

type AppFixtures = {
  loginPage: LoginPage;
  orangeHrmLoginPage: OrangeHrmLoginPage;
};

export const test = base.extend<AppFixtures>({
  loginPage: async ({ page }, use) => {
    const loginPage = new LoginPage(page);
    await use(loginPage);
  },
  orangeHrmLoginPage: async ({ page }, use) => {
    await use(new OrangeHrmLoginPage(page));
  },
});

export { expect } from "@playwright/test";
