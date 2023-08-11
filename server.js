const { sendSignupEmail } = require('./src/controllers/EmailController')
const cors = require('cors')

const express = require("express");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Middleware to prevent caching for all routes
app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, private');
  next();
});

const HOST = process.env.HOST || 'localhost'
const PORT = process.env.PORT || 9400

app.get("/", (req, res) => {
  res.send("Updated smtp server to use my gmail!")
})

app.post("/api/send-email", (req, res) => {
  try {
    sendSignupEmail(req, res)
    res.json({'message': 'Email sent successfully!'});
  } catch (err) {
    res.status(err.status || 500).send({
      error: {
        status: error.status || 500,
        message: error.message || "Internal Server Error",
      }
    })
  }
})

app.listen(PORT, () => {
  console.log(`Server running on http://${HOST}:${PORT}`)
});