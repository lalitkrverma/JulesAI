Author: Lalit Kumar Verma

Project Setup

    Install Playwright:
    Open a terminal and run:
    Bash

    npm install --save-dev playwright

Download Browsers (Optional):
Playwright can download browsers automatically the first time a test is run. However, for faster execution or specific browser versions, you can download them manually:
Bash

playwright download

Running Tests

There are several ways to run your Playwright tests:

    Run all tests:
    Bash

    npx playwright test



Run specific tests:

Specify test file names or patterns:
Bash

npx playwright test login.test.js  # Run a single test file
npx playwright test login*.test.js  # Run all tests matching a pattern



Run with options:

    --browser=chromium|firefox|webkit: Choose a specific browser.
    --headed: Run tests in a visible browser window.
    --report=json|html|list: Generate a specific report format.

For example:
Bash

npx playwright test login.test.js --browser=firefox --headed



Understanding the Tests

This project includes three Playwright tests that demonstrate login scenarios on the https://demo.haroldwaste.com/ website:

    Scenario I - Incorrect Email/Password Login:
        Tests if an error message is displayed when logging in with an invalid email/password combination.
    Scenario II - Empty Email/Password Login:
        Tests if appropriate error messages appear when leaving both email and password fields empty.
    Scenario III - Successful Login:
        Tests if a successful login displays the expected purchase list and profile header.
    Scenario IV - Multiple Login Attempts:
        Tests if a multiple login attempts shows only one error message.

Test Structure

Each test follows this general structure:

    Imports:
        test and expect from @playwright/test.
    Test Definition:
        Uses test with a descriptive name.
        Takes a page object as an argument, representing the browser window for testing.
    Login Page Navigation:
        Uses page.goto to navigate to the login page URL.
    Element Locators:
        Creates element locators using techniques like page.locator or page.getByText. These locators identify the relevant input fields, buttons, and error messages on the login page.
    Test Steps:
        Uses test.step to group related actions within the test for better readability.
    User Login Simulation:
        Fills the email and password fields using fill method.
        Clicks the login button using click.
    Login Validation:
        Uses expect.soft for asynchronous assertions.
        Verifies if expected error messages or successful login elements are visible using toBeVisible.
