
const logger = require('koa-logger');
const loggerExtend = require('./loggerExtend');
const bodyparser = require('koa-bodyparser');
const json = require('koa-json');
const koaStatic = require('koa-static');
const ejs = require('ejs');
const views = require('koa-views');
const path = require('path')
const resFormat = require('./resposeFormat')


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
        views(rootPath + '/views', {
            map: {
                html: 'ejs'
            }
        }),
        resFormat(),
    ]
    midwares.forEach((item, index) => {
        app.use(item)
    })
}