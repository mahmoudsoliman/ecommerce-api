const cleanConnections = async () => {
  console.log('Closing MySQL connections')
  db.sequelize.close()
}

const { app } = require('./app')

console.log('Starting server')

// Start Express server.
const server = app.listen(app.get('port'), () => {
  console.log(`Server is up`, { port: app.get('port'), env: app.get('env') })
})

// Clean all MySQL connection before closing
process.on('SIGINT', cleanConnections)
process.on('SIGTERM', cleanConnections)
process.on('SIGHUP', cleanConnections)

module.exports = { server }
