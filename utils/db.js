const mysql = require("mysql2");

const pool = mysql.createPool({
  database: "notes_app",
  password: "mysql",
  host: "localhost",
  user: "root",
});

module.exports = pool.promise();
