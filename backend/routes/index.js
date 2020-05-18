const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');
const nodemailer = require('nodemailer')

// GET ROUTES

router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../../', 'index.html'));
});

router.get('/contact', function(req, res) {
  res.sendFile(path.join(__dirname, '../../', 'contact.html'));
});

router.get('/gallery', function(req, res) {
  res.sendFile(path.join(__dirname, '../../', 'gallery.html'));
});

// POST ROUTES

router.post('/contact', function(req, res) {
  const smtpTrans = nodemailer.createTransport({
    host: 'smtp.gmail.com', 
    port: 465, 
    secure: true,
    auth: {
      user: 'kevhemsoth@gmail.com',
      pass: 'sullivan1228'
    }
  })
  const mailOpts = {
    from: 'Your sender info',
    to: 'kevhemsoth@gmail.com',
    subject: 'New message from Fantastic Concrete site contact form', 
    text: `From: ${req.body.name} (${req.body.phone}) (${req.body.email}) 
    message: 
      ${req.body.message}`
  }
  smtpTrans.sendMail(mailOpts, function(err, res) {
    if(err) {
      console.log(err);
    } else {
      console.log(res);
    }
  })
  res.redirect('/contact')
})

module.exports = router;