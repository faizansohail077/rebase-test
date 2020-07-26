const tape = require('tape')
const port = require('get-port-sync')()
const request = require('supertest')

const server = require('../server')({ port })

tape('API endpoint tests', function (t) {
  tape('GET / endpoint should return message', async function (t) {
    const response = await request(server).get('/')
    t.equal(response.statusCode, 200, 'Status code should be 200')
    t.equal(response.text, 'Welcome to express')
  })


  tape('GET /health should return status OK', async function (t) {
    const { body } = await request(server).get('/health')
    t.equal(body.status, 'OK')
    t.equal(body.uptime > 0, true, 'uptime should be greater than 0s')

  tape('GET /user route should return user data', async function (t) {
    const { statusCode, body } = await request(server).get('/user')
    const expectedUser = {
      name: 'Umair ahmed',
      age: 22,
      profession: 'Software Engineer | Fullstack Dev'
    }

    t.equal(statusCode, 200)
    t.deepEqual(body, expectedUser, 'should return the expected user')

  })
  t.end()
})

tape.onFinish(() => {
  server.close()
})
