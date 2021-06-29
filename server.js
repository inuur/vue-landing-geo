const express = require('express');
const app = express();
const cors = require('cors')

app.use(cors())

app.use(express.static('dist'));

app.get('/email', function (req, res) {
    console.log('request')
    res.send('Hello World!')

    sendMessage().then(res => {
        console.log("Письмо отправлено успешно")
    }).catch(exception => {
        console.log(exception)
    });
})

const PORT = process.env.PORT || 5000;

app.listen(PORT, function () {
    console.log(`Server has been started on PORT ${PORT}`);
});

const nodemailer = require("nodemailer");

// async..await is not allowed in global scope, must use a wrapper
async function sendMessage() {
    // Generate test SMTP service account from ethereal.email
    // Only needed if you don't have a real mail account for testing
    let testAccount = await nodemailer.createTestAccount();

    // create reusable transporter object using the default SMTP transport
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: 'geolandingpage@gmail.com',
            pass: process.env.MAIL_PASSWORD
        }
    });

    // send mail with defined transport object
    let info = await transporter.sendMail({
        from: 'Vue-landing-page', // sender address
        to: "inuur@mail.ru", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
}
