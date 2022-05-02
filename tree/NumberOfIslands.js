/*Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

 

Example 1:

Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1
Example 2:

Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3
 

Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 300
grid[i][j] is '0' or '1'.*/

/**
 * @param {character[][]} grid
 * @return {number}
 */

 var numIsland = function (grid, row, col, visited){
    let rowInbounds = row >= 0  && row < grid.length;
    let colInbounds = col >= 0  && col < grid[0].length;
    if(!rowInbounds || !colInbounds) return false;
    
    if(grid[row][col] == '0') return false;
    
    const pos = row +','+ col;
    if(visited.has(pos)) return false;
    visited.add(pos);
    
    numIsland(grid, row+1, col, visited);
    numIsland(grid, row-1, col, visited);
    numIsland(grid, row, col+1, visited);
    numIsland(grid, row, col-1, visited);
    
    return true;
}
var numIslands = function(grid) {
    const visited = new Set();
    let count = 0;
    for(let i=0 ; i<grid.length; i++){
        for(let j=0; j < grid[0].length; j++){
            if(numIsland(grid, i, j, visited) == true){
                count += 1
            }
        }
    }
    return count;
};