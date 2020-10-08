const Boom = require('boom')
const { expect } = require('../../utils/chai')
const { authenticate } = require('../../../src/core/user')
const { cleanUpDatabase, generateUser } = require('../../utils/db')

describe('Authenticate user tests', async () => {
  beforeEach(cleanUpDatabase)
  it('should authenticate user successfully and return access token', async () => {
    const user = await generateUser()
    const result = await authenticate({email: user.email, password: "123456"})

    expect(result.token).not.to.be.null()
    expect(result.expirationDate).not.to.be.null()
  })
})