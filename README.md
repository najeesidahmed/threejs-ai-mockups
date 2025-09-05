# 🧵 AI-Powered 3D T-Shirt Customiser

Design unique T-shirts in 3D with the power of **AI-generated images**.  
Built with **React, Three.js, Valtio, and Express**, this project lets users customise shirts by changing colors, adding textures, or generating artwork with **OpenAI’s DALL·E**.

---

## ✨ Features

- 🎨 **3D Customisation**
  - Change shirt color in real-time
  - Add logo decals or full textures
- 🤖 **AI Integration**
  - Generate unique designs via OpenAI Images API
- 📂 **File Uploads**
  - Use your own images as textures
- ⚡ **Modern Tech Stack**
  - React + Vite + Tailwind
  - Three.js + React Three Fiber
  - Valtio state management
- 🔄 **Instant Updates**
  - Changes apply live with reactive state

---

## 🛠️ Tech Stack

**Frontend**
- React, Vite
- Three.js, @react-three/fiber, @react-three/drei
- Tailwind CSS
- Framer Motion
- Valtio

**Backend**
- Node.js, Express
- OpenAI SDK
- CORS, dotenv

---

## 🚀 Getting Started

### 1. Clone Repo
```bash
git clone https://github.com/yourusername/threejs-ai-mockups.git
cd threejs-ai-mockups-master

---

### 2. Install Dependencies
Fronted:
cd client
npm install

Backend:
cd ../server
npm install

### 3. Set Environment Variables
Create a .env file inside /server:
OPENAI_API_KEY=your_openai_api_key_here

### 4. Run the project
cd server
npm start

Open browser → http://localhost:5173

📖 Usage

Open the app

Click Start Customising

Use the side panel:

Color Picker → change shirt color

AI Prompt → type a description (e.g., "flaming dragon logo")

File Upload → add your own logo

Generated/selected design will appear on the 3D shirt

Download snapshot of your design



