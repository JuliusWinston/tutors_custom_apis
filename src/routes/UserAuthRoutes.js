const express = require('express');
const { handleCreateAuth } = require('../controllers');

const UserAuthRouter = express.Router();

UserAuthRouter.route('/auth')
  .post(handleCreateAuth);

module.exports ={
  UserAuthRouter
};
