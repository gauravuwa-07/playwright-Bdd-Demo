# Playwright BDD Automation Framework (TypeScript + POM)

This is a **Playwright automation framework** using **TypeScript**, **Cucumber (BDD)**, and **Page Object Model (POM)**.  
It automates core flows on [https://www.saucedemo.com] and includes **Cucumber HTML reports**.

## Features
- Login with valid and invalid users
- Sorting products by price/name
- Adding multiple items to the cart
- Completing the end-to-end purchase flow

## Technology Stack

- Playwright
- Cucumber / Gherkin
- TypeScript
- Page Object Model (POM)
- Cucumber HTML Report


## Setup
**bash**
- git clone https://github.com/gauravuwa-07/playwright-Bdd-Demo.git
- cd playwright-Bdd-Demo
- npm install
- npx playwright install
- npm install @playwright/test --save-dev

## Execute the test 
- npm run --headed
- npx cucumber-js

## Generate Reports
- npm run report


