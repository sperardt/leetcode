/*Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

 

Example 1:

Input: nums = [-4,-1,0,3,10]
Output: [0,1,9,16,100]
Explanation: After squaring, the array becomes [16,1,0,9,100].
After sorting, it becomes [0,1,9,16,100].
Example 2:

Input: nums = [-7,-3,2,3,11]
Output: [4,9,9,49,121]
 

Constraints:

1 <= nums.length <= 104
-104 <= nums[i] <= 104
nums is sorted in non-decreasing order.*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */

 var sortSquares = (num1, num2) => {
    return num1 - num2;
}
var sortedSquares = function(nums) {
    let squaresArr = [] ;
    
    for(let i=0; i<nums.length;i++){
        let square = nums[i] * nums[i];
        squaresArr.push(square);
    }
    return squaresArr.sort(sortSquares);
};


// -------------- O(N) solution ---------------

var sortedSquares = function(nums) {
    let squaresArr = new Array(nums.length);
    let left = 0;
    let right = nums.length-1;
    
    for(let i=nums.length-1; i>=0; i--){
        let square;
        
        if(Math.abs(nums[left]) < Math.abs(nums[right])){
            square = nums[right];
            right --;
        }else{
            square = nums[left];
            left++;
        }
        squaresArr[i] = square * square;
    }
    return squaresArr;
};