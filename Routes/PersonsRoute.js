const express = require('express');

const app = module.exports = express();

const Reply = require('../Functions/GetFunction.js');
const Post = require('../Functions/PostFunction.js');
const Patch = require('../Functions/PatchFunction.js');

app.post('/Persons/:Person', Post);
app.get('/Persons/:Person', Reply);
app.patch('/Persons/:Person', Patch)

app.post('/Persons', Post);
app.get('/Persons', Reply);