module.exports = () => {
    return async (ctx, next) => {
        const rootpath = __dirname + '/..'
        const viewpath = __dirname + '/../views'
        let title = 'doc'
        
        ctx.state.rootpath = rootpath
        ctx.state.viewpath = viewpath
        ctx.state.title = title
        await next()
    }
}