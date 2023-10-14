# PT_Demo_React_MyFamilyApp

![scrot](./res/scrot_0.png)

## Contents
- [General Information](#general-information)
- [Create new React Project](#create-new-react-project)
- [Install Bootstrap 5 for React](#install-bootstrap-5-for-react)
- [Use React Bootstrap Components](#use-react-bootstrap-components)
- [Debugging React App](#debugging-react-app)
- [ESLint with React](#eslint-with-react)
- [Useful Links](#useful-links)

## General Information
https://legacy.reactjs.org/docs/handling-events.html

## Create new React Project
1. Check if you have ```node```, ```npm``` and ```npx``` installed:
```
node --version
npm --version
npx --version
```
If not, download ```node.js``` from here: https://nodejs.org/en

2. Create new [Create React App (CRA)](https://create-react-app.dev/) React app using the following command:
```
npx create-react-app my-family-app
```
*N.B. In case you prefer [Next.js](https://nextjs.org/) React app, use the following command which will install all necessary dependencies (```react```, ```react-dom```, ```next```):*
```
npx create-next-app my-family-app
```

3. Run the application on default port 3000 using:
```
npm start
```

## Install Bootstrap 5 for React
You can use the following link as a reference:  
https://www.geeksforgeeks.org/how-to-install-bootstrap-in-react-js/

1. In command prompt, set the React project directory as current:
```
cd my-family-app
```
2. Using node package manager, install bootstrap:
```
npm install bootstrap
```
3. in ```index.js```, add the following on top:
```
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
```
4. Using node package manager, install jquery popper.js:
```
npm install jquery popper.js
```
5. ```in index.js```, add the following 2 lines below the lines added in step 3:
```
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import $ from 'jquery';
import Popper from 'popper.js';
```

## Use React-Bootstrap Components
1. In command prompt, set the React project directory as current:
```
cd my-family-app
```
2. Using node package manager, install:
```
npm install react-bootstrap bootstrap
```
3. Go to https://react-bootstrap.netlify.app/docs/components/accordion and choose your preferred component.
4. Import the component and use it:
```
import Spinner from 'react-bootstrap/Spinner';

function GrowExample() {
  return <Spinner animation="grow" />;
}

export default GrowExample;
```

## Debugging React App
In order to debug React Create App (RCA) in Visual Studio Code (VSC), you need to follow these steps:

1. In VSC, go to ```[Run]``` tab > ```[Add Configuration...]``` > select ```Web App (Chrome)```

This should have created a new ```.vscode``` directory containing a ```launch.json``` file.

2. Change ```launch.json``` as follows:
```
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "chrome",
            "request": "launch",
            "name": "Launch Chrome against localhost",
            "url": "http://localhost:3000", // change from 8080 to 3000
            "webRoot": "${workspaceFolder}/src" // add /src
        }
    ]
}
```
3. Set a breakpoint somewhere in code
4. Run the application on port 3000 using:
```
npm start
```
5. Go to ```[Run]``` tab > ```[Start Debugging]``` or press F5
6. Voila! You should have hit the breakpoint!

## ESLint with React
In order to execute ESLint for all ```.js``` files in your React repository, you need to:
1. Add the following line in the ```"scripts"``` block of the ```package.json``` file:
```
{
  ...,
  "scripts": {
    ...
    "lint": "eslint src --ext .js,.jsx,.ts,.tsx"
  },
  ...
}
```
2. Run the following command:
```
npm run lint
```


## Useful Links
### React
- https://react.dev/reference/react-dom/components/input
### JS
- https://stackoverflow.com/questions/979256/sorting-an-array-of-objects-by-property-values
- https://stackoverflow.com/questions/24386354/execute-js-code-after-pressing-the-spacebar

### Debugging
- [Configuring VSCODE DEBUGGER for Create React App (CRA) - no more console.log | JavaScript - youtube clip
](https://www.youtube.com/watch?v=d_ScKLTKyOc)
### ESLint
- https://stackoverflow.com/questions/45089410/how-to-run-eslint-in-create-react-app
### Bootstrap 5 and React-Bootstrap
- https://getbootstrap.com/docs/5.0/components/modal/#static-backdrop
- https://getbootstrap.com/docs/5.0/utilities/spacing/
- https://getbootstrap.com/docs/5.1/forms/checks-radios/
- https://react-bootstrap.netlify.app/docs/components/spinners
- https://stackoverflow.com/questions/74191314/how-do-i-change-a-switch-size-in-react-bootstrap