[![travis build](https://img.shields.io/travis/MauroJr/node-module-boilerplate.svg?style=flat)](https://travis-ci.org/MauroJr/node-module-boilerplate)
[![Dependency Status](https://david-dm.org/MauroJr/node-module-boilerplate.svg?theme=shields.io)](https://david-dm.org/MauroJr/node-module-boilerplate)
[![devDependency Status](https://david-dm.org/MauroJr/node-module-boilerplate/dev-status.svg?theme=shields.io)](https://david-dm.org/MauroJr/node-module-boilerplate#info=devDependencies)
[![Codecov](https://img.shields.io/codecov/c/github/MauroJr/node-module-boilerplate.svg)]()
[![MIT License](https://img.shields.io/github/license/MauroJr/node-module-boilerplate.svg?style=flat)](http://opensource.org/licenses/MIT)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg?style=flat)](https://github.com/semantic-release/semantic-release)

## What is it?

A modern template for node modules with lint (ESlint), tests (Mocha and Chai), code coverage (NYC and [codecov.io](https://codecov.io)), type checking by JSDocs (TypeScript), CI ([TravisCI](https://travis-ci.org/)), semver ([semantic-release](https://github.com/semantic-release/semantic-release)) and interoperability between ES6 modules and CommonJs and more.


## How to use it?

* clone the repo and remove the .git folder
```Shell
$ git clone git@github.com:MauroJr/node-module-boilerplate.git my-new-module-name
$ cd my-new-module-name
$ rm -rf .git
```
* open the `package.json` file with your editor and edit the following fields (name, description, repository, author, license and keywords).
* Edit the `README.md` file, it's allways good starting here ;)
* initialize your git repository
```Shell
$ vim package.json
$ vim README.md
$ git init
```
* Install all `dev dependecies`
* Setup your credentials with [semantic-release-cli](https://github.com/semantic-release/semantic-release). See [setup documentation](https://github.com/semantic-release/semantic-release#setup) for semantic-release-cli.
```Shell
$ yarn
$ semantic-release-cli setup
```
* Now you are ready to starting to code.
```Shell
$ vim src/index.js
```
* And you must do your commits by the following command:
```Shell
$ yarn run commit
```

## Do you want more information?

```Shell
$ yarn run info
```
