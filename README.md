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

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your machine.
- Firebase project set up with authentication and Cloud Firestore enabled.

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

## Usage

- **User:** Sign up or log in to participate in surveys. Answer the questions and submit your responses.
- **Admin:** Log in with the admin credentials to create new surveys, view survey results, and manage existing surveys.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue if you find any problems or have suggestions for improvements.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Happy surveying! 📝✨