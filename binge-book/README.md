# General

## Stack:
- React `[^11.10.6]`
- TypeScript `[^4.9.5]`
- Zustand (memory management) `[^4.3.6]`
- React Router v6.9.0 `[^6.9.0]`
- Jest (testing) `[^27.5.2]`
- MUI Material (UI library) `[^5.11.14]`
- Public endpoint: http://numbersapi.com/
- File with data `src/Assets/data/data.json</b>
- Hosted on AWS S3 with CloudFront: https://d127rb4ao6sc0.cloudfront.net/

## File naming

- Component: `Component.tsx`</b>`
- Files containing Zustand stores and other helper functions: `Component.store.tsx`</b>`
- Component test: `Component.test.tsx`</b>`
- Other functions: `functionName()`</b>`
- Store naming: `useComponentStore`</b>`
- Interface naming: `ComponentInterface</b> or `useComponentStoreInterface`

## Tests

- Written for each component and for each page
- Checking expected contents, mostly passed from the parrent component
- Checking reaction to store changes such as changing a page
- Checking if item is clickable using `fireEvent.Click()`
- Components that depend on the `JSON data file` always initialize store first and load testing data
- Tests have their own testing data, which is a minified version of original `JSON data file`.
- To run tests use `npm test` command

## Other notes

- Theme is defined (extend original MUI theme) in `src/Theme.tsx:CustomTheme`. This theme is then loaded in `App.tsx`

# Environment

## Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
