let defaultHandler = require('./default.js')

let formatBlog = function (result) {
    if (result && result.info && result.info.length > 0) {
        result.info.forEach(function (item) {
            item.content = item.content.split(/[\r\n]{1,2}/)
        })
        return result
    }
}

let blogHandler = {
    find: {
        all () {
            let _sql = `select * from blog`
            return defaultHandler.query(_sql)
        },
        page (padeIndex, limit) {
            
        },
        byId: async function (id) {
            let _sql = `select * from blog where id="${id}";`
            let result = await defaultHandler.query(_sql)
            return formatBlog(result)
        }
    },
    add (obj) {
        let content = obj.content || '', title = obj.title || '';
        let _sql = `INSERT INTO blog (content, title, release_date) VALUES ('${content}','${title}', NOW());`
        return defaultHandler.query(_sql)
    }
}

module.exports = blogHandler