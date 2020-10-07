const Boom = require('boom')
const { authenticate } = require('../../src/core/user')
const { cleanUpDatabase, generateUser } = require('../utils/db')

describe('Authenticate user tests', async () => {
  beforeEach(cleanUpDatabase)
  test('should authenticate user successfully and return access token', async () => {
    const user = await generateUser()
    const result = await authenticate({email: user.email, password: "123456"})

    expect(result).toHaveProperty('token')
    expect(result).toHaveProperty('expirationDate')
  })

  test('should throw 404 if user not found', async () => {
    await generateUser()
    expect( async () => {
      return authenticate({email: "fake.email@test.com", password: "123456"})
    }).toThrow(Boom.notFound(' user not found'))
  })
})