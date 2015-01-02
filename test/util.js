'use strict';

// test util borrowed from
// https://github.com/krakenjs/kraken-devtools
var path = require('path');
var express = require('express');
var rimraf = require('rimraf');
var devtools = require('kraken-devtools');
var srcRoot = path.join(__dirname, './fixtures/public');
var destRoot = path.join(__dirname, './tmp');

module.exports.createApp = function createApp(config) {
  config = config || {};

  var app = express();

  app.use(devtools(srcRoot, destRoot, config));
  app.use(express.static(destRoot));

  app.get('/', function(req, res) {
    res.send(200);
  });

  return app;
};

module.exports.cleanUp = function cleanUp() {
  rimraf(destRoot, function(err) {
    if (err) {
      throw err;
    }
  });
};
