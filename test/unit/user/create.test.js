const { expect } = require('../../utils/chai')
const { createUser } = require('../../../src/core/user')
const { cleanUpDatabase } = require('../../utils/db')

describe('Create User Tests', async () => {
  beforeEach(cleanUpDatabase)
  it('sholud create user successfully', async () => {
    const userData = {
      firstName: "random",
      lastName: "string",
      email: "random.email@test.com",
      password: "password"
    }
    const result = await createUser(userData)

    expect(result).to.be.like({
      firstName: userData.firstName,
      lastName: userData.lastName,
      email: userData.email
    })
    
  })
})
