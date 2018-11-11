'use strict';

const config = require('config');


exports.fromEnv = {
  HELLO() {
    return process.env.HELLO;
  }
};

exports.fromConfig = {
  hi() {
    return config.get('hi');
  },

  hello() {
    return config.get('hello');
  }
};
