const crypto = require('crypto');

// Function to generate a secure encryption key
const generateEncryptionKey = (length) => {
  return crypto.randomBytes(length/2).toString('hex'); // Generate random bytes and convert to hexadecimal string
};


module.exports={generateEncryptionKey}