require('dotenv').config();

const cors = require('cors');
const db = require('./config/database');

const UserAuthRouter = require('./src/routes/UserAuthRoutes');
const EmailRouter = require('./src/routes/EmailRoutes');

const express = require("express");
const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware to prevent caching for all routes
app.use((req, res, next) => {
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, private');
  next();
});

const HOST = process.env.HOST || 'localhost';
const PORT = process.env.PORT || 9000;

// Test the connection
db.connect()
  .then(obj => {
    console.log('Connected to the database');
    obj.done(); // Release the connection pool
  })
  .catch(err => {
    console.error('Error connecting to the database:', err);
  });

app.get("/", (req, res) => {
  res.send("Updated smtp server to use my gmail!")
});

app.use('/api', UserAuthRouter);
app.use('/api', EmailRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://${HOST}:${PORT}`)
});
