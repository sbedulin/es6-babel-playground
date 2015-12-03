'use strict';

var express = require('express');
var app = express();
var common = require('../common');

console.log(common.validateId('USER_1235'));

var server = require('http').createServer(app);
app.use('/', express.static(__dirname + '/../dist', { maxAge: 1000000 }));

server.listen(9000, () => console.log('App'));