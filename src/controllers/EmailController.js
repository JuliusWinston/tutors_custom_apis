const Email = require('../lib/sendEmail')

const sendSignUpEmail = async (req, res) => {
  try {
    const { email, name } = await req.body;
    const password = "drowssap"; // use bcrypt to generate this

    if (!email || !password) return res.status(400).send( 'Bad request, email is required!' );

    let sendEmailResults = Email.sendEmail(email, name, password);
    if (sendEmailResults === 'error') return res.status(500).json(err);
    res.status(200).send( 'Email sent successfully ...' );
  } catch (err) {
    res.status(500);
  }
}

const testSignUp = async (req, res) => {
  try {
    res.status(200).send("updated testing sign up");
  } catch (err) {
    res.status(500);
  }
}

module.exports = {
  testSignUp,
  sendSignUpEmail
}
