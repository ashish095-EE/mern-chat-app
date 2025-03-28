https://yappie.onrender.com


# MERN Stack Chat App

A real-time chat application built using the MERN (MongoDB, Express, React, Node.js) stack, featuring JWT authentication, Socket.io for real-time messaging, and MongoDB for data storage.

## Features

- **User Authentication**: Secure authentication using JWT (JSON Web Tokens).
- **Real-Time Messaging**: Instant chat functionality powered by Socket.io.
- **Group Chats**: Ability to create and join group chats.
- **MongoDB Storage**: Messages and user data are stored in MongoDB.
- **Responsive UI**: Built with React and styled for a seamless user experience.
- **Typing Indicators**: Shows when a user is typing.
- **Read Receipts**: Notifies users when messages are read.

## Tech Stack

- **Frontend**: React, Redux, TailwindCSS
- **Backend**: Node.js, Express.js, MongoDB
- **Authentication**: JWT for user authentication
- **Real-Time Communication**: Socket.io for instant messaging
- **Database**: MongoDB with Mongoose ORM
- **Deployment**: Vercel (Frontend) & Render/Heroku (Backend)

## Installation & Setup

### Prerequisites
- Node.js and npm installed
- MongoDB instance (local or cloud)

### Clone the Repository
```sh
git clone https://github.com/yourusername/mern-chat-app.git
cd mern-chat-app
```

### Backend Setup
1. Navigate to the backend directory:
   ```sh
   cd backend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Create a `.env` file and add the following:
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_secret_key
   PORT=5000
   ```
4. Start the backend server:
   ```sh
   npm run dev
   ```

### Frontend Setup
1. Navigate to the frontend directory:
   ```sh
   cd ../frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the React application:
   ```sh
   npm start
   ```

## Deployment
### Backend Deployment
Deploy your backend on Render or Heroku.
- Ensure you set environment variables in the hosting service.
- Use `npm start` as the start command.

### Frontend Deployment
Deploy your frontend on Vercel or Netlify.
- Run `npm run build` to generate optimized production files.
- Upload the `build/` folder or link the repository for automatic deployment.

## API Routes
### Authentication
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Authenticate user and return JWT

### Chat
- `GET /api/chats` - Fetch user chats
- `POST /api/chats` - Create a new chat

### Messages
- `GET /api/messages/:chatId` - Get messages for a chat
- `POST /api/messages` - Send a new message

## Socket.io Events
- `connect` - Establishes a socket connection
- `message` - Sends and receives messages
- `typing` - Broadcasts typing indicators
- `disconnect` - Handles user disconnection

## Future Enhancements
- **Voice & Video Calls**
- **Message Reactions**
- **Push Notifications**

## Contributing
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push the branch
5. Open a Pull Request

## License
This project is licensed under the MIT License.

---
Happy Coding! 🚀


