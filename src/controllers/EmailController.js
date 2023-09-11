const Email = require('../lib/sendEmail')

const sendSignupEmail = async (req, res) => {
  try {
    const { email, name } = await req.body;
    const password = "drowssap"; // use bcrypt to generate this

    if (!email) return res.status(400).send({error: "Bad request, email is required!"});
    if (!name) return res.status(400).send({error: "Bad request, name is required!"});

    Email.sendEmail(email, name, password);
    res.json({'message': 'Email sent successfully!'});
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  sendSignupEmail
}
