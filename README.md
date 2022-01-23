# NASAgram Frontend
A full-stack project (React, GraphQL/Apollo, Node.js, PostgreSQL) that utilitzes NASA Astronomy Picture of the Day API to generate a Instagram-like space photo app.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), and Material UI (such as Material UI icons) is utilized to add clean styling to many components. The current repo is the frontend repo of NASAgram. To run this NASAgram on a local host, it's necessary to also clone the backend repo of this project (https://github.com/huiwen12/bootcamp-backend-starter).

### Progress Update

The development of NASAgram is still in progress, and I will be adding more functionality and styling to the app. A video demo of the current status of the app can be accessed at https://harvard.zoom.us/rec/play/wznln_G0vPXDYBUTr1wB55PfNycV9jR1IfuMl45p5z1JT_AIUA-nuQQ8JoNvHAhIpTdvD22fTwJJSg.1jBElWPCLBZNU79E?autoplay=true&startTime=1642900804000. 

<br />
Since the first stage of this project was implemented in the span of 3 days, here's what I look forward to adding in the next iteration:  <br/>
- include a mutation to save each user's liked posts to the backend database in the table called "likes" <br/>
- implement the Favorites page to display the user's liked posts and filter liked posts by the date listed on each astronomy picture of the day post<br />
- add the register page on the frontend <br/>
- allow users to change their passwords <br/>
 
## Running this project on a local host will require backend repo
You can find the backend repo at https://github.com/huiwen12/bootcamp-backend-starter. To view the project, both repos must run simultaneously on your local host by executing
### `npm run dev`

The frontend will display on a 3000 port and the backend GraphQL playground will run on the 5000 port.


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

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

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
