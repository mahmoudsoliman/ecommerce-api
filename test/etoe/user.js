const { expect, request} = require('../utils/chai')
const { cleanUpDatabase, generateUser } = require('../utils/db')
con

describe('User Login Tests', async () => {
  beforeEach(cleanUpDatabase)
  it('user should login successfully', async () => {
    const user = await generateUser()
    const response = await request.post('/login')
    .send({
      email: user.email,
      password: "123456"
    })

    expect(response).to.have.status(200)
  })
})