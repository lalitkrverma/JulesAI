const { test, expect } = require('@playwright/test');

test('Scenario I - Incorrect Email/Password Login', async ({ page }) => {
  // Navigate to login page
  await page.goto('https://demo.haroldwaste.com/');

  const emailField = page.locator('[data-test-id="input-email"]').getByRole('textbox');
  const pwdField = page.locator('[data-test-id="input-password"]').getByRole('textbox');
  const loginBtn = page.locator('[data-test-id="signin"]');
  const loginErrorMessage = page.locator('[data-test-id="toaster-message"]').getByText('Your email and/or password are incorrects');

  await test.step(`User logins to jules AI App with wrong password `, async () => {
    await emailField.fill('qa@julesai.com');
    await pwdField.fill('WrongPwd');
    await loginBtn.click();
});

  await test.step(`User verifies login the error message`, async () => {
    await expect.soft(loginErrorMessage).toBeVisible();
});

});

test('Scenario II - Empty Email/Password Login', async ({ page }) => {
  // Navigate to login page
  await page.goto('https://demo.haroldwaste.com/');

  const emailField = page.locator('[data-test-id="input-email"]').getByRole('textbox');
  const pwdField = page.locator('[data-test-id="input-password"]').getByRole('textbox');
  const loginBtn = page.locator('[data-test-id="signin"]');
  const passwordErrorMessage = page.locator('//*[@data-test-id="input-password"]/following-sibling::div[text()="Required"]');
  const emailErrorMessage = page.locator('//*[@data-test-id="input-email"]/following-sibling::div[text()="Required"]');


  await loginBtn.click();

  await expect.soft(emailErrorMessage).toBeVisible();
  await expect.soft(passwordErrorMessage).toBeVisible();
});

test('Scenario III - Successful Login', async ({ page }) => {
  // Navigate to login page
  await page.goto('https://demo.haroldwaste.com/');

  const emailField = page.locator('[data-test-id="input-email"]').getByRole('textbox');
  const pwdField = page.locator('[data-test-id="input-password"]').getByRole('textbox');
  const loginBtn = page.locator('[data-test-id="signin"]');
  const purchaseHeader = page.getByText('Purchase & Opportunity list');
  const profileHeader = page.locator('[data-test-id="header-menu"]').getByText('QJ');

  await test.step(`User logins to jules AI App `, async () => {
    await emailField.fill('qa@julesai.com');
    await pwdField.fill('QaJULES2023!');
    await loginBtn.click();
});

  await test.step(`User verifies login is successful`, async () => {
    await expect.soft(purchaseHeader).toBeVisible();
    await expect.soft(profileHeader).toBeVisible();
});

});
