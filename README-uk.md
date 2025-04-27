# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

Віджет відгуків – Sip Happens Café
Це простий застосунок для збору відгуків про кав'ярню Sip Happens Café, створений за допомогою React та Vite.
Відвідувачі можуть залишити свій відгук, обравши одну з опцій: Добре, Нейтрально або Погано.
Застосунок зберігає статистику відгуків навіть після оновлення сторінки завдяки localStorage.

Основні можливості:

Збір відгуків одним кліком
Відображення статистики:
Загальна кількість відгуків
Відсоток позитивних відгуків
Скидання відгуків кнопкою Reset
Збереження даних у localStorage
Стилізація за допомогою CSS-модулів

Структура проекту

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

Використані технології:

React
Vite
CSS Modules
Prettier (for code formatting)

Робоча версія
👉 [Переглянути проєкт на Vercel](https://goit-react-hw-02-sigma-gold.vercel.app/)
