const express = require('express')
const config = require('./env.secrets.json')
const app = express()
const port = config.port
const { swaggerDocs: V1SwaggerDocs } = require('./src/routes/swagger')
const { tokenVerification } = require('./src/middleware/tokenVerification')
const v1PokeapiRouter = require('./src/routes/pokeapi/pokeapiRouter')
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, api-key');  res.setHeader('Access-Control-Allow-Credentials', true)
  if (req.method === 'OPTIONS') {
    res.sendStatus(200)
  } else {
    next()
  }
})
app.use('/api/pokemon', tokenVerification, v1PokeapiRouter)

app.get('/ping', (req, res) => {
  res.send('pong')
})

app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
  V1SwaggerDocs(app, port)
})

module.exports = app
