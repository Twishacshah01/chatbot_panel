# chatbot_panel
# 🤖 AI Customer Support Chatbot Panel

An interactive AI-powered customer support chatbot built with **HTML (Frontend)** and **Node.js + Express (Backend)**, integrated with **OpenAI's GPT API**. This project features a dark-tech styled UI, preset FAQs, and intelligent fallback to OpenAI when needed.

---

## 🌐 Live Features

- 💬 Interactive chat interface
- 🎨 Modern dark-tech UI
- 🧠 Smart responses using OpenAI API
- 📌 Predefined FAQ logic before fallback
- ⌨️ Keyboard-friendly with Enter key
- 🔌 Easily extendable with more data, styles, or APIs

---

## 📁 Project Structure

chatbot_panel/
│
├── index.html # Frontend UI
├── .env # OpenAI API Key (not pushed to GitHub)
├── package.json # Backend dependencies
├── package-lock.json
└── server/
└── app.js # Node.js backend logic

yaml
Copy
Edit

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repo
```bash
git clone https://github.com/your-username/chatbot_panel.git
cd chatbot_panel
2️⃣ Install backend dependencies
bash
Copy
Edit
npm install
3️⃣ Set your OpenAI API Key
Create a .env file:

bash
Copy
Edit
touch .env
Add:

ini
Copy
Edit
OPENAI_API_KEY=your-openai-key-here
4️⃣ Start the server
bash
Copy
Edit
npm start
Runs the backend on: http://localhost:3000

5️⃣ Launch frontend
Open index.html in any browser.

📦 Tech Stack
Frontend: HTML, CSS, Vanilla JS

Backend: Node.js, Express

AI: OpenAI API (gpt-3.5-turbo)

Others: dotenv, cors, body-parser

📋 Predefined Questions Sample
js
Copy
Edit
const faqs = [
  { question: "What are your business hours?", answer: "9 AM to 6 PM, Mon–Sat" },
  { question: "How can I reset my password?", answer: "Click 'Forgot Password' on the login page." },
  ...
];
If no match is found, the bot will ask ChatGPT for a smart reply.

🧠 Want to Extend It?
Upload FAQs via .json or .csv

Add voice input/output

Store messages in a database (MongoDB)

Add authentication (login panel)

Deploy online (Render, Railway, Vercel)

🤝 Contributing
Pull requests and forks are welcome! For major changes, open an issue first.

📜 License
MIT

✨ Project By
Twisha Chirag Shah
LinkedIn | Portfolio
Karnavati University — UIT (2028 Batch)

vbnet
Copy
Edit

---

### ✅ To Use:
- Replace `"your-openai-key-here"` with your key.
- Replace GitHub, LinkedIn, and Portfolio links with yours.
- You can copy-paste this into a file named `README.md`.

Let me know if you want to:
- Add screenshots
- Create a GitHub deployment badge
- Get help publishing it live

I'll help in a flash 🚀
