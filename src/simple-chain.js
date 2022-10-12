const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  arr: [],

  getLength() {
    return this.arr.length;
  },

  addLink(value) {
    this.arr.push(`( ${value} )`);
    return this;
  },

  removeLink(index) {
    if (!this.arr[index - 1]) {
      this.arr.splice(0);
      throw new Error("You can't remove incorrect link!");
    }
    this.arr.splice(index - 1, 1);
    return this;
  },

  reverseChain() {
    this.arr.reverse();
    return this;
  },

  finishChain() {
    return this.arr.splice(0).join('~~');
  },
};

console.log(chainMaker);

console.log(
  chainMaker
    .addLink('GHI')
    .addLink(null)
    .reverseChain()
    .addLink(333)
    .reverseChain()
    .reverseChain()
    .addLink(0)
    .reverseChain()
    .reverseChain()
    .addLink('GHI')
    .finishChain()
);

console.log(chainMaker);

module.exports = {
  chainMaker,
};
