var nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'testdevmail1@gmail.com',
        pass: 'testpass123'
    }
});
transporter.sendMail({
    from: 'testdevmail1@gmail.com',
    to: 'web@orthosource.com.br',
    subject: 'hello',
    text: 'hello world!'
});