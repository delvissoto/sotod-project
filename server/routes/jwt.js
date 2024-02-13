const jwt = require('jsonwebtoken');

const secretKey = 'secret_key'; 

function createToken(userId, userName, userEmail) {
  const token = jwt.sign({ userId, userName, userEmail }, secretKey, { expiresIn: '1h' }); 
  return token;
}

module.exports = { createToken };