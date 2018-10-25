const router = require('koa-router')();
const mysqlHandler = require('../mysql/index').blog;

router.get('/', async (ctx, next) => {
	let result = await mysqlHandler.find.all()
	// let result = await mysqlHandler.add('mmm')
	await ctx.render('blog/add.html', {result})
})

router.get('/add', async (ctx, next) => {
	let result = await mysqlHandler.add('abad')
	// let result = await mysqlHandler.find.all()
	ctx.response.body = result
	// await ctx.render('blog/edit_blog.html', { result })
})

module.exports = router