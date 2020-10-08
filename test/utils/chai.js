const chai = require('chai')
const app = require('../../src/app')

chai.use(require('chai-http'))
chai.use(require('chai-asserttype'))
chai.use(require('chai-as-promised'))
chai.use(require('sinon-chai'))
chai.use(require('dirty-chai'))
chai.use(require('deep-equal-in-any-order'))
chai.use(require('./chai-like'))

chai.request(app).keepOpen()

module.exports = chai
