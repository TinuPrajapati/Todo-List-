# Todo List Website

This project is a full-stack Todo List application built with the MERN stack. The application allows users to add, edit, update the status, and delete tasks. The status change dynamically updates the color of the tasks for better visualization. The frontend is built with ReactJS and styled using `react-toastify` for user notifications.

### Deploy Link
- : https://todo-list-based-on-mern-front.vercel.app/

## Features

- **Add Tasks**: Users can add new tasks to their to-do list.
- **Change Task Status**: Update the status of tasks (e.g., pending, completed). Status changes are visually represented by color changes.
- **Edit Tasks**: Modify the details of existing tasks.
- **Delete Tasks**: Remove tasks from the list.
- **Interactive UI**: Responsive and user-friendly interface with real-time updates.
- **Notifications**: Instant feedback for user actions using `react-toastify`.

## Tech Stack

### Frontend
- **ReactJS**
- **React Toastify**: For displaying notifications

### Backend
- **MongoDB**: Database for storing tasks
- **ExpressJS**: Web framework for the server
- **NodeJS**: Backend runtime environment

### Other Tools
- **Axios**: For API requests
- **CSS**: Styling the application

## Installation and Setup

### Prerequisites
- Node.js installed on your machine
- MongoDB installed and running

### Steps

#### Clone the Repository
```bash
git clone https://github.com/your-repo/todo-list-mern.git
cd todo-list-mern
```

#### Backend Setup
1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the `backend` directory and configure the following:
   ```env
   MONGO_URI=your_mongo_connection_string
   PORT=5000
   ```
4. Start the backend server:
   ```bash
   npm start
   ```

#### Frontend Setup
1. Navigate to the `frontend` directory:
   ```bash
   cd ../frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the React development server:
   ```bash
   npm start
   ```

The application should now be running at `http://localhost:3000`.

## API Endpoints

### Base URL: `http://localhost:8000`

#### Task Endpoints

| Method | Endpoint          | Description          |
|--------|-------------------|----------------------|
| GET    | `/tasks`          | Get all tasks        |
| POST   | `/new_task`          | Create a new task    |
| PUT    | `/edit_task`          | Update a task        |
| DELETE | `/delete_task/:id`      | Delete a task        |

## Folder Structure

```
├── backend
│   ├── models
│   ├── routes
│   ├── index.js
│   └── .env
├── frontend
│   ├── public
│   ├── src
│   │   ├── components
│   │   ├── App.js
│   │   └── index.js
├── README.md
```

## Usage

1. Open the application in your browser at `http://localhost:3000`.
2. Add a new task using the input field and "Add Task" button.
3. Change a task's status by clicking on it; the color will update dynamically.
4. Edit or delete tasks using the corresponding buttons.
5. Notifications will appear for all actions to ensure user feedback.

## Screenshots
