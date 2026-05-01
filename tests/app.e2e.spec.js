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

  await page.getByRole('button', { name: 'Kan' }).click();

  const after = page.locator('#sidePanel .stat strong').first();
  await expect(after).toContainText('1');
});

test('heart in card header saves as favorite', async ({ page }) => {
  await page.goto('/');
  await page.locator('#topLike').click();
  const favoritesCount = page.locator('#sidePanel .stat strong').nth(2);
  await expect(favoritesCount).toContainText('1');
});

test('quiz tab renders question content', async ({ page }) => {
  await page.goto('/');
  await page.locator('[data-id="quiz"]').click();
  await expect(page.getByRole('heading', { name: 'Quizmodus' })).toBeVisible();
  await expect(page.getByText('Spørsmål 1 av')).toBeVisible();
});

test('fill-in quiz uses clickable word options', async ({ page }) => {
  await page.goto('/');
  await page.locator('[data-id="quiz"]').click();
  await page.getByRole('button', { name: 'Neste' }).click(); // question 2 is fill
  await expect(page.locator('.word-option').first()).toBeVisible();
});

test('keyboard navigation can reach primary controls', async ({ page }) => {
  await page.goto('/');

  await page.keyboard.press('Tab'); // skip link
  await page.keyboard.press('Tab'); // first tab button
  await page.keyboard.press('Tab'); // second tab button
  await page.keyboard.press('Tab'); // third tab button
  await page.keyboard.press('Tab'); // first card control (heart)
  await expect(page.locator(':focus')).toHaveAttribute('id', 'topLike');
});

test('arrow keys navigate with left-forward right-back', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: /Helsetning \(V2\)/ })).toBeVisible();

  await page.keyboard.press('ArrowLeft');
  await expect(page.getByRole('heading', { name: /Inversjon/ })).toBeVisible();

  await page.keyboard.press('ArrowRight');
  await expect(page.getByRole('heading', { name: /Helsetning \(V2\)/ })).toBeVisible();
});

test('favorites list opens selected favorited card', async ({ page }) => {
  await page.goto('/');
  await page.locator('#topLike').click();
  await page.locator('[data-id="liked"]').click();
  await page.getByRole('button', { name: 'Åpne kort' }).click();
  await expect(page.locator('[data-id="learn"]')).toHaveAttribute('aria-selected', 'true');
  await expect(page.getByRole('heading', { name: /Helsetning \(V2\)/ })).toBeVisible();
});
