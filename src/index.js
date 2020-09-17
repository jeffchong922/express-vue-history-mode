const express = require('express')
const { SERVER_PORT } = require('./_helpers/secret')

const app = express()

app.get('*', (req, res) => {
  res.end('Hello World')
})

app.listen(SERVER_PORT, () => {
  console.log(`服务器运行在端口号: ${SERVER_PORT}, http://localhost:${SERVER_PORT}`)
})