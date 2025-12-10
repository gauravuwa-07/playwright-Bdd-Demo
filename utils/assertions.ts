
import { expect, Page } from '@playwright/test';

export async function assertText(page: Page, locator: string, expected: string) {
  await expect(page.locator(locator)).toHaveText(expected);
}

export async function assertVisible(page: Page, locator: string) {
  await expect(page.locator(locator)).toBeVisible();
}
