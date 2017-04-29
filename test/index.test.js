import { expect } from 'chai';
import helloESM from '../src';

const helloCommonJS = require('../src');

/* eslint prefer-arrow-callback: 0, func-names: 0, no-unused-expressions: 0 */
describe('Importing The index module', function () {
  it('should import with ES6 modules `default`.', function () {
    expect(helloESM).to.be.a('function');
    expect(helloESM()).to.be.equal('Hello World.');
  });

  it('should import with CommonJS modules `without default`.', function () {
    expect(helloCommonJS).to.be.a('function');
    expect(helloCommonJS()).to.be.equal('Hello World.');
  });
});
