/*
 * Modify and return the array so that all even elements are doubled and all odd elements are tripled.
 * 
 * Parameter(s):
 * nums: An array of numbers.
 */
function modifyArray(nums) {
    const func = nums.map(function(num) {
        
        if (num % 2 == 0)
            {
                return 2*num;
            }
        else
            {
                return 3*num;
            }
    });
    return func;
}