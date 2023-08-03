const Email = require('../lib/sendEmail')

const sendSignupEmail = async (req, res) => {
  try {
    const { email } = req.body;
    const password = "test-node-password"; // use bcrypt to generate this

    Email.send(email, password);
    res.json({'message': 'Email send successfully!'});

  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  sendSignupEmail
}

//{"email": "jsoulgh22@gmail.com", "password": "pass123"}