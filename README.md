# Server (Backend)

This is the TypeScript + Express + MongoDB backend for the Action Item App.

## Prerequisites
- Node.js (v18 or higher recommended)
- npm (v9 or higher recommended)
- MongoDB (local or cloud instance)

## Setup
1. Install dependencies:
   ```sh
   npm install
   ```

2. Configure environment variables:
   - Copy `.env.example` to `.env` and set your MongoDB URI and any other secrets.
   - Example:
     ```env
     MONGODB_URI=mongodb://localhost:27017/user-profiles
     PORT=5001
     ```

## Development
Start the development server (with hot reload):
```sh
npm run dev
```
- The server will run on [http://localhost:5001](http://localhost:5001) by default.

## Build for Production
To build the server:
```sh
npm run build
```

To start the production server:
```sh
npm start
```

## Features
- RESTful API for user management
- MongoDB for persistent storage
- TypeScript for type safety 