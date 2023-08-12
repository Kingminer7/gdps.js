const servercon = require("../../config/connection");
const mysql = require("mysql");
const conData = {
  host: servercon.servername,
  user: servercon.user,
  password: servercon.password,
  database: servercon.dbname,
  port: servercon.port,
};

if ((conData.host == "") | (conData.host == null)) {
  conData.host = "127.0.0.1";
}
if ((conData.user == "") | (conData.user == null)) {
  conData.user = "root";
}
if ((conData.password == "") | (conData.password == null)) {
  conData.password = "";
}
if ((conData.database == "") | (conData.database == null)) {
  conData.database = "geometrydash";
}
if ((conData.port == "") | (conData.port == null)) {
  conData.port = "3306";
}

try {
  const db = mysql.createConnection(conData);
  module.exports = db;
  // Connect to the database
  db.connect((err) => {
    if (err) {
      console.error("Error connecting to the database:", err);
      return;
    }
    console.log("Connected to the database");
  });

  // Set the error mode to exception
  db.on("error", (err) => {
    console.error("Connection failed:", err);
  });

  db.end();
} catch (e) {
  console.log("Connection failed: " + e);
  module.exports = null;
}
