const { keys } = require('./constants');

let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();


  stdin.on('data', handleUserInput)
  return stdin;
}


const handleUserInput = key => {
  if (key === '\u0003' || key === 'x') {
    process.exit();
    return
  }  
  
  if (keys[key]) {
    connection.write(keys[key]);
  }
};

module.exports = { setupInput };

