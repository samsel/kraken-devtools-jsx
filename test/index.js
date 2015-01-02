/*global describe, it, beforeEach, afterEach*/

'use strict';

var request = require('supertest');
var testutil = require('./util');
var path = require('path');
var plugin = path.join(__dirname, '../lib/index');

describe('kraken-devtools-jsx', function() {

  afterEach(function() {
    testutil.cleanUp();
  });

  it('should compile jsx to js', function(done) {
    var app = testutil.createApp({
      less: {
        module: plugin,
        files: '/js/**/*.js'
      }
    });

    request(app)
      .get('/js/comment.js')
      .expect(200)
      .end(done);
  });

  it('should error out for an invalid jsx', function(done) {
    var app = testutil.createApp({
      less: {
        module: plugin,
        files: '/js/**/*.js'
      }
    });

    request(app)
      .get('/js/bad_comment.js')
      .expect(500)
      .end(done);
  });

});
