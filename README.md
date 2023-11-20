# Cypress Test Suite for https://magento.softwaretestingboard.com/ by Daniel Zommer

## Installation
To install Cypress, follow these steps:
1. Clone this repository to your local machine 
2. Install Cypress using the command: `npm install cypress --save-dev`.
3. If you have Cypress installed on your computer, then use: `npm install`.
4. Ensure all dependencies are installed correctly.

## Setup Instructions
### Running tests locally
1. Open a terminal.
2. Navigate to the project directory.
3. Run Cypress tests using the command: `npx cypress open`.

4. ## Folder Structure
Project/
├── cypress/
│ ├── e2e/
│ │ ├── [LoggedIn]user-account-actions.cy.js
│ │ ├── [Login]account-login.cy.js
│ │ ├── [Register]account-registration.cy.js
│ │ └── [Register]re-account-registration.cy.js
│ ├── fixtures/
│ │ └── example.json
│ ├── support/
│ │ ├── commands.js
│ │ └── e2e.js
├── node_modules/
│ │ └── ...
├── .gitignore
├── cypress.config.js
├── jsconfig.json
├── package-lock.json
├── package.json
└── README.md
