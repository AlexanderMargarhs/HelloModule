const express = require('express');

const app = module.exports = express();

const Reply = require('./GetFunction.js');
const Post = require('./PostFunction.js');

app.get('/Gender/:Gender', Reply);

app.post('/Gender/:Gender', Post);