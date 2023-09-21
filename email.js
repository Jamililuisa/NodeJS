var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'jamililuisadeoliveira@gmail.com',
    pass: 'lswt ctss ugat ppjp'
  }
});

var mailOptions = {
  from: 'jamililuisadeoliveira@gmail.com',
  to: 'joedio.borges@gmail.com',
  subject: 'Enviando email usando o Node.js',
  text: 'Jamili 2A'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
}); 