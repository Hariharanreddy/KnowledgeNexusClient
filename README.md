# Knowledge Nexus - eLearning Platform

Knowledge Nexus is an eLearning platform built using the MERN (MongoDB, Express.js, React, Node.js) stack. It provides students with access to educational resources at any time and from anywhere, while allowing educators to reach a global audience and deliver quality education. This repository contains the source code for the Knowledge Nexus platform.


![Untitled video - Made with Clipchamp (2)](https://github.com/Hariharanreddy/KnowledgeNexusClient/assets/82924830/d2dc0277-b628-40b7-b62e-030dd7c327c7)


## Features

Apologies for the length. Here are the features in a concise format:

- Admin Dashboard:
  - A dedicated dashboard for administrators to manage and monitor the platform.
  - Access to user management, course management, and content moderation.

- Payment Integration:
  - Integration with Razorpay for secure and seamless online payment processing.
  - Users can make payments for courses, subscriptions, or additional resources.

- Debouncing:
  - Utilizes debouncing technique to optimize user input handling.
  - Prevents excessive API calls or form submissions by delaying requests until the user stops typing.

- Interactive Charts:
  - Integration with Chart.js library to display visually appealing and responsive charts.
  - Provides data visualization for analytics, progress tracking, or course performance.

- Password Reset via Email:
  - Allows users to reset their passwords through a password reset email.
  - Users receive a secure link in their registered email to reset their password.

- Authentication:
  - User registration and login system with secure authentication using JWT (JSON Web Tokens).
  - Allows users to access personalized content, track progress, and save preferences.

- Lectures and User Management:
  - Educators can create and manage lecture materials, including videos, presentations, or documents.
  - Users can access lectures, bookmark content, and track their progress.

## Tech Stack

- Front-end:
  - React: JavaScript library for building user interfaces.
  - Chart.js: JavaScript library for creating responsive charts.
  - Chakra-UI: Component library for building React applications.
  - Redux: Predictable state management for large-scale applications.

- Back-end:
  - Node.js: JavaScript runtime environment.
  - Express.js: Minimalist web framework for building web applications and APIs.
  - MongoDB: NoSQL database program that uses JSON-like documents.

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
```

2. Install dependencies for the server:

```bash
cd server
npm install
```

3. Install dependencies for the client:

```bash
cd client
npm install
```

4. Set up environment variables:

Create a `.env` file in the server directory and configure the following variables:

```dotenv
PORT=<server-port>
MONGODB_URI=<mongodb-connection-uri>
JWT_SECRET=<jwt-secret-key>
CLOUDINARY_API_KEY=<cloudinary-api-key>
CLOUDINARY_API_SECRET=<cloudinary-api-secret>
RAZORPAY_KEY_ID=<razorpay-key-id>
RAZORPAY_KEY_SECRET=<razorpay-key-secret>
EMAIL_USERNAME=<email-username>
EMAIL_PASSWORD=<email-password>
```

5. Start the development server:

```bash
cd server
npm run dev
```

6. Start the client:

```bash
cd client
npm start
```

7. Open the application in your browser:

```
http://localhost:3000
```

## Folder Structure

- `client`: Contains the front-end code and React components.
- `server`: Contains the back-end code and API routes.
- `server/controllers`: Controllers for handling API requests.
- `server/models`: Database models using MongoDB.
- `server/routes`: API routes.
- `server/config`: Configuration files for database connection and other settings.

## Contributing

We welcome contributions to improve the Knowledge Nexus platform. If you have any suggestions, bug reports, or feature requests, please open an issue or submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use and modify the code as per your needs.
