class Solution {
    /**
     * @param {number} n
     * @return {boolean}
     */

    //Time complexity: O(log n × k) in the digit work.
    //O(log n) time, O(log n) space.
    //seen.includes() on an array is O(n) per lookup 
    //while a Set gives O(1).

    isHappy(n) {
        let seen = [];
        const compute = (num) => {
            const numArray = num.toString().split("").map(Number);
            let sum = 0;
            for (let i = 0; i < numArray.length; i++) {
                sum += Math.pow(numArray[i], 2);
            }
            if (!seen.includes(sum) && sum !== 1) {
                seen.push(sum);
                return compute(sum);
            }
            return sum;
        };

        return compute(n) === 1;
    }
}
