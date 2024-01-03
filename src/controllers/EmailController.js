const { sendEmail } = require('../lib');
const { generateRandomPassword } = require('../utils');

const handleSendSignUpEmail = async (req, res) => {
  try {
    const { email, name } = await req.body;
    const password = generateRandomPassword({ length: 12, includeUppercase: true, includeLowercase: true, includeDigits: true, includeSpecialChars: true });

    if (!email) return res.status(400).send( 'email and password required!' );

    let sendEmailResults = sendEmail(email, name, password);
    if (sendEmailResults === 'error') return res.status(500).json(err);
    res.status(200).send( 'email sent successfully ...' );
  } catch (err) {
    console.error(err);
    res.status(500).send('an error occured!');
  }
}

module.exports = {
  handleSendSignUpEmail
}
