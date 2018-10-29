const router = require('koa-router')();
const mysqlHandler = require('../mysql/index').blog;

router.get('/', async (ctx, next) => {
	let result = await mysqlHandler.find.all()
	// let result = {code:0}
	// let result = await mysqlHandler.add('mmm')
	await ctx.render('blog/index.html', {result})
})

router.post('/add', async (ctx, next) => {
	let content = ctx.request.body.content
	let title = ctx.request.body.title
	let result = await mysqlHandler.add({content: content, title: title})
	ctx.response.body = result
})

module.exports = router