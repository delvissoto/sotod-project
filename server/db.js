require('dotenv').config();

const mysql = require("mysql");

const db = mysql.createConnection({
    host:"localhost",
    user:'sotod',
    password: process.env.MYSQL_PASSWORD,
    database:"sotod"
})

module.exports = db;