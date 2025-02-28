1. build:
Purpose: This script is used to create a production-ready build of your application. It runs Webpack with the production configuration file (webpack.prod.config.js).
How to use:
`npm run build`
This will bundle your project, optimize assets (e.g., minifying JavaScript, CSS, etc.), and output the final build to a specified directory (usually dist/).

2. dev:
Purpose: This script is used to start the Webpack development server with a development configuration (webpack.dev.config.js).
It provides features like hot module replacement (HMR), automatic reloading of the browser, and easier debugging.
`npm run dev`
This will launch the development server, which you can access via a web browser (usually at http://localhost:8080/).
The server watches for changes in your files and automatically refreshes the browser with the updated content.

3. start
Purpose: This is similar to dev, but it adds the --open flag, which automatically opens your default web browser when the server starts. It also sets the mode to development.
`npm start`
This is particularly useful for testing your app in development without needing to manually open the browser.

**If you are win user change the end sequence character to LF**
