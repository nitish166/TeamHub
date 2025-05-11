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
     ```markdown
     DATABASE_URL="postgresql://<username>:<password>@localhost:5433/teamhub"
     PORT=5000
     JWT_SECRET=your_jwt_secret
     ```

```markdown
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
