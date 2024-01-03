const express = require('express');
const { handleTestModule, handleTestSignUp, handleThrowawayTests } = require('../controllers');

const TestRouter = express.Router();

TestRouter.get('/signup-email', handleTestSignUp);
TestRouter.get('/generate-password', handleTestModule);
TestRouter.get('/throwaway', handleThrowawayTests);

module.exports =  {
  TestRouter
};