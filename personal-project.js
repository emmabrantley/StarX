function createGrid(size) {
  var grid = new Array(size);
  for (i = 0; i < size; i++) {
    var newRow = new Array(size);
    for (j = 0; j < size; j++) {
      newRow[j] = false;
    }
    grid[i] = newRow;
  }
  return grid;
}

function isSafe(grid, x, y) {
  var length = grid.length;
  for (var row = y - 3; row <= y + 3; row++) {
    if (row >= 0 && row < length) {
        for (var col = x - 3; col <= x + 3; col++) {
          if (col >= 0 && col < length && [row, col] != [y-3, x-3] && [row, col] != [y-3, x+3] && [row, col] != [y+3, x-3] && [row, col] != [y+3, x+3]) {
            if (grid[col][row] == true) {
              return false;
            }
          }
       }
    }
  }
  return true;
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive)
 * Using Math.round() will give you a non-uniform distribution!
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function main() {
  var grid = createGrid(400);
  for (i = 0; i < 3000; i++) {
    var x = getRandomInt(0, 399);
    var y = getRandomInt(0, 399);
    // if (isSafe(grid, x, y)) {
      if(isSafe(true)){
      grid[x][y] = true;
      var left = x*6;
      var top = y*6;
      var newDot = '<div class="dot" style="left: ' + left + 'px; top: ' + top + 'px;"></div>'
      $('#background-container').append(newDot);
    }
  }
}

$(document).ready(main());
