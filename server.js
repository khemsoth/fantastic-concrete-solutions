const express = require('express');
const app = express();
const router = express.Router();
const bodyParser = require('body-parser');
const path = require('path');
const routes = require('./routes');
const nodemailer = require('nodemailer');
const PORT = process.env.PORT || 3000;


require('dotenv').config();

app.use(express.static(__dirname));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);
app.use('/', router);

app.post('/contact', function(req, res) {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com', 
    port: 465, 
    secure: true,
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASS
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

app.listen(PORT, function(req, res) {
  console.log('Server running on port: ' + PORT);
})