const { createUser } = require('../../src/core/user')
const { cleanUpDatabase } = require('../utils/db')

describe('Create User Tests', async () => {
  beforeEach(cleanUpDatabase)
  test('sholud create user successfully', async () => {
    const userData = {
      firstName: "random",
      lastName: "string",
      email: "random.email@test.com",
      password: "password"
    }
    const result = await createUser(userData)
      
    expect(result).toHaveProperty('firstName', userData.firstName)
    expect(result).toHaveProperty('lastName', userData.lastName)
    expect(result).toHaveProperty('email', userData.email)
    expect(result).toHaveProperty('password')
  })
})
