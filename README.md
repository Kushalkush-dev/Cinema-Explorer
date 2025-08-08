
# 🎬 Cinema Explorer

[![React](https://img.shields.io/badge/React-v18+-blue?logo=react)](https://reactjs.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-v3-blue?logo=tailwindcss)](https://tailwindcss.com/)
[![Appwrite](https://img.shields.io/badge/Appwrite-Backend-red?logo=appwrite)](https://appwrite.io/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

Cinema Explorer is a modern movie discovery web app built with **React.js**, **JavaScript**, and **Tailwind CSS**, backed by **Appwrite**. It tracks user searches in real-time and updates the trending section dynamically based on user interactions.

---

## 🌐 Live Demo

🚀 [**View Live Site**](https://your-live-site-url.com)  
_(Replace with your deployed link)_

---

## ✨ Features

- 🔍 **Real-time Search** – Instantly search for movies by title.
- 📈 **Trending Section** – Auto-updated based on user search trends.
- 📊 **Search Tracking** – Tracks and stores user queries using Appwrite DB.
- 🧱 **Component-Based UI** – Built using reusable React components.
- 📱 **Mobile Responsive** – Designed to look great on all screen sizes.
- 🛡️ **Backend with Appwrite** – Handles database and server-side logic.

---

## 🛠️ Tech Stack

- **Frontend**: React.js, JavaScript (ES6+), Tailwind CSS
- **Backend**: Appwrite (Database, Authentication, Realtime)
- **Deployment**: (Optional: Vercel / Netlify / Firebase Hosting)

---

## 🧰 Installation & Setup

### 1. Clone the repository
```bash
git clone https://github.com/your-username/cinema-explorer.git
cd cinema-explorer
```

### 2. Install dependencies
```bash
npm install
```

### 3. Create `.env` file
Create a `.env` file in the root and add your Appwrite config:

```env
VITE_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
VITE_APPWRITE_PROJECT_ID=your_project_id
VITE_APPWRITE_DATABASE_ID=your_database_id
VITE_APPWRITE_COLLECTION_ID=your_collection_id
```

### 4. Start the app
```bash
npm run dev
```

---

## 📁 Project Structure

```
src/
├── assets/           # Icons, logos, images
├── components/       # Reusable components (Navbar, SearchBar, MovieCard)
├── pages/            # Page components (Home, MovieDetails, etc.)
├── services/         # Appwrite config and database API
├── utils/            # Helper functions
├── App.jsx           # Main App component
└── main.jsx          # React DOM renderer
```

---

## 🧠 How It Works

- Each user search is saved in Appwrite's database.
- The backend queries the most searched keywords.
- The frontend uses that data to populate the **Trending Movies** section.

---

## 🖼️ Screenshots (Optional)

_Add a few screenshots or GIFs of your app here if you'd like._

---

## 🧱 Future Enhancements

- 🔐 User Authentication (Appwrite Auth)
- ⭐ Add to Watchlist
- 🌗 Light/Dark Mode toggle
- 💬 Movie reviews & ratings
- 📚 Genre-based filtering

---

## 🤝 Contributing

Want to improve the project or fix a bug? Contributions are always welcome!

```bash
# Fork it, make changes, then create a PR 🚀
```

---

## 📄 License

Licensed under the [MIT License](LICENSE)

---

## 📬 Contact

Have questions or feedback?

- GitHub: [@your-username](https://github.com/your-username)
- Email: your.email@example.com

---
