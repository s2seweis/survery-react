# Survey App with React and Firebase

This project is a simple survey application built using React for the front-end and Firebase for the back-end. Users can participate in surveys created by the admin and view the results of completed surveys. This application allows you to create custom surveys, collect responses, and analyze the results.

## Features

- **Authentication:** Users can sign up and log in to participate in surveys.
- **Survey Creation:** Admin can create custom surveys with multiple-choice questions.
- **Survey Participation:** Users can participate in surveys by selecting their answers.
- **Survey Results:** Admin can view the survey results in real-time.

## Technologies Used

- **React:** A JavaScript library for building user interfaces.
- **Firebase:** A cloud-based platform for building mobile and web applications.
  - **Firebase Authentication:** For user authentication.
  - **Cloud Firestore:** A NoSQL database to store survey data.
- **SurveyJS:** A JavaScript survey library for building interactive surveys and forms.

## Getting Started

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd survey-app
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up Firebase:
   - Create a Firebase project on the Firebase Console.
   - Set up Firebase Authentication and configure the sign-in methods.
   - Enable Cloud Firestore for the project.

4. Configure Firebase:
   - Create a `.env` file in the root directory of the project.
   - Add your Firebase configuration to the `.env` file:

     ```env
     REACT_APP_FIREBASE_API_KEY=<your-api-key>
     REACT_APP_FIREBASE_AUTH_DOMAIN=<your-auth-domain>
     REACT_APP_FIREBASE_PROJECT_ID=<your-project-id>
     REACT_APP_FIREBASE_STORAGE_BUCKET=<your-storage-bucket>
     REACT_APP_FIREBASE_MESSAGING_SENDER_ID=<your-messaging-sender-id>
     REACT_APP_FIREBASE_APP_ID=<your-app-id>
     ```

5. Start the development server:

   ```bash
   npm start
   ```

6. Access the application at `http://localhost:3000`.

Happy surveying! 📝✨

## Coming: 
1. Add Admin & User Routes 
2. Admin Area 
3. Area for Chart.js
4. Auth
5. Results for the Survey/User
6. Drag & Drop (DnD)
https://www.freecodecamp.org/news/how-to-add-drag-and-drop-in-react-with-react-beautiful-dnd/
7. Build a form for add JSON Form Data and make it flexible
8. "drag and drop for a from for reorder the questions react give me an example"
