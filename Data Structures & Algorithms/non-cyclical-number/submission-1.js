class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */
    isHappy(n) {
        let seen = [];
        const compute = (num) => {
            const numArray = num.toString().split("").map(Number);
            let sum = 0;
            for (let i = 0; i < numArray.length; i++) {
                sum += Math.pow(numArray[i], 2);
            }
            if (!seen.includes(sum)) {
                seen.push(sum);
            } else {
                sum = 0;
            }
            return sum;
        };

        if (compute(n) === 1) {
            return true;
        } else {
            return false;
        }
    }
}
