const express = require('express');
const { handleSendSignUpEmail } = require('../controllers');

const EmailRouter = express.Router();

EmailRouter.route("/send-signup-email") 
  .post(handleSendSignUpEmail);

module.exports = {
  EmailRouter
};
