const express = require('express');

const app = module.exports = express();

const Reply = require('../Functions/GetFunction.js');
const Post = require('../Functions/PostFunction.js');

app.get('/Cat/:CatName', Reply);

app.post('/Cat/:CatName', Post);