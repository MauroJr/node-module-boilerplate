'use strict';

const { expect } = require('chai');
const { fromConfig, fromEnv } = require('../src');


describe('Checking Environment Variable `HELLO`', function () {
  it('should return value from environment variable', function () {
    expect(fromEnv.HELLO()).to.be.equal('WORLD');
  });

  it('should return value from config file', function () {
    expect(fromConfig.hi()).to.be.equal('hi from config');
  });

  it('should return value from custom environment variable', function () {
    expect(fromConfig.hello()).to.be.equal('WORLD');
  });
});
