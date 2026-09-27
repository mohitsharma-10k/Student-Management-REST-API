# 🎓 Student Management REST API - Node.js & Express

A modern, fast, and lightweight RESTful API for managing student records. Built completely from scratch without external databases (using in-memory data structures) for **Unit 2 - Web Dev III**.

---

## 🌟 Highlights & Features
- **Zero-Database Architecture**: Utilizes JavaScript arrays for fast, in-memory data storage.
- **Strict REST Conventions**: Implements full CRUD (Create, Read, Update, Delete) adhering to industry standards.
- **Custom Request Interceptor**: Features a bespoke logger middleware that tracks the timestamp, HTTP method, and endpoint for every incoming hit.
- **Graceful Error Handling**: Bulletproof validation and 404/400/500 error management so the server never crashes on bad inputs.

---

## 🏗 Directory Layout

```text
📦 student-management-api
 ┣ 📂 data
 ┃ ┗ 📜 students.js        # The core data model & initial dummy data
 ┣ 📂 middleware
 ┃ ┗ 📜 logger.js          # Middleware function for tracking traffic
 ┣ 📂 routes
 ┃ ┗ 📜 studentRoutes.js   # API endpoints and business logic
 ┣ 📜 app.js               # Application bootstrap and configuration
 ┣ 📜 package.json         # Node.js dependencies
 ┗ 📜 README.md            # Documentation
```

---

## 🚀 Quick Start Guide

**1. Install Dependencies**
```bash
npm install
```

**2. Boot the Server**
```bash
node app.js
```
*The API will go live on `http://localhost:3000`*

---

## 📌 Available Endpoints

### `GET /students`
Fetches the complete directory of all students.

### `GET /students/:id`
Looks up a specific student by their `studentId` (e.g., `STU001`). 

### `POST /students`
Registers a new student into the system.
**Required Payload:**
```json
{
  "studentId": "STU099",
  "name": "New Student",
  "age": 20,
  "course": "Btech CSE"
}
```

### `PUT /students/:id`
Updates fields for an existing student. You only need to send the fields you wish to change.

### `DELETE /students/:id`
Removes a student from the system entirely.

---

## ⚙️ Built With
- [Node.js](https://nodejs.org/) - The JavaScript runtime
- [Express](https://expressjs.com/) - The routing framework
- Designed & Developed by **Mohit Sharma**
