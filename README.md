# awaftp

`awaftp` is a FTP manager based on Node.js and React. It allows you to connect to FTP servers, upload files, and download files through a user-friendly interface.

## Features

- Connect to FTP server
- Upload files
- Download files

## Project Structure

```plaintext
awaftp/
├── backend/
│   ├── controllers/
│   │   ├── ftpController.js
│   ├── routes/
│   │   ├── ftpRoutes.js
│   ├── models/
│   │   ├── user.js
│   ├── utils/
│   │   ├── ftpClient.js
│   ├── app.js
│   ├── server.js
├── frontend/
│   ├── public/
│   │   ├── index.html
│   ├── src/
│   │   ├── components/
│   │   │   ├── FtpManager.js
│   │   │   ├── Login.js
│   │   ├── services/
│   │   │   ├── ftpService.js
│   │   ├── App.js
│   │   ├── index.js
│   ├── package.json
├── .gitignore
├── README.md
├── package.json
```

## Getting Started

### Prerequisites

Ensure you have the following installed on your local machine:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [MongoDB](https://www.mongodb.com/) (if using user management)

### Installation

#### Backend

1. Navigate to the `backend` directory:
    ```sh
    cd backend
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

3. Start the server:
    ```sh
    npm start
    ```

#### Frontend

1. Navigate to the `frontend` directory:
    ```sh
    cd frontend
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

3. Start the development server:
    ```sh
    npm start
    ```

### Running the Application

1. Ensure both backend and frontend servers are running.
2. Open your browser and navigate to `http://localhost:3000`.
3. On the login page, enter the FTP server connection details (host, port, user, password).
4. Once connected, use the management interface to upload and download files.

## Project Details

### Backend

- **Controllers**: Business logic handling.
  - `ftpController.js`: Handles FTP operations like connecting, uploading, and downloading files.

- **Routes**: API endpoint definitions.
  - `ftpRoutes.js`: Defines FTP related API routes.

- **Models**: Data models.
  - `user.js`: User data model (if user management is required).

- **Utils**: Utility functions and configurations.
  - `ftpClient.js`: Configures and initializes the FTP client.

- `app.js`: Main Express application configuration.
- `server.js`: Entry point to start the backend server.

### Frontend

- **Public**: Static resources.
  - `index.html`: Main HTML file.

- **Src**: Source code for React application.
  - **Components**: React components.
    - `FtpManager.js`: Component for managing FTP operations.
    - `Login.js`: Component for user login.
  - **Services**: Interactions with backend APIs.
    - `ftpService.js`: Service for FTP API interactions.
  - `App.js`: Main application component.
  - `index.js`: Application entry point.

## Contributing

We welcome contributions! Please fork this repository and submit pull requests.

## License

This project is licensed under the MIT License.
```

### Example Usage

```plaintext
# Connect to FTP Server
POST /api/ftp/connect
Request Body: {
  "host": "ftp.example.com",
  "port": 21,
  "user": "username",
  "password": "password"
}

# Upload File
POST /api/ftp/upload
Form Data: {
  "file": <file>
}

# Download File
GET /api/ftp/download?filename=<filename>
```

### Environment Variables

Create a `.env` file in the `backend` directory to manage environment variables such as MongoDB URI:

```plaintext
MONGODB_URI=mongodb://localhost:27017/awaftp
```

## Dependencies

### Backend

- `express`: Fast, unopinionated, minimalist web framework for Node.js
- `ftp`: An FTP client module for Node.js
- `mongoose`: MongoDB object modeling for Node.js
- `express-fileupload`: Simple express middleware for uploading files

### Frontend

- `react`: A JavaScript library for building user interfaces
- `react-dom`: Serves as the entry point to the DOM and server renderers for React
- `react-router-dom`: Declarative routing for React
- `axios`: Promise-based HTTP client for the browser and Node.js

With these detailed instructions and examples, you should be able to set up and run the `awaftp` project smoothly. If you have any questions or issues, feel free to open an issue on the GitHub repository.
