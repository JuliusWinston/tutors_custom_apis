const express = require('express');
const emailRouter = express.Router();

const { testSignUp, sendSignUpEmail } = require('../controllers');

emailRouter.route("/send-signup-email")
  .get(testSignUp)
  .post(sendSignUpEmail);

module.exports =  emailRouter;
