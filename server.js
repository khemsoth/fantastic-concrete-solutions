const express = require('express');
const app = express();
const path = require('path');
const routes = require('./routes')
const PORT = 3000;

require('dotenv').config();

app.use(express.static('./'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

app.listen(PORT, function(req, res) {
  console.log('Server running on port: ' + PORT);
})