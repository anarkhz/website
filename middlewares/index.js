
const logger = require('koa-logger');
const loggerExtend = require('./loggerExtend');
const bodyparser = require('koa-bodyparser');
const json = require('koa-json');
const koaStatic = require('koa-static');
const ejs = require('ejs');
const views = require('koa-views');
const path = require('path');
const resFormat = require('./resposeFormat')
const state = require('./state')


module.exports = (app) => {
    var rootPath = __dirname + '/..';
    var midwares = [
        json(),
        logger(),
        loggerExtend(),
        bodyparser({
            enableTypes: ['json', 'form', 'text']
        }),
        koaStatic(rootPath + '/public'),
        views(path.join(rootPath, '/views'), {
            map: {
                html: 'ejs'
            },
            options: {
                // helpers: {
                //     uppercase: (str) => str.toUpperCase()
                // },

                // partials: {
                //     subTitle: '../layout' // requires ./my-partial.hbs
                // }
            }

        }),
        resFormat(),
        state()
    ]
    midwares.forEach((item, index) => {
        app.use(item)
    })
}