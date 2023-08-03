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
  sendSignupEmail(req, res)
})

app.listen(PORT, () => {
  console.log(`Server running on http://${HOST}:${PORT}`)
});