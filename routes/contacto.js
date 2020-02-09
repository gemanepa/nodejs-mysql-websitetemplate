var express = require('express');
var path = require("path");
var router = express.Router();
var nodemailer = require('nodemailer');
const nodemailerConfig = require('../nodemailer-config');


/* GET contacto */
router.get('/', function(req, res, next) {
  //res.send('<p>some html</p>');
  res.sendFile(path.resolve('public/contacto.html'));
});

router.post('/', function(req, res, next) {
  const bodyReqObjectProps = Object.values(req.body);
  const name = bodyReqObjectProps[0]
  const mail = bodyReqObjectProps[1]
  const consult = bodyReqObjectProps[2]

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
           user: nodemailerConfig.EnvironmentVariables.user,
           pass: nodemailerConfig.EnvironmentVariables.pass
       }
   });

   const mailOptions = {
    from: nodemailerConfig.EnvironmentVariables.user, // sender address
    to: 'someMail@gmail.com', // list of receivers
    subject: 'This is a template made by gemanepa.com', // Subject line
    html: `
    <p>
      Name: ${name}
      <br>
      Mail: ${mail}
      <br>
      Consult: ${consult}
    </p>
    `
  };

  transporter.sendMail(mailOptions, function (err, info) {
    if(err)
      console.log(err)
    else
      console.log(info);
 });

  res.sendFile(path.resolve('public/formsenviado.html'));
});

module.exports = router;