const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');
const nodemailer = require('nodemailer');
require('dotenv').config();


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

router.get('/services', function(req, res) {
  res.sendFile(path.join(__dirname, '../../', 'services.html'));
});

router.get('/about', function(req, res) {
  res.sendFile(path.join(__dirname, '../../', 'about.html'));
});

// POST ROUTES

router.post('/contact', function(req, res) {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', 
    port: 465, 
    secure: true,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.SECRET
    }
  })
  const mailOpts = {
    to: process.env.GMAIL_USER,
    subject: 'New message from Fantastic Concrete site contact form', 
    text: `${req.body.name} (${req.body.email}, ${req.body.phone}) says: \n
          ${req.body.message}` 
  }
  transporter.sendMail(mailOpts, function(err, res) {
    if(err) {
      console.log(err);
    } else {
      console.log(res);
    }
  })
  res.redirect('/contact')
})

module.exports = router;