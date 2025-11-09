/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const result = [];

  for (let i = 0; i < rows; i++) {
    result[i] = [];
    for (let j = 0; j < cols; j++) {
      result[i][j] = 0;
    }
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let count = 0;
      
      if (i > 0 && j > 0 && matrix[i - 1][j - 1]) {
        count++;
      }
      
      if (i > 0 && matrix[i - 1][j]) {
        count++;
      }
      
      if (i > 0 && j < cols - 1 && matrix[i - 1][j + 1]) {
        count++;
      }
      
      if (j > 0 && matrix[i][j - 1]) {
        count++;
      }
      
      if (j < cols - 1 && matrix[i][j + 1]) {
        count++;
      }
      
      if (i < rows - 1 && j > 0 && matrix[i + 1][j - 1]) {
        count++;
      }
      
      if (i < rows - 1 && matrix[i + 1][j]) {
        count++;
      }
      
      if (i < rows - 1 && j < cols - 1 && matrix[i + 1][j + 1]) {
        count++;
      }
      
      result[i][j] = count;
    }
  }

  return result;
}

module.exports = {
  minesweeper
};
