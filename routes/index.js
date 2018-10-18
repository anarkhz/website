const router = require('koa-router')()

router.get('/', async (ctx, next) => {
  await ctx.render('index.html', {
    title: 'Hello Koa 2!'
  })
})

// router.get('/blog', async (ctx, next) => {
//   await ctx.render('blog/index.html', {
//     title: 'Hello Koa 2!'
//   })
// })
router.use(require('./blog').routes())

// router.get('/json', async (ctx, next) => {
//   ctx.body = {
//     title: 'koa2 json'
//   }
// })

module.exports = router
