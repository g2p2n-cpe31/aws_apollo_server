import config from './config'
import express from 'express'
import cors from 'cors'
import server from './graphql/schema/index'
const app = express()

// function setPort(port = 5000) {
//   app.set('port', pareInt(port, 10))
// }

// function listen() {
//   const port = app.get('port') || config.port
//   app.listen(port, () => {
//     console.log(`server is running at http://localhost:${port}`)
//   })
// }

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

app.listen({ port: 5000 }, () =>
  console.log(`server is running at http://localhost`)
)
// apollo(app)

// export default {
//   getApp: () => apollo(app),
//   setPort,
//   listen,
// }
