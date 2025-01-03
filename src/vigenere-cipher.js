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
  constructor(direct = true) {
    this.direct = direct;
    }
  encrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');
    return this.getResult(message, key, 'encrypt');
  }
  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) throw new Error('Incorrect arguments!');
    return this.getResult(encryptedMessage, key, 'decrypt');
  }
  getResult(text, key, method) {
    const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    text = text.toUpperCase();
    key = key.toUpperCase();
    const numAlph = {}
    for(let i = 0; i < alphabet.length; i++) {
      numAlph[alphabet[i]] = i;
    }
    let result = '';
    let keyInd = 0;
    for(let i = 0; i < text.length; i++) {
      if (alphabet.includes(text[i])) {        
        if (method === 'encrypt') {
          result += alphabet[(numAlph[text[i]] + numAlph[key[keyInd % key.length]]) % alphabet.length];
        } else {
          result += alphabet[(numAlph[text[i]] - numAlph[key[keyInd % key.length]] + alphabet.length) % alphabet.length];
        }
        keyInd++;
      } else {
        result += text[i];
      }
    }
    if (!this.direct) {
      result = result.split('').reverse().join('');
    }
    return result;
  }
}

module.exports = {
  VigenereCipheringMachine
};
