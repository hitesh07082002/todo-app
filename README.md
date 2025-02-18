# 📝 TODO App

A **full-stack** Task Management Application built with **MERN** (MongoDB, Express.js, React, Node.js) that allows users to **register, log in, create, edit, delete, and manage tasks** efficiently. The app is fully deployed on **Vercel**.

## 🌍 Live Demo

- **Frontend:** [todo-app-front-two.vercel.app](https://todo-app-front-two.vercel.app)  
- **Backend:** [todo-app-two-pi-72.vercel.app/api/health](https://todo-app-two-pi-72.vercel.app/api/health) _(Health check)_

---

## 🚀 Features

✅ **User Authentication** (Register, Login, Logout)  
✅ **Task Management** (Create, Read, Update, Delete Tasks)  
✅ **Persistent Storage** with MongoDB  
✅ **Protected Routes** (JWT Authentication)  
✅ **Sorting & Filtering Tasks**  
✅ **Responsive UI** built with React  
✅ **Error Handling & Toast Notifications**  

---

## 🛠️ Tech Stack

| **Frontend**       | **Backend**      | **Database** | **Deployment** |
|--------------------|-----------------|--------------|---------------|
| React.js          | Node.js          | MongoDB      | Vercel       |
| React Router      | Express.js       | Mongoose     | GitHub       |
| React Toastify    | JWT Auth         | Atlas Cloud  | CI/CD        |

---

## 🏗️ Installation & Setup

### 🔹 Prerequisites
Ensure you have the following installed:
- **Node.js** (v16+)
- **MongoDB** (Cloud/Local)
- **Git**

---

### 🔹 Backend Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/hitesh07082002/todo-app.git
    cd todo-app/backend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file and configure:
    ```env
    MONGO_URI=your_mongodb_uri
    JWT_SECRET=your_jwt_secret
    ```

4. Start the server:
    ```bash
    npm start
    ```

---

### 🔹 Frontend Setup

1. Navigate to the frontend:
    ```bash
    cd ../frontend
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Create a `.env` file and configure:
    ```env
    REACT_APP_API_URL=https://todo-app-two-pi-72.vercel.app/api
    ```

4. Start the development server:
    ```bash
    npm start
    ```

---

## 🚀 Deployment

### 🔹 Backend Deployment on Vercel

1. Navigate to the backend:
    ```bash
    cd backend
    ```

2. Push code to GitHub:
    ```bash
    git add .
    git commit -m "Deploy backend"
    git push origin main
    ```

3. Deploy to **Vercel**:
    - Go to [Vercel](https://vercel.com/)
    - Create a **New Project**
    - Select your GitHub repo
    - Set **Environment Variables** (`MONGO_URI`, `JWT_SECRET`)
    - Click **Deploy**

---

### 🔹 Frontend Deployment on Vercel

1. Navigate to the frontend:
    ```bash
    cd frontend
    ```

2. Build and push changes:
    ```bash
    npm run build
    git add .
    git commit -m "Deploy frontend"
    git push origin main
    ```

3. Deploy to **Vercel**:
    - Go to [Vercel](https://vercel.com/)
    - Create a **New Project**
    - Select your GitHub repo
    - Set **Environment Variables** (`REACT_APP_API_URL`)
    - Click **Deploy**

---

## 📸 Screenshots

### 🔹 Home Page
![Home](https://your-image-link.com/home.png)

### 🔹 Task Management
![Tasks](https://your-image-link.com/tasks.png)

### 🔹 Authentication
![Login](https://your-image-link.com/login.png)

---

## 🚀 Future Improvements

- ✅ Drag & Drop Task Reordering  
- ✅ Dark Mode  
- ✅ Multi-User Collaboration  
- ✅ Email Notifications  

---

## 📜 Problem Statement

### **Objective**  
Develop a web-based **TODO application** that helps users manage their tasks efficiently.

### **Functional Requirements**  

#### 1️⃣ **Task Management**  
- Users can create, modify, and delete TODOs.  
- Each TODO contains:  
  - **Title**  
  - **Description**  
  - **Status** (_ACTIVE, IN_PROGRESS, COMPLETE, EXPIRED_)  
  - **Deadline**  

#### 2️⃣ **Task Status & Expiry**  
- A task remains **ACTIVE** unless updated.  
- Users can mark a TODO as **IN_PROGRESS, COMPLETE, or EXPIRED**.  
- If the deadline passes and the task is incomplete, it is automatically marked as **EXPIRED**.  

#### 3️⃣ **Viewing & Searching**  
- List all TODOs with **filtering options**.  
- Search by **title** or **description**.  
- Sort tasks by **deadline** (urgent tasks first) and **status** (e.g., only non-complete/in-progress tasks).  

#### 4️⃣ **Authentication & Security**  
- **User Registration & Login** via **username/password**.  
- **Password reset** & logout functionality.  

---



## 📝 License

This project is **MIT Licensed**. Feel free to use and modify. 🚀
