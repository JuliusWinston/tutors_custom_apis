const { handleSendSignUpEmail } = require ('./EmailController');
const { handleTestSignUp, handleTestModule, handleThrowawayTests } = require('./TestController');
const { handleCreateAuth } = require('./UserAuthController');

module.exports = {
  handleThrowawayTests,
  handleTestSignUp,
  handleTestModule,
  handleCreateAuth,
  handleSendSignUpEmail
}
