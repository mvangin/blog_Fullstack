var nodemailer = require('nodemailer');

exports.contactPost = function (req, res) {
    let transporter = nodemailer.createTransport({
        host: "smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "f470c3be54aa54",
            pass: "1dbd5202216b8c"
        }
    });

    // verify connection configuration
    transporter.verify(function (error, success) {
        if (error) {
                console.log(error);
        } else {
            console.log("Server is ready to take our messages");
        }
    });

    var email = req.body.email
    var subject = req.body.subject
    var content = req.body.content

    var mail = {
        from: email,
        subject: subject,
        to: "mavangin@gmail.com",
        text: content
    }



    console.log(mail)
    transporter.sendMail(mail, (err, data) => {
        if (err) {
            res.json({
                status: 'fail'
            })
        } else {
            res.json({
                status: 'success'
            })
        }
    })
}