const express = require('express');

const app = module.exports = express();

const Post = require('../Functions/PostFunction.js');
const Reply = require('../Functions/GetFunction.js');

app.post('/Person/:Name', Post);
app.get('/Person/:Name', Reply);