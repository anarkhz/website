const router = require('koa-router')()
const userModel = require('./mysql/index.js')

router.get('/', async (ctx, next) => {
  await ctx.render('index.html', {
    title: 'Hello Nark!'
  })
})


router.use('/blog',require('./blog').routes())

module.exports = router
