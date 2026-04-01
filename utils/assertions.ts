import type { Page } from "@playwright/test";
import { expect } from "@playwright/test";

/**
 * Asserts the authenticated shell is visible (adjust test id to match your app).
 */
export async function expectAuthenticatedShell(page: Page): Promise<void> {
  await expect(page.getByTestId("app-shell")).toBeVisible();
}
