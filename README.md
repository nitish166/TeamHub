# TeamHub

TeamHub is a web application for managing teams, projects, and tasks efficiently. It includes features like user authentication, team management, project tracking, and task management.

---

## Setup Instructions

### Prerequisites
Ensure you have the following installed on your system:
- **Node.js** (v16 or higher)
- **npm** (v8 or higher)
- **PostgreSQL** (v13 or higher)

---

### Backend Setup

1. **Clone the Repository**:
   ```bash
   git clone <repository-url>
   cd teamhub-backend
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:
   - Create a .env file in the teamhub-backend directory.
   - Add the following variables:
     ```bash
     DATABASE_URL="postgresql://<username>:<password>@localhost:5433/teamhub"
     PORT=5000
     JWT_SECRET=your_jwt_secret
     ```

4. **Set Up the Database**:

   Ensure PostgreSQL is running on your system.

   - Create a database named `teamhub`:
     ```sql
     CREATE DATABASE teamhub;
     ```

   - Run Prisma migrations to set up the database schema:
     ```bash
     npx prisma migrate dev --name init
     ```

5. **Start the Backend Server**:

   ```bash
   npm start
   ```

   The backend server will run on [http://localhost:5000](http://localhost:5000).



### Frontend Setup

1. **Navigate to the Frontend Directory**:
   ```bash
   cd ../teamhub-frontend
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start the Frontend Development Server**:
   ```bash
   npm run dev
   ```

   The frontend will run on [http://localhost:5173](http://localhost:5173).

### Access the Application

Open your browser and navigate to [http://localhost:5173](http://localhost:5173).  
Sign up or log in to start using TeamHub.

---

## Architecture Overview and Decisions

### Application Architecture

TeamHub is built using a **modern web application architecture** with a clear separation of concerns between the frontend and backend. The architecture follows the **client-server model**:

1. **Frontend**:
   - Built with **React** and **TypeScript**.
   - Uses **Redux** for state management.
   - Communicates with the backend via RESTful APIs.
   - Styled using **Tailwind CSS** for a responsive and modern UI.

2. **Backend**:
   - Built with **Node.js** and **Express.js**.
   - Uses **Prisma ORM** for database interactions.
   - Implements **JWT-based authentication** for secure user sessions.
   - Exposes RESTful APIs for frontend communication.

3. **Database**:
   - Uses **PostgreSQL** as the relational database.
   - Designed with normalized tables for users, teams, projects, and tasks.
   - Managed using **Prisma Migrations** for schema versioning.

---

### Key Architectural Decisions

1. **Separation of Concerns**:
   - The frontend and backend are developed as separate applications to ensure modularity and scalability.
   - This allows independent deployment and scaling of the frontend and backend.

2. **State Management**:
   - **Redux** is used in the frontend to manage global application state, such as user authentication and team/project/task data.
   - This ensures a predictable state flow and simplifies debugging.

3. **Database Design**:
   - The database schema is designed to support relationships between users, teams, projects, and tasks.
   - **Prisma ORM** is used for type-safe database queries and migrations.

4. **Authentication**:
   - **JWT (JSON Web Tokens)** is used for secure user authentication.
   - Tokens are stored in the frontend and sent with each API request for authorization.

5. **RESTful API Design**:
   - The backend exposes RESTful APIs for all core functionalities (e.g., user authentication, team management, project management, task management).
   - Each API endpoint is protected with middleware to ensure only authenticated users can access it.

6. **Scalability**:
   - The architecture is designed to scale horizontally by deploying the frontend and backend on separate servers or containers.
   - The database can be scaled vertically or horizontally using PostgreSQL's built-in features.

7. **Error Handling**:
   - The backend includes centralized error handling to provide consistent error responses to the frontend.
   - The frontend displays user-friendly error messages for better UX.

8. **Code Quality**:
   - **TypeScript** is used in both the frontend and backend to ensure type safety and reduce runtime errors.
   - The project follows a modular folder structure for better maintainability.

---

## API Documentation

The backend exposes RESTful APIs for all core functionalities, including user authentication, team management, project management, and task management. Below is the documentation for the key endpoints.

---

### **Authentication**

#### 1. **User Signup**
- **Endpoint**: `/api/auth/signup`
- **Method**: `POST`
- **Description**: Registers a new user.
- **Request Body**:
  ```json
  {
    "name": "Nitish Kumar",
    "email": "knitish123@gmail.com",
    "password": "nitish123"
  }
  ```
- **Response**:
  ```json
  {
    "success": true,
    "message": "User registered successfully"
  }
  ```

#### 2. **User Login**
- **Endpoint**: `/api/auth/login`
- **Method**: `POST`
- **Description**: Authenticates a user and returns a JWT token.
- **Request Body**:
  ```json
  {
    "email": "knitish123@gmail.com",
    "password": "nitish123"
  }
  ```
- **Response**:
  ```json
  {
    "success": true,
    "token": "<JWT_TOKEN>"
  }
  ```

### **Team Management**

#### 1. **Create a Team**
- **Endpoint**: `/api/team/create`
- **Method**: `POST`
- **Description**: Creates a new team.

- **Headers**:
  ```json
  {
    "Authorization": "Bearer <JWT_TOKEN>"
  }
  ```

- **Request Body**:
  ```json
  {
    "teamName": "Team Alpha"
  }
  ```


- **Response**:
  ```json
  {
    "success": true,
    "team": {
      "id": "team-id",
      "name": "Team Alpha"
    }
  }
  ```

3. **List Team Members**
   - **Endpoint**: `/api/team/:teamId/members`
   - **Method**: `GET`
   - **Description**: Retrieves a list of all members in a team.
   - **Headers**:
     ```json
     {
       "Authorization": "Bearer <JWT_TOKEN>"
     }
     ```

- **Response**:
```json
{
  "success": true,
  "members": [
    {
      "id": "user-id",
      "name": "Nitish Kumar",
      "email": "knitish123@gmail.com"
    }
  ]
}
  ```

### **Project Management**

#### 1. **Create a Project**
- **Endpoint**: `/api/project/create`
- **Method**: `POST`
- **Description**: Creates a new project within a team.
- **Headers**:
  ```json
  {
    "Authorization": "Bearer <JWT_TOKEN>"
  }
  ```

- **Request Body**:
  ```json
  {
    "teamId": "team-id",
    "projectName": "Project Alpha"
  }
  ```

- **Response**:
  ```json
  {
    "success": true,
    "project": {
      "id": "project-id",
      "name": "Project Alpha"
    }
  }
  ```

### **Task Management**

#### 1. **Add a Task to a Project**
- **Endpoint**: `/api/project/task`
- **Method**: `POST`
- **Description**: Adds a new task to a project.
- **Headers**:
  ```json
  {
    "Authorization": "Bearer <JWT_TOKEN>"
  }
  ```

- **Request Body**:
  ```json
  {
  "projectId": "project-id",
  "title": "Task 1",
  "description": "This is the first task",
  "status": "To Do",
  "assignedToId": "user-id",
  "dueDate": "2025-12-31T23:59:59.000Z"
    }
  ```

- **Response**:
  ```json
  {
    "success": true,
    "task": {
      "id": "task-id",
      "title": "Task 1",
      "status": "To Do"
    }
  }
  ```
2. **Update a Task**
- **Endpoint**: `/api/project/task/:taskId`
- **Method**: `PUT`
- **Description**: Updates a task's details (e.g., status, assigned user, etc.).

- **Headers**:
  ```json
  {
    "Authorization": "Bearer <JWT_TOKEN>"
  }
  ```

- **Request Body**:
  ```json
  {
    "status": "In Progress",
    "assignedToId": "new-user-id"
  }
  ```
- **Response**:
  ```json
  {
    "success": true,
    "task": {
      "id": "task-id",
      "title": "Task 1",
      "status": "In Progress"
    }
  }
  ```

---

## ER Diagram / Database Schema Explanation

The database schema for TeamHub is designed to support the relationships between users, teams, projects, and tasks. Below is the ER diagram and an explanation of the schema.

---

### ER Diagram

```plaintext
+----------------+       +----------------+       +----------------+       +----------------+
|     User       |       |     Team       |       |    Project     |       |     Task        |
+----------------+       +----------------+       +----------------+       +----------------+
| id (PK)        |<----->| id (PK)        |<----->| id (PK)        |<----->| id (PK)         |
| name           |       | name           |       | name           |       | title           |
| email (unique) |       |                |       | teamId (FK)    |       | description     |
| password       |       |                |       |                |       | status          |
+----------------+       +----------------+       +----------------+       | assignedToId (FK)|
                                                             | dueDate        |
                                                             +----------------+

```

## Schema Explanation

### User Table
- Stores user information such as `id`, `name`, `email`, and `password`.
- Each user can belong to multiple teams through the **TeamUser** relationship.

### Team Table
- Represents a team with a unique `id` and `name`.
- A team can have multiple members (users) and multiple projects.

### Project Table
- Represents a project with a unique `id`, `name`, and a foreign key `teamId` linking it to a team.
- A project can have multiple tasks.

### Task Table
- Represents a task with a unique `id`, `title`, `description`, `status`, `assignedToId` (user assigned to the task), and `dueDate`.
- Each task belongs to a project through the `projectId` foreign key.

### Relationships
- **User ↔ Team**: Many-to-Many relationship through the **TeamUser** table.
- **Team ↔ Project**: One-to-Many relationship (a team can have multiple projects).
- **Project ↔ Task**: One-to-Many relationship (a project can have multiple tasks).
- **Task ↔ User**: Many-to-One relationship (a task is assigned to one user).


### Database Schema (Prisma Models)
Below is the Prisma schema used to define the database:


````markdown
model User {
  id        String   @id @default(uuid())
  name      String
  email     String   @unique
  password  String
  teams     TeamUser[]
  tasks     Task[]   @relation("AssignedTasks")
}

model Team {
  id        String     @id @default(uuid())
  name      String
  projects  Project[]
  members   TeamUser[]
}

model TeamUser {
  id      String @id @default(uuid())
  userId  String
  teamId  String
  user    User   @relation(fields: [userId], references: [id])
  team    Team   @relation(fields: [teamId], references: [id])
}

model Project {
  id        String   @id @default(uuid())
  name      String
  teamId    String
  team      Team     @relation(fields: [teamId], references: [id])
  tasks     Task[]
}

model Task {
  id           String   @id @default(uuid())
  title        String
  description  String
  status       String
  assignedToId String?
  assignedTo   User?    @relation("AssignedTasks", fields: [assignedToId], references: [id])
  projectId    String
  project      Project  @relation(fields: [projectId], references: [id])
  dueDate      DateTime
}
`````

---

## Swagger API Documentation

TeamHub's backend includes **Swagger API documentation** to provide a detailed overview of all available endpoints. Swagger makes it easy to test and understand the API.

### Features of Swagger Documentation:
- Provides a user-friendly interface to explore and test API endpoints.
- Displays detailed information about request methods, parameters, and responses.
- Helps developers and testers understand the API structure.

### Accessing Swagger Documentation:
1. Start the backend server:
   ```bash
   npm start
```


2. Open your browser and navigate to:
```bash
http://localhost:5000/api/docs
```

3. Explore the API endpoints:

- **Authentication**: Endpoints for user signup and login.
- **Team Management**: Endpoints for creating teams, inviting users, and listing team members.
- **Project Management**: Endpoints for creating projects and managing tasks.

**Example**:  
The Swagger UI will display endpoints like:
- `POST /api/auth/signup`: Register a new user.
- `POST /api/team/create`: Create a new team.
- `POST /api/project/task`: Add a task to a project.