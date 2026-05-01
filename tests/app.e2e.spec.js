const { test, expect } = require('@playwright/test');

test('shows app title and rule card', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'Tindergram' })).toBeVisible();
  await expect(page.getByRole('heading', { name: /Helsetning \(V2\)/ })).toBeVisible();
});

test('can mark a rule and see progress change', async ({ page }) => {
  await page.goto('/');

  const before = page.locator('#sidePanel .stat strong').first();
  await expect(before).toContainText('0');

  await page.getByRole('button', { name: 'Sveip høyre: Kan' }).click();

  const after = page.locator('#sidePanel .stat strong').first();
  await expect(after).toContainText('1');
});

test('quiz tab renders question content', async ({ page }) => {
  await page.goto('/');
  await page.locator('[data-id="quiz"]').click();
  await expect(page.getByRole('heading', { name: 'Quizmodus' })).toBeVisible();
  await expect(page.getByText('Spørsmål 1 av')).toBeVisible();
});
