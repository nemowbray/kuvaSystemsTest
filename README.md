# kuvaSystemsTest
test the sign-up functionality for a social network

### General Info

---

This project will include testing for a social network that will include functional, end to end and API validation.

## Pre-Requisites

---

- Java SDK is installed
- NPM is installed 
- Node.js is installed
- Git is installed 

# Install Playwright

---

npm init playwright@latest

Note: If you install playwright after pulling the code into VS Code you will need to restart VS Code in order for VS Code to recognize the playwright install

For more information on playwright documentation you can go to https://playwright.dev/docs/intro

## Technologies

---

A list of technologies used within the project:

- [@playwright/test]: Version 1.17.2
- [playwright]: Version 1.28.0

## Installation

---

```
1. Create a folder to clone repository to 
2. git clone https://github.com/nemowbray/streamlineLandlordServices.git
3. go to folder where you cloned the repo for example C:\sls\streamlineLandlordServices>
4. run the following command: npm init playwright@latest
You will be prompted with a series of questions:
  - select TypeScript
  - press enter
  - press enter
  - press enter
Note: you can ignore the e2e folder and tests-examples folder, these are automatically added during the install.
```
# NPX Commands

---

npx playwright test
    Runs the end-to-end tests.

  npx playwright test --ui
    Starts the interactive UI mode.

  npx playwright test --project=chromium
    Runs the tests only on Desktop Chrome.

  npx playwright test filename.spec.ts
    Runs the tests in a specific file.

  npx playwright test --debug
    Runs the tests in debug mode.

  npx playwright codegen
    Auto generate tests with Codegen.
    
# Setup dotenv

npm install dotenv --save add process-env

process-env is needed in order for the variables to work
Add `.env` file to the root folder.
Add the following to the .env file:

URL="https://someurl.com/"
USER="username"
PASSWORD="your password"

The `process.env` will now read values stored in the environment variable file.

