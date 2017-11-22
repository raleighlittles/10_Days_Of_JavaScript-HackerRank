/*
*	Return the largest value of any a & b < k in S (where a < b).
* 	
*	n: Set S is a sequence of distinct integers from 1 to n (i.e., {1, 2, ..., n}).
*	k: An integer.
*/
function getMaxLessThanK(n, k) {
    let maximum = 0;
    let current = -1;
    for (let i = 1; i < n; i++) 
    {
        for (let j = i + 1; j <= n; j++) 
        {
            current = i & j;
            if (current < k && current > maximum) 
            {
                maximum = current;
            }
        }
    }
    return maximum;
}