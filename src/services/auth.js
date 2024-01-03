const { generateRandomPassword } = require('../utils');

const bcrypt = require('bcrypt');

const signup = async (email) => {
  // bcrypt and save into database here
  try {
    const password  = generateRandomPassword();
    const hashedPassword = await bcrypt.hash(password, 13);
  } catch (err) {
    return err;
  }
}

const signin = () => {

}

module.exports = {
  signup,
  signin
}