const express = require('express');
const TestRouteController = require('../controllers/TestController');

const TestRouter = express.Router();

TestRouter.route('/tutors')
  .get(TestRouteController.handleFetchTutors)
  .post(TestRouteController.handleAddTutor);

module.exports = TestRouter;