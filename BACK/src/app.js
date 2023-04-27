const express = require('express');
const router = require('./router');
const app = express();
// const bcryp = require('bcrypt');
// const jwt = require('jsonwebtoken');


app.use(express.json());
app.use(router);
// app.use(bcryp);
// app.use(jwt);

module.exports = app;