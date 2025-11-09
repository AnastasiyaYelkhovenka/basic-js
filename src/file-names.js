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
function renameFiles(names) {
  const usedNames = new Set();
  const result = [];

  for (const name of names) {
    if (!usedNames.has(name)) {
      result.push(name);
      usedNames.add(name);
    } else {
      let k = 1;
      let newName = `${name}(${k})`;
      
      while (usedNames.has(newName)) {
        k++;
        newName = `${name}(${k})`;
      }
      
      result.push(newName);
      usedNames.add(newName);
    }
  }

  return result;
}

module.exports = {
  renameFiles
};
