const CryptoJS = require("crypto-js");
const secretKey = "secret key 123";

function encrypt(encryptedData) {
    return CryptoJS.AES.encrypt(encryptedData, secretKey).toString();
}

function decrypt(decryptedData) {
    const bytes = CryptoJS.AES.decrypt(decryptedData, secretKey);
    return bytes.toString(CryptoJS.enc.Utf8);
}

module.exports = { encrypt, decrypt };
