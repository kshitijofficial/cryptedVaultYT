// encryption/encryptionUtils.js
const crypto = require('crypto');

const encryptFile = (fileBuffer, encryptionKey) => {
  // Generate a random initialization vector
  const iv = crypto.randomBytes(16);
  
  // // Create a cipher object with AES-256-CBC algorithm and the provided encryption key and IV
  const cipher = crypto.createCipheriv('aes-256-cbc', Buffer.from(encryptionKey), iv);
  
  // Encrypt the file data
  const encryptedData = Buffer.concat([cipher.update(fileBuffer), cipher.final()]);
  
  // Return the encrypted data and initialization vector
  return { encryptedData, iv };
};

module.exports = {
  encryptFile,
};
