const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');
const nodemailer = require('nodemailer');
require('dotenv').config();


// GET ROUTES

router.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '../', 'index.html'));
});

router.get('/contact', function(req, res) {
  res.sendFile(path.join(__dirname, '../', 'contact.html'));
});

router.get('/gallery', function(req, res) {
  res.sendFile(path.join(__dirname, '../', 'gallery.html'));
});

router.get('/services', function(req, res) {
  res.sendFile(path.join(__dirname, '../', 'services.html'));
});

router.get('/about', function(req, res) {
  res.sendFile(path.join(__dirname, '../', 'about.html'));
});



module.exports = router;