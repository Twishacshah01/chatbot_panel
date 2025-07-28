const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const { OpenAI } = require('openai');

const app = express();
const PORT = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// OpenAI Setup
const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// Sample Question-Answer Set
const faqs = [
  { question: "What are your business hours?", answer: "Our business hours are 9 AM to 6 PM, Monday to Saturday." },
  { question: "How can I reset my password?", answer: "Click on 'Forgot Password' on the login page and follow the instructions." },
  { question: "Where is my order?", answer: "Please share your order ID and we will check the status for you." },
];

// Function to check for a match in FAQs
function getAnswerFromFAQs(userMessage) {
  const match = faqs.find(faq =>
    userMessage.toLowerCase().includes(faq.question.toLowerCase())
  );
  return match ? match.answer : null;
}

// Route
app.post('/api/chat', async (req, res) => {
  const { message } = req.body;

  const predefinedAnswer = getAnswerFromFAQs(message);
  if (predefinedAnswer) {
    return res.json({ response: predefinedAnswer });
  }

  try {
    const completion = await openai.chat.completions.create({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: message }],
    });
    const botResponse = completion.choices[0].message.content;
    res.json({ response: botResponse });
  } catch (error) {
    console.error('OpenAI Error:', error);
    res.json({ error: 'Failed to fetch response from AI.' });
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
