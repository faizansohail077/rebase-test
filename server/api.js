const root = (req, res) => {
  res.send('Welcome to express')
}


const healthCheck = (req, res) => {
  const health = {
    uptime: process.uptime(),
    status: 'OK'
  }
  res.json(health)

const getUser = (req, res) => {
  const user = {
    name: 'Umair ahmed',
    age: 22,
    profession: 'Software Engineer | Fullstack Dev'
  }
  res.json(user)
>>>>>>> feat: add user endpoint
}

module.exports = {
  root,

  healthCheck

  getUser

}
