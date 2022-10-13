const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(nameFiles) {
  let checkCount = {};
  let renameFiles = [];

  nameFiles.forEach((name) => {
    if (!renameFiles.includes(name)) {
      renameFiles.push(name);
      checkCount[name] = 1;
    } else {
      double = name + `(${checkCount[name]})`;
      renameFiles.push(double);
      checkCount[double] = 1;
      checkCount[name]++;
    }
  });

  return renameFiles;
}

renameFiles(['doc', 'doc', 'image', 'doc(1)', 'doc']),
  // ['doc', 'doc(1)', 'image', 'doc(1)(1)', 'doc(2)'];

  (module.exports = {
    renameFiles,
  });
