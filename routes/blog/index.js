const router = require('koa-router')()

router.get('/blog', async (ctx, next) => {
  await ctx.render('blog/index.html')
})

module.exports = router