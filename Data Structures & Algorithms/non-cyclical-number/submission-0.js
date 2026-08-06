class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n) {
        const compute = (num) => {
            const numArray = num.toString().split("").map(Number);
            let sum = 0;
            for (let i = 0; i < numArray.length; i++) {
                sum += Math.pow(numArray[i], 2);
            }
            return sum;
        };

        return compute(n) === 1;
    }
}
