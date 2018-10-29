var mysql = require('mysql');
var config = require('../../config.js')

var pool = mysql.createPool({
    host: config.database.HOST,
    user: config.database.USERNAME,
    password: config.database.PASSWORD,
    database: config.database.DATABASE
});

let query = function (sql, values) {
    return new Promise(function (resolve, reject) {
        pool.getConnection(function (err, connection) {
            if (err) {
                console.log(err)
            } else {
                connection.query(sql, values, (err, rows) => {
                    if (err) {
                        reject({
                            info: err
                        })
                    } else {
                        resolve({
                            info: rows
                        })
                    }
                    connection.release()
                })
            }
        })
    })
}

module.exports = {
    query
}