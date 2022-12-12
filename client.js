

const net = require('net');
const { IP, PORT } = require('./constants');

const connect = function() {
  const conn = net.createConnection({
    host: "localhost",
    port: 50541,
  });

  conn.setEncoding('utf8');

  conn.on('connect', () => {
    console.log("Connected to SERVER!");
    conn.write("Name: BOB");
  });
  
  conn.on('data', data => {
    console.log(data);
  });

  return conn;
};

module.exports = { connect };