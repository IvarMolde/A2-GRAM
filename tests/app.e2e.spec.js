const { test, expect } = require('@playwright/test');

test('shows app title and rule card', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'Tindergram' })).toBeVisible();
  await expect(page.getByRole('heading', { name: /Helsetning \(V2\)/ })).toBeVisible();
});

test('can mark a rule with ov mer and see progress change', async ({ page }) => {
  await page.goto('/');

  await expect(page.locator('#progressText')).toContainText('0 / 40');

  await page.getByRole('button', { name: 'Øv mer' }).click();

  await expect(page.locator('#progressText')).toContainText('1 / 40');
});

test('heart in card header saves as favorite', async ({ page }) => {
  await page.goto('/');
  await page.locator('#topLike').click();
  await expect(page.getByText('Favoritter: 1')).toBeVisible();
});

test('quiz tab renders question content', async ({ page }) => {
  await page.goto('/');
  await page.locator('[data-id="quiz"]').click();
  await expect(page.getByRole('heading', { name: 'Quizmodus' })).toBeVisible();
  await expect(page.getByText('Spørsmål 1 av')).toBeVisible();
  await expect(page.getByText('Ikke svart ennå')).toBeVisible();
  await expect(page.getByRole('button', { name: 'Start på nytt' })).toBeVisible();
});

test('fill-in quiz uses clickable word options', async ({ page }) => {
  await page.goto('/');
  await page.locator('[data-id="quiz"]').click();
  for (let i = 0; i < 6; i += 1) {
    if (await page.locator('.word-option').first().isVisible().catch(() => false)) break;
    await page.getByRole('button', { name: 'Neste' }).click();
  }
  await expect(page.locator('.word-option').first()).toBeVisible();
});

test('quiz card shows colored result banner after answer', async ({ page }) => {
  await page.goto('/');
  await page.locator('[data-id="quiz"]').click();
  if (await page.locator('[data-o="0"]').isVisible().catch(() => false)) {
    await page.locator('[data-o="0"]').click();
  } else {
    await page.locator('[data-fo="0"]').click();
  }
  await expect(page.locator('.quiz-result-banner.ok, .quiz-result-banner.bad')).toBeVisible();
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
