# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

Sip Happens Café – Feedback Widget
This is a simple feedback collection application for the Sip Happens Café, built with React and Vite.
You can leave your feedback about the service by selecting one of the options: Good, Neutral, or Bad.
The app stores feedback statistics even after the page reloads using localStorage.

Features:
Leave feedback with a single click
See live feedback statistics:
Total feedback count
Positive feedback percentage
Reset feedback at any time
Persistent data storage with localStorage
Styled with CSS Modules

Project Structure
src/
├── components/
│ ├── Description/
│ │ ├── Description.jsx
│ │ └── Description.module.css
│ ├── Feedback/
│ │ ├── Feedback.jsx
│ │ └── Feedback.module.css
│ ├── Notification/
│ │ ├── Notification.jsx
│ │ └── Notification.module.css
│ └── Options/
│ ├── Options.jsx
│ └── Options.module.css
├── App.jsx
├── main.jsx
└── index.css

Technologies Used:
React
Vite
CSS Modules
Prettier (for code formatting)

Live Demo
👉 [View the project live on Vercel](https://goit-react-hw-02-sigma-gold.vercel.app/)
