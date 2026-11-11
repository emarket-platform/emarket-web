import { expect, test } from "@playwright/test";

test.describe("Welcome Page", () => {
  test("loads the welcome page", async ({ page }) => {
    await page.goto("/");

    await expect(
      page.getByRole("heading", {
        name: /shopping made simple/i,
      }),
    ).toBeVisible();
  });

  test("navigates to categories", async ({ page }) => {
    await page.goto("/");

    await page
      .getByRole("link", {
        name: /explore marketplace/i,
      })
      .click();

    await expect(page).toHaveURL(/#categories/);
  });
});
