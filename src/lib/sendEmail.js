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

// const transporter = nodemailer.createTransport({
//   host: "tutorsgh.com",
//   port: 465,
//   secure: true,
//   auth: {
//     user: "info@tutorsgh.com",
//     pass: "!info@tutors",
//   }
// })

// Use this new message (After parent dashboard is ready)
// Hi Kofi,

// Thank you for requesting for a tutor for your ward. We appreciate your willingness to help your child attain the highest and best education through the extra efforts of our Tutors. 

// Kindly note that your application is under review and a client service personnel will contact you within 48hrs to confirm your application.

// We look forward to embarking on this fruitful journey with you and your child. 

// Thanks, 
// Tutors


// Use this new message now
// Hi Kofi,

// Thank you for requesting for a tutor for your ward. We appreciate your willingness to help your child attain the highest and best education through the extra efforts of our Tutors. 

// Kindly note that your application is under review and a client service personnel will contact you to confirm your application.

// We look forward to embarking on this fruitful journey with you and your child. 

// Thanks, 
// Tutors

const sendEmail = async (email, name, password) => {
  const htmlComponent = () => {
    return `<div style="padding: 16px; border-style: solid; border-width: 1px; border-color: #EFEFEF; margin: 40px; background-color: #e1e1e1;">
      <div style="display: flex; flex-direction: row; ">
        <img src="cid:logo@tutors" width="70" height="70" style="padding: 0px; border-style: solid; border-radius: 50%; margin-right: 20px; background-color: #fff; border-color: #FFF; border-width: 1px;" alt="logo" />
        <h3 style="margin-left: 10px; margin-top: 10px;">Welcome to Tutors Gh</h3>
      </div>
      <div>
        <p>Hi ${name},</p>
        <p>Thank you for requesting for a tutor for your ward. We appreciate your willingness to help your child attain the highest and best education through the extra efforts of our Tutors.</p>
        <!-- <p>Here is your password, ${password}, click the link below to reset it.</p> -->
        <p>Kindly note that your application is under review and a client service personnel will contact you to confirm your application.</p>
        <p>We look forward to embarking on this fruitful journey with you and your child.</p>
        <!--<p>Click here to <a href="http://localhost:3000">visit website</a></p> -->
        <p>Thanks,</p>
        <p>Tutors</p>
      </div>
    </div>` 
  }

  try {
    const info = await transporter.sendMail({
      from: 'Tutors Gh <devwinston35@gmail.com>',
      // from: 'Tutors Gh <info@tutorsgh.com>',
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
  sendEmail
}
