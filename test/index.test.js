'use strict';

const { expect } = require('chai');
const { hello } = require('../src');

describe('Importing The index module', function () {
  it('should be a function', function () {
    expect(hello).to.be.a('function');
  });

  it('should return `HELLO` string from env', function () {
    expect(hello()).to.be.equal('HELLO');
  });
});
