# Introduction

This repo contains a simple example of how to intercept API requests from a web browser and mock the responses in Cypress.

- [Cypress](https://www.cypress.io) is used for running automation tests
- The example makes use of the Angular Realworld.io sample site [here](http://angular.realworld.io)
- The example intercepts and mocks calls to the following APIs: 
  - Tags API - returns a list of tags
  - Articles API - returns a list of articles / blog posts
- Tests can be executed on Chrome and Firefox browsers running on macOS, Windows and Linux 

### Requirements

This example was written using the following components:
- Node.js v18.17.0
- Cypress v13.6.1

For details refer to the Cypress website under [System requirements](https://docs.cypress.io/guides/getting-started/installing-cypress#System-requirements).

### Installation

To install Cypress, open a terminal windows and enter the command:
```
npm install cypress --save-dev
```
**OR**

Clone this repository on your local machine, open a terminal windows and enter the command:
```
npm install
```

### Running the tests
 
- To run the test from the Cypress UI in interactive mode, open a terminal window and enter the command:
```
npx cypress open
```
- To run the test from a Chrome browser, open a terminal windows and enter the command:
```
npm run cypress:chrome
```
- To run the test from a Firefox browser, open a terminal window and enter the command:
```
npm run cypress:firefox
```

**Note:** Refer to the `package.json` file for the above `npm` script commands and their mapping.

### Information
This example was written on macOS Monterey (v12.7.1) running on a Mac mini (Late 2014) model.
It has also been tested on Windows 11 and Ubuntu Desktop 22.04.3 LTS
