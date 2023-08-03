const nodemailer = require("nodemailer")

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "devwinston35@gmail.com",
    pass: "ffgfdudndujxbnpm",
  }
})

const send = async (email, password) => {
  const htmlComponent = () => {
    return `<div style="padding: 16px; border-style: solid; border-width: 1px; border-color: #EFEFEF; margin: 40px; background-color: #e1e1e1;">
      <div style="display: flex; flex-direction: row; ">
        <img src="cid:logo@tutors" width="70" height="70" style="padding: 0px; border-style: solid; border-radius: 50%; margin-right: 20px; background-color: #fff; border-color: #FFF; border-width: 1px;" alt="logo" />
        <h3 style="margin-left: 10px; margin-top: 10px;">Welcome to Tutors Gh</h3>
      </div>
      <div>
        <p>Welcome to a new and exciting world of academic excellence for your wards.</p>
        <!-- <p>Here is your password, ${password}, click the link below to reset it.</p> -->
        <p>Your application is pending review.</p>
        <p>More details in relation to your account will be sent to you via email.</p>
        <p>Click here to <a href="http://localhost:3000">visit website</a></p>
      </div>
    </div>` 
  }

  try {
    const info = await transporter.sendMail({
      from: 'Tutors Gh <devwinston35@gmail.com>',
      to: email,
      subject: 'Tutors application',
      html: htmlComponent(),
      attachments: [{
        filename: 'dragon.jpg',
        path: __dirname + '/logo.png',
        cid: 'logo@tutors'
      }]
    })

    return info
  } catch(error) {
    console.log(error)
  }
}

module.exports = {
  send
}
