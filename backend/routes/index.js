const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');

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



module.exports = router;