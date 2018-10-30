const router = require('koa-router')();
const mysqlHandler = require('../mysql/index').blog;

var handler = {
	detail (ctx, rs) {
		if (rs.info.length > 0) {
			return ctx.render('blog/detail', { result: rs.info[0] })
		} else {
			return ctx.response.redirect('/blog')
		}
	}
}

router.get('/', async (ctx, next) => {
	let result = await mysqlHandler.find.all()
	// let result = {code:0}
	// let result = await mysqlHandler.add('mmm')
	await ctx.render('blog/index', {result})
})

router.get('/add', async (ctx, next) => {
	await ctx.render('blog/add')
})

router.get('/detail', async (ctx, next) => {
	let id;
	if (+ctx.request.query.id >= 0) {
		id = +ctx.request.query.id
	} else {
		return ctx.response.redirect('/blog')
	}
	let result = await mysqlHandler.find.byId(id)
	await handler.detail (ctx, result)

})

router.post('/add', async (ctx, next) => {
	let content = ctx.request.body.content
	let title = ctx.request.body.title
	let result = await mysqlHandler.add({content: content, title: title})
	ctx.response.body = result
})

module.exports = router