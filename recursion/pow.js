/**
 * 
Implement pow(x, n), which calculates x raised to the power n (i.e., xn).

 

Example 1:

Input: x = 2.00000, n = 10
Output: 1024.00000
Example 2:

Input: x = 2.10000, n = 3
Output: 9.26100
Example 3:

Input: x = 2.00000, n = -2
Output: 0.25000
Explanation: 2-2 = 1/22 = 1/4 = 0.25
 

Constraints:

-100.0 < x < 100.0
-231 <= n <= 231-1
-104 <= xn <= 104
 */


/*solution1:*/

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
 var myPow = function(x, n) {
    let bigN = Number(n)
    if(bigN == 0){
        return 1;
    }
    
    let previous;
    if(bigN == 1){
        return (x * 1);
    }

    previous = myPow(x, Math.abs(bigN)-1);
    if(bigN > 0){
        previous = previous * x;
    }else if(bigN < 0){
        previous = 1/(previous * x);
    }

    return previous;
};


/* Solution FastPower Algorithm */


/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
 var myPow = function(x, n) {
    let bigN = Number(n)
    if(bigN == 0){
        return 1;
    }
    
    let result;
    
    if(Math.abs(bigN) % 2 == 0){
       result = myPow(x * x, Math.abs(bigN/2));
    }
    else{
        result = myPow( x * x, Math.abs(bigN-1)/2) * x;
    }

    if(bigN < 0){
        return 1/result;
    }

    return result;
};