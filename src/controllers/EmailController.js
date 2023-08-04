const Email = require('../lib/sendEmail')

const sendSignupEmail = async (req, res) => {
  try {
    const { email } = await req.body;
    const password = "test-node-password"; // use bcrypt to generate this

    Email.sendEmail(email, password);

  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  sendSignupEmail
}

//{"email": "jsoulgh22@gmail.com", "password": "pass123"}