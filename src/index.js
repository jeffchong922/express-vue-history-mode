const path = require('path')
const express = require('express')
const compression = require('compression')
const history = require('connect-history-api-fallback')
const { SERVER_PORT } = require('./_helpers/secret')

const app = express()

const resolve = file => path.resolve(__dirname, file)

// https://github.com/bripkens/connect-history-api-fallback#introduction 查看详情
const historyModeMiddleware = history({
  verbose: true,
  disableDotRule: true
})

// 静态文件
// https://stackoverflow.com/questions/44608042/express-static-server-cache-control-with-max-age-0-must-revalidate
const staticFileMiddleware = express.static(resolve('../public'), {
  maxAge: 1000 * 60 * 60 * 24 * 30
})

app.use(compression())
// https://github.com/bripkens/connect-history-api-fallback/tree/master/examples/static-files-and-index-rewrite#configuring-the-middleware
app.use(staticFileMiddleware)
app.use(historyModeMiddleware)
app.use(staticFileMiddleware)

app.get('/', function (req, res) {
  res.render(resolve('../public/index.html'))
})

app.listen(SERVER_PORT, () => {
  console.log(`服务器运行在端口号: ${SERVER_PORT}, http://localhost:${SERVER_PORT}`)
})