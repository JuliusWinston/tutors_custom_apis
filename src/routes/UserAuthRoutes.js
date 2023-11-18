const express = require('express');
const UserAuthController = require('../controllers/UserAuthController');


const UserAuthRouter = express.Router();

UserAuthRouter.route('/auth')
  .post(UserAuthController.handleCreateAuth);

module.exports = UserAuthRouter;