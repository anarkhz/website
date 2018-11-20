
module.exports = () => {
    return async (ctx, next) => {
        await next()
        if (ctx.status == 200) {
            if (ctx.response.type !== 'text/html') {
                ctx.response.body = {
                    code: 200,
                    msg: 'ok',
                    data: ctx.response.body
                }
            }
        }
    }
}
