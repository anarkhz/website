const router = require('koa-router')()
const userModel = require('./mysql/index.js')

router.get('/', async (ctx, next) => {
  await ctx.render('index.html', {
    title: 'Hello Koa 2!'
  })
})


router.use('/blog',require('./blog').routes())

module.exports = router
