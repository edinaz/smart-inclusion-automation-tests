import { expect, test } from "../../fixtures/base";

test.describe("OrangeHRM demo login", () => {
  test("Admin signs in with valid credentials", async ({ orangeHrmLoginPage, page }) => {
    // Arrange
    const username = "Admin";
    const password = "admin123";

    // Act
    await orangeHrmLoginPage.goto();
    await orangeHrmLoginPage.login(username, password);

    // Assert
    await expect(page).toHaveURL(/\/dashboard\//);
  });
});
