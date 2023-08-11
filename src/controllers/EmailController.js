const Email = require('../lib/sendEmail')

const sendSignupEmail = async (req, res) => {
  try {
    const { email, name } = await req.body;
    const password = "test-node-password"; // use bcrypt to generate this

    Email.sendEmail(email, name, password);
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  sendSignupEmail
}
