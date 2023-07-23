const Email = require('../lib/sendEmail')
const { getPostData } = require('../utils/index')

const sendSignupEmail = async (req, res) => {
  try {
    const body = await getPostData(req)
    const { email, password } = JSON.parse(body)

    res.writeHead(200, {'Content-Type': 'application/json'})
    Email.send(email, password)
    res.end(JSON.stringify({'message': 'Email send successfully!'}))
  } catch (error) {
    console.log(error)
  }
}

module.exports = {
  sendSignupEmail
}