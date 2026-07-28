class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {

        if (n == 1) return 1;
        if (n == 2) return 2;

        let prev = 1;
        let curr = 2;
        let newVal;

        for (let i = 3; i <= n; i++) {
            newVal = prev + curr;
            prev = curr;
            curr = newVal;
        }
        return newVal; 
    }
}
