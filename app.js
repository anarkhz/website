const Koa = require('koa')
const app = new Koa()
const onerror = require('koa-onerror')
const router = require('./controllers')
const path = require('path');
// const ejs = require('ejs');
const session = require('koa-session-minimal');
const MysqlStore = require('koa-mysql-session');
const config = require('./config.js');
const staticCache = require('koa-static-cache')

const middlewares = require('./middlewares')

// session存储配置
const sessionMysqlConfig = {
  user: config.database.USERNAME,
  password: config.database.PASSWORD,
  database: config.database.DATABASE,
  host: config.database.HOST,
}

// 配置session中间件
// app.use(session({
//   key: 'USER_SID',
//   store: new MysqlStore(sessionMysqlConfig)
// }))

// 缓存
// app.use(staticCache(path.join(__dirname, './public/images'), { dynamic: true }, {
//   maxAge: 365 * 24 * 60 * 60
// }))


// 其他中间件
middlewares(app)

// routes
app.use(router.routes());

// error handler
onerror(app)
// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
