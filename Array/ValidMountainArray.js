/**
 * Given an array of integers arr, return true if and only if it is a valid mountain array.

Recall that arr is a mountain array if and only if:

arr.length >= 3
There exists some i with 0 < i < arr.length - 1 such that:
arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
arr[i] > arr[i + 1] > ... > arr[arr.length - 1]


Example 1:

Input: arr = [2,1]
Output: false
Example 2:

Input: arr = [3,5,5]
Output: false
Example 3:

Input: arr = [0,3,2,1]
Output: true
 

Constraints:

1 <= arr.length <= 104
0 <= arr[i] <= 104

 */

/**
 * @param {number[]} arr
 * @return {boolean}
 */
 var validMountainArray = function(arr) {
    if(!arr || arr.length < 3 ){
        return false;
    }
    
    let maxLength = arr.length-1;
    let isDecreasing = false;
    let isIncreasing = false;
    
    for(let i=1; i<arr.length; i++){
        let previous = arr[i-1]
        let next = arr[i+1];
        let nextIndex = i+1;
        
        if(arr[i] > previous){
            isIncreasing = true;
        }
        else if(arr[i] > next && nextIndex <= maxLength){
            isDecreasing = true;
        }else if(arr[i] < previous && nextIndex > maxLength){
            isDecreasing = true;
        }
        else{
            return false;
        }
        
    }

    return (isIncreasing && isDecreasing);
    
};