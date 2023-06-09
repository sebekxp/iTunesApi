import { test, expect, BrowserType, chromium, firefox } from '@playwright/test';

test('should navigate to the album page after click on album', async ({ page }) => {
  await page.goto('/');
  await page.click('text="But Here We Are"');

  await expect(page).toHaveURL('http://localhost:3000/player/but-here-we-are');
  await expect(page.locator('h1')).toContainText('But Here We Are');
});

test('should have the expected number of items that will be returned from the API', async ({
  page,
}) => {
  await page.goto('/');

  await page.waitForSelector('[data-testid="card-element"]');

  const cardElements = await page.$$('[data-testid="card-element"]');

  expect(cardElements.length).toBe(74);
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

    await input.fill('But Here We Are');

    await page.waitForSelector('[data-testid="card-element"]');

    const cardElements = await page.$$('[data-testid="card-element"]');

    expect(cardElements.length).toBe(1);
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
  await expect(page).toHaveURL('http://localhost:3000/player/life-is-but-a-dream');
  await expect(page.locator('h1')).toContainText('Life Is But a Dream…');

  // Click on the next button to switch to next album
  const buttonNext = await page.$$('[data-testid="button-next"]');
  buttonNext[0].click();

  // Verify correctness
  await expect(page).toHaveURL('http://localhost:3000/player/5-star');
  await expect(page.locator('h1')).toContainText('5-STAR');
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
  await expect(page).toHaveURL('http://localhost:3000/player/life-is-but-a-dream');
  await expect(page.locator('h1')).toContainText('Life Is But a Dream…');

  // Click on the prev button to switch to prev album
  const buttonPrev = await page.$$('[data-testid="button-prev"]');
  // There are two left buttons, we are interested in the second one
  // to switch albums, not to the root
  buttonPrev[1].click();

  // Verify correctness
  await expect(page).toHaveURL('http://localhost:3000/player/but-here-we-are');
  await expect(page.locator('h1')).toContainText('But Here We Are');
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
  await expect(page).toHaveURL('http://localhost:3000/player/life-is-but-a-dream');
  await expect(page.locator('h1')).toContainText('Life Is But a Dream…');

  // Click on the prev button to switch to prev album
  const buttonPrev = await page.$$('[data-testid="button-prev"]');
  // There are two left buttons, we are interested in the first one to switch to the root
  buttonPrev[0].click();

  // Verify correctness
  await expect(page).toHaveURL('http://localhost:3000/');
});
