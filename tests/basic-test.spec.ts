import { test, expect, BrowserType, chromium, firefox } from '@playwright/test';

const PLAYER_REGEXP = /^(http:\/\/localhost:3000\/player\/)/;
const ANY_TEKST_REGEXP = /.*/;

test('should navigate to the album page after click on album', async ({ page }) => {
  await page.goto('/');
  await page.waitForSelector('[data-testid="card-element"]');

  const cardElements = await page.$$('[data-testid="card-element"]');

  // Click on the second album from the list
  cardElements[0].click();

  await expect(page).toHaveURL(PLAYER_REGEXP);
  await expect(page.locator('h1')).toContainText(ANY_TEKST_REGEXP);
});

test('should search for album name and filter list', async ({ browserName, page }) => {
  if (browserName === 'chromium' || browserName === 'firefox') {
    let browser;

    if (browserName === 'chromium') {
      browser = await chromium.launch();
    } else if (browserName === 'firefox') {
      browser = await firefox.launch();
    } else {
      throw new Error(`Unsupported browser: ${browserName}`);
    }
    await page.goto('/');

    const input = page.getByTestId('default-search');

    await page.waitForSelector('[data-testid="card-element"]');

    const cardElementsBeforeFilter = await page.$$('[data-testid="card-element"]');

    // Fill with eee to make filter work
    await input.fill('ee');

    await page.waitForSelector('[data-testid="card-element"]');
    const cardElementsAfterFilter = await page.$$('[data-testid="card-element"]');

    // The filter works if the value is different from the original returned by API
    expect(cardElementsBeforeFilter.length).not.toBe(cardElementsAfterFilter.length);
    await browser.close();
  } else {
    // Skip tests for WebKit, known issue:
    // https://github.com/facebookexperimental/Recoil/issues/944
    test.skip();
  }
});

test('should navigate to the album page after click and then click on the next button to switch to the next album', async ({
  page,
}) => {
  await page.goto('/');

  await page.waitForSelector('[data-testid="card-element"]');

  const cardElements = await page.$$('[data-testid="card-element"]');
  // Click on the second album from the list
  cardElements[1].click();

  // Verify correctness
  await expect(page).toHaveURL(PLAYER_REGEXP);
  await expect(page.locator('h1')).toContainText(ANY_TEKST_REGEXP);

  const currentAlbumUrl = await page.url();

  await page.waitForSelector('[data-testid="button-next"]');
  // Click on the next button to switch to next album
  const buttonNext = await page.$$('[data-testid="button-next"]');
  buttonNext[0].click();

  // Wait for the URL to change
  await page.waitForFunction(
    (currentAlbumUrl) => location.href !== currentAlbumUrl,
    currentAlbumUrl,
  );

  // Verify correctness
  await expect(page).toHaveURL(PLAYER_REGEXP);
  await expect(page.locator('h1')).toContainText(ANY_TEKST_REGEXP);

  const nextAlbumUrl = await page.url();

  // Check if the url changed after sqtching to the new page
  await expect(currentAlbumUrl).not.toBe(nextAlbumUrl);
});

test('should navigate to the album page after click and then click on the prev button to switch to the prev album', async ({
  page,
}) => {
  await page.goto('/');
  await page.waitForSelector('[data-testid="card-element"]');

  const cardElements = await page.$$('[data-testid="card-element"]');

  // Click on the second album from the list
  cardElements[1].click();

  // Verify correctness
  await expect(page).toHaveURL(PLAYER_REGEXP);
  await expect(page.locator('h1')).toContainText(ANY_TEKST_REGEXP);

  const currentAlbumUrl = await page.url();

  await page.waitForSelector('[data-testid="button-prev"]');

  // Click on the prev button to switch to prev album
  const buttonPrev = await page.$$('[data-testid="button-prev"]');
  // There are two left buttons, we are interested in the second one
  // to switch albums, not to the root
  buttonPrev[1].click();

  // Wait for the URL to change
  await page.waitForFunction(
    (currentAlbumUrl) => location.href !== currentAlbumUrl,
    currentAlbumUrl,
  );

  // Verify correctness
  await expect(page).toHaveURL(PLAYER_REGEXP);
  await expect(page.locator('h1')).toContainText(ANY_TEKST_REGEXP);

  const prevAlbumUrl = await page.url();
  console.log(currentAlbumUrl, prevAlbumUrl);
  // Check if the url changed after sqtching to the new page
  await expect(currentAlbumUrl).not.toBe(prevAlbumUrl);
});

test('should navigate to the album page after click and then click on the back button to switch the root', async ({
  page,
}) => {
  await page.goto('/');
  await page.waitForSelector('[data-testid="card-element"]');

  const cardElements = await page.$$('[data-testid="card-element"]');

  // Click on the second album from the list
  cardElements[1].click();

  // Verify correctness
  await expect(page).toHaveURL(PLAYER_REGEXP);
  await expect(page.locator('h1')).toContainText(ANY_TEKST_REGEXP);

  await page.waitForSelector('[data-testid="button-prev"]');
  // Click on the prev button to switch to prev album
  const buttonPrev = await page.$$('[data-testid="button-prev"]');
  // There are two left buttons, we are interested in the first one to switch to the root
  buttonPrev[0].click();

  // Verify correctness
  await expect(page).toHaveURL('http://localhost:3000/');
});
