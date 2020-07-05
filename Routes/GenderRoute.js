const express = require('express');

const app = module.exports = express();

const Reply = require('../Functions/GetFunction.js');
const Post = require('../Functions/PostFunction.js');

app.get('/Gender/:Gender', Reply);

app.post('/Gender/:Gender', Post);