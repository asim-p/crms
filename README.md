# 🕵️‍♂️ Crime Record Management System (CRMS)

The **Crime Record Management System** is a full-stack web application built using **Node.js**, **Express**, **MongoDB Atlas**, and **EJS** templating. It enables users to report, view, and manage crime records with secure authentication and role-based access control.

---

## 🚀 Features

- 🔐 **User Authentication**
  - Signup, Login, Logout functionality using sessions
  - Passwords are securely hashed using `bcryptjs`

- 📝 **Crime Reporting**
  - Users can submit detailed crime reports with a title, location, date & time, and description

- 📄 **Crime Details View**
  - View each crime report in a clean, user-friendly layout

- 🗑️ **Delete Functionality**
  - Only **authorized users (admin)** can see and use the delete button
  - Delete requests are protected by session checks

- 🧑‍💼 **Admin Privileges**
  - Only the user with username `admin` can see delete buttons

- 💅 **Responsive & Themed UI**
  - Clean, modern UI with soft blue theme and custom fonts (Kanit & Quicksand)
  - Responsive layout using Flexbox
  - Sticky footer that stays at the bottom of the screen

---

## 💻 Technologies Used

- **Backend**: Node.js, Express.js
- **Frontend**: HTML, CSS, EJS
- **Database**: MongoDB Atlas with Mongoose
- **Authentication**: bcryptjs, express-session
- **Templating Engine**: EJS
- **Styling**: Google Fonts, Font Awesome, Custom CSS

---
## 📁 Folder Structure

```text
Crime Record/
├── app.js
├── routes/
│   ├── auth.js
│   └── crimeRoutes.js
├── controllers/
│   └── crimeController.js
├── models/
│   └── user.js
├── public/
│   └── styles.css
├── views/
│   ├── auth/
│   │   ├── login.ejs
│   │   └── signup.ejs
│   ├── crimes/
│   │   ├── index.ejs
│   │   └── details.ejs
│   └── partials/
│       ├── head.ejs
│       ├── header.ejs
│       └── footer.ejs
```

---

## 🛠️ Getting Started

### Prerequisites

- Node.js and npm
- MongoDB Atlas account

### Installation

1. Clone the repository:
   ```bash
   git clone [https://github.com/asim-p/crms](https://github.com/asim-p/crms)
   cd crms\

2. Install dependencies:

    ```bash
    npm install

3. Set up your MongoDB connection in app.js or create a .env file if using dotenv.

4. Start the server:

    ```bash
    npm start

5. Visit http://localhost:3000 in your browser.

## 🔐 Admin Access

To access delete functionality:

    Login with a user having the username admin

    Only this user will see the delete buttons on crime records

## ✅ To Do

    Add client-side and server-side validation

    Implement user-specific dashboards

    Improve flash messaging and error feedback
