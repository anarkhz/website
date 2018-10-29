let defaultHandler = require('./default.js')

let blogHandler = {
    find: {
        all () {
            let _sql = `select * from blog`
            console.log(_sql)
            return defaultHandler.query(_sql)
        },
        page (padeIndex, limit) {
            
        },
        byId (id) {
            let _sql = `select * from blog where id="${id}";`
            return defaultHandler.query(_sql)
        }
    },
    add (obj) {
        let content = obj.content || '', title = obj.title || '';
        let _sql = `INSERT INTO blog (content, title, release_date) VALUES ('${content}','${title}', NOW());`
        return defaultHandler.query(_sql)
    }
}

module.exports = blogHandler