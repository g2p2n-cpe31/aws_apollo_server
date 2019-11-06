import config from './config'
import express from 'express'
import cors from 'cors'
import server from './graphql/schema/index'

const app = express()

app.use(
  cors({
    origin: config.corsDomian,
    optionsSuccessStatus: 200,
  })
)

app.get('/v01/api/status', (req, res) => {
  res.send({ status: 'ok' })
})

server.applyMiddleware({ app, path: '/graphql' })

const port = app.get('port') || config.port
app.listen(port, () => {
  console.log(`server is running at http://localhost:${port}`)
})
