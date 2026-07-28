class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {

        if (n <= 2) return n;

        let prev = 1;
        let curr = 2;

        for (let i = 3; i <= n; i++) {
            let newVal = prev + curr;
            prev = curr;
            curr = newVal;
        }
        return curr; 
    }
}
