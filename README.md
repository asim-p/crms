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

Crime Record/
├── app.js
├── routes/
│ ├── auth.js
│ └── crimeRoutes.js
├── controllers/
│ └── crimeController.js
├── models/
│ └── user.js
├── public/
│ └── styles.css
├── views/
│ ├── auth/
│ │ ├── login.ejs
│ │ └── signup.ejs
│ ├── crimes/
│ │ ├── index.ejs
│ │ └── details.ejs
│ └── partials/
│ ├── head.ejs
│ ├── header.ejs
│ └── footer.ejs