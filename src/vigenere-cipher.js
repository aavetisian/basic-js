const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error('Incorrect arguments!');
    }

    message = message.toUpperCase();
    key = key.toUpperCase();

    let encrypted = '';
    let keyIndex = 0;

    for (let i = 0; i < message.length; i++) {
      const messageChar = message.charAt(i);
      const messageCharCode = messageChar.charCodeAt(0);
      if (messageCharCode >= 65 && messageCharCode <= 90) {
        const keyChar = key.charAt(keyIndex % key.length);
        const keyCharCode = keyChar.charCodeAt(0);
        const encryptedCharCode = ((messageCharCode - 65 + keyCharCode - 65) % 26) + 65;
        encrypted += String.fromCharCode(encryptedCharCode);
        keyIndex++;
      } else {
        encrypted += messageChar;
      }
    }

    if (!this.isDirect) {
      encrypted = encrypted.split('').reverse().join('');
    }

    return encrypted;
  }

  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error('Incorrect arguments!');
    }

    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();

    let message = '';
    let keyIndex = 0;

    for (let i = 0; i < encryptedMessage.length; i++) {
      const encryptedChar = encryptedMessage.charAt(i);
      const encryptedCharCode = encryptedChar.charCodeAt(0);
      if (encryptedCharCode >= 65 && encryptedCharCode <= 90) {
        const keyChar = key.charAt(keyIndex % key.length);
        const keyCharCode = keyChar.charCodeAt(0);
        const messageCharCode = ((encryptedCharCode - 65 - keyCharCode + 65 + 26) % 26) + 65;
        message += String.fromCharCode(messageCharCode);
        keyIndex++;
      } else {
        message += encryptedChar;
      }
    }

    if (!this.isDirect) {
      message = message.split('').reverse().join('');
    }

    return message;
  }
}


module.exports = {
  VigenereCipheringMachine
};
