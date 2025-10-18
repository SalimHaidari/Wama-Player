# 🎬 WAMA Player (React + TypeScript + Tailwind)

WAMA Player is a modern video player project built using **React**, **TypeScript**, and **TailwindCSS**.  
It supports playing local MP4 videos with controls like play/pause, next/previous, and fullscreen.

---

## 🚀 Features

- 🎥 Custom video player built with React hooks
- 💡 TypeScript for strong typing
- 💅 TailwindCSS for responsive design
- ⏯️ Play, pause, next, and previous controls
- 🧭 Fullscreen support
- ⚡ Fast and optimized build

---

## 🧩 Tech Stack

- React 18+
- bootstrap v5
- React Plyer

---

## 📦 Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/SalimHaidari/WAMA-Player.git
   ```

2. **Navigate to the project folder:**

   ```bash
   cd WAMA-Player
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Run the development server:**

   ```bash
   npm start
   ```

---

## 📁 Project Structure

```
WAMA-Player/
├── public/
│   ├── videos/        # Place your own MP4 files here (not included in repo)
│   └── favicon.ico
├── src/
│   ├── components/
│   │   └── Player.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

---

## 🧹 .gitignore

This project ignores **node_modules** and **video files** to reduce repository size.

```gitignore
# dependencies
node_modules/

# local environment
.env
.DS_Store

# build output
dist/

# videos
public/videos/
```

## 🖥️ Build for Production

```bash
npm run build
```

## 💌 Author

Developed by: Salim Haidari
email: salimhaidari1995@gmail.com
🌐 GitHub:(https://github.com/SalimHaidari)

---

## 📜 License

This project is open-source and available under the [MIT License](LICENSE).
