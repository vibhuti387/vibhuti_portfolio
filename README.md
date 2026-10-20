# Vibhuti Seth — Personal Portfolio

A professional, responsive personal portfolio website built to showcase my skills, projects, education, certifications, and experience as a Computer Science Engineering student.

The project uses the MERN stack, with a React frontend, a Node.js and Express backend, and MongoDB for storing contact form submissions.

## 🌐 Live Demo

- **Frontend:** https://my-portfolio-vibhuti-portfolio.vercel.app
- **Backend API:** https://my-portfolio-backend-jtiq.onrender.com

## ✨ Features

- **Hero Section:** Introduction, professional role, and call-to-action buttons.
- **About Me:** Professional introduction and profile information.
- **Skills:** Display of technical skills and technologies.
- **Projects:** Showcase of projects with GitHub repository links.
- **Resume Download:** Options to download the resume in PDF and Word formats through backend routes.
- **Education & Experience:** Academic background and internship experience.
- **Certifications:** Display of certificates and achievements.
- **Contact Form:** Name, email, and message fields connected to the backend API.
- **Dark/Light Mode:** Toggle between dark and light themes.
- **Responsive Design:** Layout designed for desktop, tablet, and mobile devices.
- **Animations:** Interactive elements and visual effects for a better user experience.

## 🛠️ Tech Stack

### Frontend
- React.js
- JavaScript
- HTML5
- CSS3
- React Router

### Backend
- Node.js
- Express.js
- REST API
- CORS
- dotenv

### Database
- MongoDB
- Mongoose

### Tools & Deployment
- Git and GitHub
- Visual Studio Code / Antigravity IDE
- Vercel — Frontend deployment
- Render — Backend deployment

## 📂 Project Structure

```text
portfolio_project/
├── my_portfolio/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   └── component/
│   ├── package.json
│   └── .env.example
│
├── backend/
│   ├── src/
│   │   └── server.js
│   ├── config/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── package.json
│   └── .env.example
│
├── .gitignore
└── README.md
```

*Note: The structure above describes the main project folders; adjust it if your actual files are organized differently.*

## 🚀 Getting Started

Follow these steps to run the project locally.

### Prerequisites

Install the following:

- Node.js and npm
- MongoDB Atlas account or a local MongoDB installation
- Git

### 1. Clone the Repository

```bash
git clone https://github.com/vibhuti387/vibhuti_portfolio.git
cd vibhuti_portfolio
```

### 2. Set Up the Frontend

```bash
cd my_portfolio
npm install
```

Create a `.env` file inside the `my_portfolio` folder:

```env
VITE_API_URL=http://localhost:5000
```

Start the React development server:

```bash
npm run dev
```

The frontend will usually run at `http://localhost:5173`.

### 3. Set Up the Backend

Open another terminal from the project root:

```bash
cd backend
npm install
```

Create a `.env` file inside the `backend` folder:

```env
PORT=5000
MONGODB_URI=your_mongodb_connection_string
CLIENT_URL=http://localhost:5173
```

Replace `your_mongodb_connection_string` with your own MongoDB connection string. Never commit actual credentials to GitHub.

Start the backend:

```bash
npm run dev
```

The backend will run at `http://localhost:5000`, provided the database connection succeeds.

### 4. Verify the Backend

Open the following URL in your browser:

`http://localhost:5000/`

The root endpoint should return a JSON response confirming that the backend API is running, provided the server starts successfully.

## 📬 Contact Form

The contact form collects:

- Name
- Email
- Message

The React frontend sends the form data to the Express API. The backend is intended to validate the request and store submissions in MongoDB using Mongoose.

## 📄 Resume Downloads

The portfolio provides PDF and Word resume download options through backend routes.

## 💼 Projects

### SkillProof
A project focused on skill verification and proof of skills.

- [GitHub Repository](https://github.com/vibhuti387/SkillProof)

### QuickFix+
A project focused on providing quick and convenient solutions to user problems.

- [GitHub Repository](https://github.com/vibhuti387/QuickfixPlus)

### Nayi Shuruwaat
A website developed as an early team project.

- [GitHub Repository](https://github.com/vibhuti387/NayiShuruat)

## 🔐 Environment Variables & Security

- Keep `.env` files private.
- Add `.env` and `node_modules/` to `.gitignore`.
- Use `.env.example` files containing placeholder values for required configuration.
- Configure production environment variables separately on Vercel and Render.
- Never publish MongoDB connection strings, passwords, API keys, or other secrets.

## 👩‍💻 Author

**Vibhuti Seth**

B.Tech — Computer Science Engineering  
JK Lakshmipat University, Jaipur

- [GitHub](https://github.com/vibhuti387)

---

⭐ Thank you for visiting my portfolio repository!
