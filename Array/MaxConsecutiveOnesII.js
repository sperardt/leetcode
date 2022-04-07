/*Given a binary array nums, return the maximum number of consecutive 1's in the array if you can flip at most one 0.

 

Example 1:

Input: nums = [1,0,1,1,0]
Output: 4
Explanation: Flip the first zero will get the maximum number of consecutive 1s. After flipping, the maximum number of consecutive 1s is 4.
Example 2:

Input: nums = [1,0,1,1,0,1]
Output: 4
 

Constraints:

1 <= nums.length <= 105
nums[i] is either 0 or 1.*/

/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMaxConsecutiveOnes = function(nums) {
    let longestSequence = 0;
    
    for(let left=0; left<nums.length; left++){
        let numZeroes = 0;
        
        for(let right=left; right < nums.length; right++){
            if(nums[right] == 0){
                numZeroes += 1;
            }
            if(numZeroes <=1){
                longestSequence = Math.max(longestSequence, right - left +1)
            }
        }
    }
    return longestSequence;
};

