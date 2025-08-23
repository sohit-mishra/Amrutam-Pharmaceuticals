# Amrutam Pharmaceuticals - Full Stack Development Assignment

## Overview

This is a Full Stack web application built as part of the Amrutam Pharmaceuticals internship assignment. The project includes **Task 4 - Affiliate Portal**, with **10 pages** implemented using **React.js** for the frontend and **Node.js + MongoDB** for the backend. The app includes APIs, schemas, and business logic based on the requirements.

---

## Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/sohit-mishra/Amrutam-Pharmaceuticals.git
cd Amrutam-Pharmaceuticals
```

### 2. Install dependencies in the root folder
```
npm install
```

### 3. Setup Backend
```
cd Backend
npm install
```

Create a .env file in the backend folder with the following variables:

```
PORT=5000
MONGO_URI=<your_mongodb_connection_string>
FRONTEND_URL=http://localhost:5137
```

### 4. Setup Frontend
```
cd ../Frontend
npm install
```

Create a .env file in the frontend folder with the following variables:

```
VITE_API_URL=http://localhost:5000
```

Start the Root Folder:
```
npm run dev
```
Usage
Open the frontend in your browser (usually http://localhost:5173 with Vite).

The application contains 10 pages related to the Affiliate Portal task.

All APIs are connected to MongoDB via the backend server.

Submission
Hosted version: https://amrutam-pharmaceuticals.onrender.com/

GitHub repository: https://github.com/sohit-mishra/Amrutam-Pharmaceuticals