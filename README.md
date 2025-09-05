# Qargo Coffee Notes

A note-taking web application built with **React**, **Redux Toolkit**, and **React Router**, with authentication and user-specific note management. Each user can sign up, log in, add notes, and delete their own notes. The application stores data in **localStorage**, making it easy to run without a backend.

---

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Technologies](#technologies)
- [Notes](#notes)

---

## Features

- User authentication (Signup/Login/Logout)  
- User-specific notes management (Add/Delete)  
- Persistent data storage using localStorage  
- Responsive UI built with **Tailwind CSS**  
- Clean and modern UI layout with gradient backgrounds  
- Redux for global state management  

---

## Installation

### Prerequisites

- Node.js (v18 or later recommended)  
- npm or yarn  

### Steps

1. **Clone the repository**

```bash
git clone https://github.com/yourusername/qargo-coffee-notes.git
cd qargo-coffee-notes
```

2. **Install dependencies**
   
```bash
npm install
# or
yarn install
```

3. **Start the development server**

```bash
npm run dev
# or
yarn dev
```
4. **Open the app in browser**

Visit http://localhost:5173
 (default Vite port)

---

## Usage

### Sign Up
- Click **Sign Up** in the navbar  
- Enter your email and password  
- After signing up, you will be redirected to the login page  

### Login
- Enter the email and password of a registered user  
- Upon login, you will be redirected to the notes page  

### Add Notes
- On the notes page, fill in the title and content fields  
- Click **Add Note** to create a new note  

### Delete Notes
- Click the trash icon on a note to delete it  
- Only notes associated with the current user are displayed  

### Logout
- Click **Logout** in the navbar to log out

---

## Project Structure

```text
qargo-coffee-notes/
├── src/
|   ├── assets/                   # Static assets
│   ├── components/               # Reusable components
|   |   ├── layout                # layout components
│   │   │   ├── Navbar.jsx        # Navbar component
|   |   |   └── SubmitButton.jsx  # Submit Button component    
│   │   └── NoteCard.jsx          # Individual note card component
│   ├── pages/                    # Page components
│   │   ├── Login.jsx             # Login page
│   │   ├── Signup.jsx            # Signup page
│   │   └── Notes.jsx             # Notes page
│   ├── store/                    # Redux slices and store
│   │   ├── authSlice.js          # Authentication slice
│   │   ├── notesSlice.js         # Notes slice
│   │   └── index.js              # Store configuration
│   ├── App.jsx                   # Layout component with <Outlet />
│   ├── index.css                 # Global CSS styles
│   └── main.jsx                  # Entry point, router and store provider
├── package.json
├── tailwind.config.js
└── README.md
```

---

## Technologies

- **React 18** – Frontend library  
- **Redux Toolkit** – State management  
- **React Router v6** – Routing and nested routes  
- **Tailwind CSS** – Styling  
- **Vite** – Development server and build tool  
- **LocalStorage** – Persistent client-side storage  

---

## Notes

- **Data Persistence:**  
  All users and notes are stored in `localStorage`. Clearing browser data will remove all notes and users.

- **User-Specific Notes:**  
  Notes are associated with a `userId` so each user sees only their notes.

- **Form Validation:**  
  Simple required field validation is implemented. No backend validations exist.

- **UI Enhancements:**  
  Tailwind CSS is used for responsive design and hover effects.

>>>>>>> 9023f05 (Initial Commit)
