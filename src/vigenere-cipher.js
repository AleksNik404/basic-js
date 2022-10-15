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
  constructor(notReverse = true) {
    this.notReverse = notReverse;
    this.alphabet = `ABCDEFGHIJKLMNOPQRSTUVWXYZ`;
  }

  prepareToCrypt() {}

  encrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');

    // Create crypto table
    let table = [];
    [...this.alphabet].forEach((char, index, alpha) => {
      table.push([...alpha.slice(index), ...alpha.slice(0, index)]);
    });

    message = message.toUpperCase();
    key = key.toUpperCase();

    // Message and keys repeat without spaces
    let message2 = message.split(' ').join('');
    let keyRepeat2 = ''.padStart(message2.length, key);

    // Cache space index position
    const spaces = [];
    [...message].forEach((el, index) => (el == ' ' ? spaces.push(index) : ''));

    let cryptMessage = '';
    // create crypto Message
    for (let i = 0; i < message2.length; i++) {
      let indexWord1 = this.alphabet.indexOf(message2[i]);
      let indexWord2 = this.alphabet.indexOf(keyRepeat2[i]);

      indexWord1 !== -1
        ? (cryptMessage += table[indexWord1][indexWord2])
        : (cryptMessage += message2[i]);
    }

    // Add spaces position in crypto message
    spaces.forEach(
      (spaceIndex) =>
        // prettier-ignore
        cryptMessage = cryptMessage.slice(0, spaceIndex) + ' ' + cryptMessage.slice(spaceIndex)
    );

    return this.notReverse
      ? cryptMessage
      : [...cryptMessage].reverse().join('');
  }

  decrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');

    // Create crypto table
    let table = [];
    [...this.alphabet].forEach((char, index, alpha) => {
      table.push([...alpha.slice(index), ...alpha.slice(0, index)]);
    });

    message = message.toUpperCase();
    key = key.toUpperCase();

    // Message and keys repeat without spaces
    let message2 = message.split(' ').join('');
    let keyRepeat2 = ''.padStart(message2.length, key);

    // Cache space index position
    const spaces = [];
    [...message].forEach((el, index) => (el == ' ' ? spaces.push(index) : ''));

    let cryptMessage = '';
    // create crypto Message
    for (let i = 0; i < message2.length; i++) {
      let indexWord1 = this.alphabet.indexOf(keyRepeat2[i]);
      // let indexWord2 = this.alphabet.indexOf(keyRepeat2[i]);
      let indexWord2 = table[indexWord1].indexOf(message2[i]);

      indexWord2 !== -1
        ? (cryptMessage += this.alphabet[indexWord2])
        : (cryptMessage += message2[i]);
    }

    spaces.forEach(
      (spaceIndex) =>
        // prettier-ignore
        cryptMessage = cryptMessage.slice(0, spaceIndex) + ' ' + cryptMessage.slice(spaceIndex)
    );

    return this.notReverse
      ? cryptMessage
      : [...cryptMessage].reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine,
};

const cry = new VigenereCipheringMachine();

// console.log(cry.)//

console.log(cry.encrypt('attack at dawn!', 'alphonse')); //, 'AEIHQX SX DLLU!');
console.log(cry.encrypt('Example of sequence: 1, 2, 3, 4.', 'lilkey')); //, 'PFLWTJP WQ CIOFMYMI: 1, 2, 3, 4.');
console.log(cry.encrypt('cryptography', 'verylongkeyword')); //, 'XVPNECTXKTFU');
console.log(cry.encrypt('Samelengthkey', 'Samelengthkey')); //, 'KAYIWIAMMOUIW');
console.log(cry.encrypt('Same length key', 'Samelengthkey')); //, 'KAYI WIAMMO UIW');

// console.log(cry.decrypt('UWJJW XAGWLNFM VNNNDXHVWWL :)', 'js')); //, 'LEARN FRONTEND DEVELOPMENT :)');
// console.log(cry.decrypt('ICWWQAM KECEIK JVZZT EADGG!', 'rollingscopes')); //, 'ROLLING SCOPES SHOOL RULES!');
// console.log(cry.decrypt('TRVVFB VT JSUIFMYL!', 'learning')); //, 'INVEST IN YOURSELF!');
// console.log(cry.decrypt('HSVD AJAL ^^', 'behappy')); //, 'GOOD LUCK ^^');
