# PT_Demo_React_MyFamilyApp

![scrot](./res/scrot_0.png)

## Contents
- [General Information](#general-information)
- [Create new React project](#create-new-react-project)
- [Install Bootstrap 5 for React](#install-bootstrap-5-for-react)
- [Use React Bootstrap Components](#use-react-bootstrap-components)
- [Useful Links](#useful-links)

## General Information
https://legacy.reactjs.org/docs/handling-events.html

## Create new React project
1. Check if you have ```node```, ```npm``` and ```npx``` installed:
```
node --version
npm --version
npx --version
```
If not, download ```node.js``` from here: https://nodejs.org/en

2. Create new React app using the following command:
```
npx create-react-app my-family-app
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

## Use React Bootstrap Components
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

## Useful Links
- https://stackoverflow.com/questions/979256/sorting-an-array-of-objects-by-property-values
- https://stackoverflow.com/questions/24386354/execute-js-code-after-pressing-the-spacebar
- https://stackoverflow.com/questions/74191314/how-do-i-change-a-switch-size-in-react-bootstrap
- https://react.dev/reference/react-dom/components/input
- https://getbootstrap.com/docs/5.0/components/modal/#static-backdrop
- https://getbootstrap.com/docs/5.0/utilities/spacing/
- https://getbootstrap.com/docs/5.1/forms/checks-radios/
- https://react-bootstrap.netlify.app/docs/components/spinners