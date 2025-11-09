/**
 * Create transformed array based on the control sequences that original
 * array contains
 *
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 *
 * @example
 *
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 *
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const result = [];
  const discarded = new Set();
  const doubledByNext = new Set();

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    if (element === '--discard-next') {
      if (i + 1 < arr.length) {
        discarded.add(i + 1);
      }
      continue;
    }

    if (element === '--discard-prev') {
      if (result.length > 0 && !discarded.has(i - 1)) {
        if (doubledByNext.has(i - 1)) {
          const prevElement = arr[i - 1];
          for (let j = 0; j < 2 && result.length > 0; j++) {
            for (let k = result.length - 1; k >= 0; k--) {
              if (result[k] === prevElement) {
                result.splice(k, 1);
                break;
              }
            }
          }
          doubledByNext.delete(i - 1);
        } else {
          result.pop();
        }
      }
      continue;
    }

    if (element === '--double-next') {
      if (i + 1 < arr.length && !discarded.has(i + 1)) {
        result.push(arr[i + 1]);
        result.push(arr[i + 1]);
        doubledByNext.add(i + 1);
      }
      continue;
    }

    if (element === '--double-prev') {
      if (i - 1 >= 0 && !discarded.has(i - 1) && !doubledByNext.has(i - 1) && result.length > 0) {
        result.push(arr[i - 1]);
      }
      continue;
    }

    if (!discarded.has(i) && (!doubledByNext.has(i) || 
        (i + 1 < arr.length && (arr[i + 1] === '--double-prev' || arr[i + 1] === '--discard-prev')))) {
      result.push(element);
    }
  }

  return result;
}

module.exports = {
  transform
};
