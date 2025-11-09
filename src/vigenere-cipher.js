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
    if (message === undefined || key === undefined) throw new Error('Incorrect arguments!');
    return this._cipher(message, key, true);
  }

  decrypt(message, key) {
    if (message === undefined || key === undefined) throw new Error('Incorrect arguments!');
    return this._cipher(message, key, false);
  }

  _cipher(text, key, encrypt) {
    text = text.toUpperCase();
    key = key.toUpperCase();
    
    let result = '';
    let j = 0;

    for (let char of text) {
      if (char >= 'A' && char <= 'Z') {
        const code = encrypt
          ? (char.charCodeAt(0) + key[j % key.length].charCodeAt(0) - 130) % 26
          : (char.charCodeAt(0) - key[j % key.length].charCodeAt(0) + 26) % 26;
        result += String.fromCharCode(code + 65);
        j++;
      } else {
        result += char;
      }
    }

    return this.direct ? result : result.split('').reverse().join('');
  }
}

module.exports = {
  directMachine: new VigenereCipheringMachine(),
  reverseMachine: new VigenereCipheringMachine(false),
  VigenereCipheringMachine,
};
