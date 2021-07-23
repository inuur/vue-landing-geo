const express = require('express');
const app = express();
const cors = require('cors');

const nodemailer = require("nodemailer");
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json()

const PORT = process.env.PORT || 5000;

app.use(cors())
app.use(express.static('dist'));

app.post('/email', jsonParser, function (req, res) {
    sendMessage(req.body).then(result => {
        res.send(result);
    })
})

app.listen(PORT, function () {
    console.log(`Server has been started on PORT ${PORT}`);
});


async function sendMessage(data) {
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: 'geolandingpage@gmail.com',
            pass: process.env.MAIL_PASSWORD
        }
    });

    let info = await transporter.sendMail({
        from: 'GEOINDICATOR',
        to: "m.shipaeva@geoindicator.com",
        subject: "Заявка со страницы GEOINDICATOR",
        html: `
            <h1>Заявка со страницы GEOINDICATOR</h1>
            <p><h2>Имя: </h2> <bold>${data.name}</bold></p>
            <p><h2>Почта: </h2> <bold>${data.email}</bold></p>
            <p><h2>Телефон: </h2> <bold>${data.phone}</bold></p>
            <p><h2>Сообщение: </h2></p>
            <p>${data.message}</p>
        `.trim(),
    });

    return "Message sent"
}
