const mysql = require("mysql");

const db = mysql.createConnection({
    host:"localhost",
    user:'sotod',
    password:process.env.REACT_APP_PASSWORD,
    database:"sotod"
})

module.exports = db;