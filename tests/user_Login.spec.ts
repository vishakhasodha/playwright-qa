import { test, expect } from '@playwright/test';


test('Register user', async ({ page }) => {
  await page.goto('https://automationexercise.com/');

  // Expect a title "to contain" a substring.
    const title = await page.title();
  console.log(title);
    await expect(page).toHaveTitle(title); // Assert the page title
await page.locator('.fa-lock').click();
// await page.locator('.signup-form').textContent 
await expect(page.locator('.signup-form h2')).toHaveText('New User Signup!');

const new_username='vishakha';
const new_email='vishakha@gmail.com';
const password='newpassword';
const dob='09/02/1992';

// Parsing DOB and passing in selection locator

 const parts = dob.split('/'); // [month, day, year]

  if (parts.length !== 3) {
    throw new Error('Invalid input format, expected mm/dd/yyyy');
  }

  // Extract month, day, and the last two digits of the year
  const month = parts[0];
  const day = parts[1];
  const year_yy = parts[2].slice(-2);



await page.locator("//input[@data-qa='signup-name']").fill(new_username);

await page.locator("//input[@data-qa='signup-email']").fill(new_email);
 await page.locator("//button[@data-qa='signup-button']").click();

await expect (page.locator("//input[@data-qa='name']")).toHaveValue(new_username);
await expect (page.locator("//input[@data-qa='email']")).toHaveValue(new_email);
await page.locator("//input[@id='id_gender2']").check();
await page.locator("//input[@data-qa='password']").fill('password');
await page.locator("//*[@data-qa='days']").selectOption(day); 
// Example for a custom dropdown component
  // await page.locator('#days').selectOption('2');
  await page.locator('#years').selectOption(year_yy);
  await page.locator('#months').selectOption(month);
  await page.locator("//input[@id='newsletter']").check();
  await page.locator("//input[@id='optin']").check();
 
  await page.getByRole('checkbox', { name: 'Sign up for our newsletter!' }).check();
  await page.getByRole('checkbox', { name: 'Receive special offers from' }).check();
  
  await page.locator('#months').selectOption('8');
  await page.locator('div').filter({ hasText: 'Enter Account Information' }).nth(1).click();
  await page.getByText('Receive special offers from').click({
    modifiers: ['ControlOrMeta']
  });
  await page.locator('div').filter({ hasText: 'Enter Account Information' }).nth(1).click();
  await page.getByRole('textbox', { name: 'First name *' }).click();
  await page.getByRole('textbox', { name: 'First name *' }).fill('io');
  await page.getByRole('textbox', { name: 'Last name *' }).click();
  await page.getByRole('textbox', { name: 'Last name *' }).fill('bjbj');
  await page.getByRole('textbox', { name: 'Company', exact: true }).click();
  await page.getByRole('textbox', { name: 'Company', exact: true }).fill('hhkjkj');
  await page.getByRole('textbox', { name: 'Address * (Street address, P.' }).click();
  await page.getByRole('textbox', { name: 'Address * (Street address, P.' }).fill('jhvjkmj,jb');
  await page.getByRole('textbox', { name: 'Address 2' }).click();
  await page.getByRole('textbox', { name: 'Address 2' }).fill('bkbkb');
  await page.getByRole('textbox', { name: 'State *' }).click();
  await page.getByRole('textbox', { name: 'State *' }).fill('rajasthan');
  await page.getByRole('textbox', { name: 'State *' }).press('Tab');
  await page.getByRole('textbox', { name: 'City * Zipcode *' }).fill('jodhpur');
  await page.locator('#zipcode').click();
  await page.locator('#zipcode').fill('342001');
  await page.getByRole('textbox', { name: 'Mobile Number *' }).click();
  await page.getByRole('textbox', { name: 'Mobile Number *' }).fill('9004217328');
  await page.getByRole('button', { name: 'Create Account' }).click();
});



});




//   console.log(page.title());
//   await expect(page).toHaveTitle(/Playwright/);
});

// test('get started link', async ({ page }) => {
//   await page.goto('https://playwright.dev/');

//   // Click the get started link.
//   await page.getByRole('link', { name: 'Get started' }).click();

//   // Expects page to have a heading with the name of Installation.
//   await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
// });
