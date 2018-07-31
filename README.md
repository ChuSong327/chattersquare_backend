# ChatterSquare
A full-stack project that provides an online chatting platform to allow users to converse and befriend with other users in selected chat rooms

[Live](https://chattersquare.herokuapp.com/ "ChatterSquare")

### App Preview (partial)
#### Homepage 
<img src="https://res.cloudinary.com/chu327/image/upload/v1532584209/Screen_Shot_2018-07-25_at_10.39.02_PM_jhdlva.png" align="center" width="600" overflow="hidden">

#### Dashboard
<img src="https://res.cloudinary.com/chu327/image/upload/v1532584218/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7_2018-07-25_10.46.14_PM_jxiqrj.png" align="center" width="600" overflow="hidden">

### Installing
```javascript
npm install
```
### Run Locally
For backend:
```javascript
npm start
```
### Deployment
The app's front-end and back-end are deployed separately to Heroku(only backend files are displayed on Github). Due to Same Origin Policy, CORS is required to enable the front-end server to get access to the backend server. 

### Tech Stack
* React 
* React-Router
* Redux
* ExpressJS
* PostgreSQL
* KnexJS
* JavaScript

### Furthur Info About the App
* To sign in the app, enter any combination of user and number from 0 to 99, such as user32; no password is required for now. 
* Sign up feature will post the entered data into the database, so be cautious with what is entered.
* The app is still in development, therefore, features such as user login authentication and direct message are not available yet. 
