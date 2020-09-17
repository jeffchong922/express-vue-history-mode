const fs = require('fs')
const path = require('path')
const dotenv =require('dotenv')

const resolve = file => path.resolve(__dirname, file)

const envPath = resolve('../../.env')
const envExamplePath = resolve('../../.env.example')
if (fs.existsSync(envPath)) {
  console.log('使用 .env 文件加载换将变量')
  dotenv.config({
    path: envPath
  })
} else if (fs.existsSync(envExamplePath)) {
  console.log('使用 .env.example 文件加载换将变量')
  dotenv.config({
    path: envExamplePath
  })
} else {
  console.error('请添加环境变量文件: .env 或者 .env.example')
  process.exit(1)
}

const SERVER_PORT = process.env.SERVER_PORT || 3050

module.exports = {
  SERVER_PORT
}