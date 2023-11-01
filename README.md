# Survey App with React and Firebase
This project is a simple survey application built using React for the front-end and Firebase for the back-end. Users can participate in surveys created by the admin and view the results of completed surveys. This application allows you to create custom surveys, collect responses, and analyze the results.

# Features
- **Authentication:** Users can sign up and log in to participate in surveys.
- **Survey Creation:** Admin can create custom surveys with multiple-choice questions.
- **Survey Participation:** Users can participate in surveys by selecting their answers.
- **Survey Results:** Admin & Users can view the survey results.
- **Chart.js** For show graphically the survey results - (At the moment We use dunny data). 

# Technologies Used
- **React:** A JavaScript library for building user interfaces.
- **React Redux:**  A predictable state container for JavaScript applications.
- **Firebase:** A cloud-based platform for building mobile and web applications.
  - **Firebase Authentication:** For user authentication.
  - **Cloud Firestore:** A NoSQL database to store survey data.
- **SurveyJS:** A JavaScript survey library for building interactive surveys and forms.
- **React Beautiful DND:**  A library for building smooth and accessible drag-and-drop interfaces in React applications.
- **Styles imported as a module:** This way, styles are scoped to specific components, avoiding global namespace collisions and making your CSS more modular and maintainable.. 
- **ESLint:** For identifying and fixing problems in JavaScript code.



# Good to know for this project: 

# Styling
- In this approach, styles are imported as a module, and specific class names (styles.formContainer ...) are used for each element. 
- These class names are scoped to this component, ensuring they won't conflict with styles in other parts of your application.
- See Contact.js and Contact.css. 

# Eslint
1. For seeing the errors in the browser:
2. run npx eslint . = for showing the probs and errors in the console
3. run npx eslint . --fix (will show the props in the browser)
4. start working on a file

# Getting Started:

In your project directory, create a new file named .env. Inside this file, define your Firebase configuration variables without quotes or any special characters.

1.  Example .env file:

REACT_APP_FIREBASE_API_KEY=your-api-key
REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
REACT_APP_FIREBASE_PROJECT_ID=your-project-id
REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
REACT_APP_FIREBASE_APP_ID=your-app-id

2. Update Your Firebase Configuration File:
- Modify your Firebase configuration file to read the environment variables from the .env file.

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID,
};

3. Install dependencies:
- npm install

export default firebaseConfig;

4. To run the project locally, use the following command:
- npm start/ npm run start

# Preview

![Alt text](<images/login.png>)
![Alt text](<images/routes.png>)
![Alt text](<images/sidemenu.png>)
![Alt text](<images/survey.png>)


Happy surveying! 📝✨


