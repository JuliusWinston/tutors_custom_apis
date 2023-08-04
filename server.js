const { sendSignupEmail } = require('./src/controllers/EmailController')
const cors = require('cors')

const express = require("express");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const HOST = process.env.HOST || 'localhost'
const PORT = process.env.PORT || 8000

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
  sendSignupEmail(req, res)
})

app.listen(PORT, () => {
  console.log(`Server running on http://${HOST}:${PORT}`)
});