# React User table

This application is built using React for the view, React Router for routing, and dummy data pulled from the [JSON Placeholder API](http://jsonplaceholder.typicode.com/users) for user information.  PatternFly styling is used for the individual user view, with custom state management for handling user interaction.

[Zipcodes NPM package](https://www.npmjs.com/package/zipcodes) is used to determine US states based on zip codes provided.

Jest is used for testing.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Description

This application queries an API for user information, which is displayed in descending order by full name in a fully responsive table.

Clicking a user name takes you to an overview page with all of that user's information, with nested details collapsed by default but expandable by clicking on the rows with the arrows to the left of them.

React Router handles all page routing, allowing for easy bookmarking of any page in the app and also powering the "Back" button on the individual user pages.

## Assumptions

- Names are sorted in descending order, by full name. Hence users will be sorted by first name, or by salutation (such as Mrs.) if one exists before their name.
- State is not provided from API, so [zipcodes NPM package](https://www.npmjs.com/package/zipcodes) was used to determine state based on zip codes pulled from API where possible.  If no state returned, address displayed simply skips this field.
- API GET response for a single user matches that user's data available in API response to GET all users, so only one API call is made with response then stored for reference when between users.  If unique data was available for each user by making a GET call for that user id, additional API calls would need to be added based on each user name clicked from the table.

## Running the App

First clone the directory:

`git clone https://github.com/evwilkin/evan_wilkinson/tree/master/react-user-app`

Install dependencies:

`npm install`

Start the app:

`npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Testing the Code

Run the following command in the Terminal to see automated test results:

`npm test`
