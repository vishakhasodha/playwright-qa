import { Page, Locator } from '@playwright/test';

export class SignupPage {

  readonly page: Page;
  readonly new_username: Locator;
  readonly new_email: Locator;
  readonly password: Locator;
  readonly dob: Locator;

  readonly signupButton: Locator;
//   readonly successMessage: Locator;

  constructor(page: Page) {
    this.page = page;
    this.new_username = page.locator("//input[@data-qa='signup-name']");
    this.new_email = page.locator("//input[@data-qa='signup-email']");
    this.password = page.locator("//input[@data-qa='password']");
    this.signupButton = page.locator("//button[@data-qa='signup-button']");
    // this.successMessage = page.locator('.success-message');
  }

  async navigate() {
    // await this.page.goto('https://example.com/signup');
await this.page.goto('https://automationexercise.com/');
  
}

  async signup(name: string, email: string, password: string, dob: string) {
    await this.new_username.fill(name);
    await this.new_email.fill(email);
    await this.password.fill(password);
    await this.signupButton.click();
}

async birthday(dob: string) {
    const parts = dob.split('/'); // [month, day, year]

  if (parts.length !== 3) {
    throw new Error('Invalid input format, expected mm/dd/yyyy');
  }

  // Extract month, day, and the last two digits of the year
  const month = parts[0];
  const day = parts[1];
  const year_yy = parts[2].slice(-2);

}