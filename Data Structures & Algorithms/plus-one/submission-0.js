class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits) {

        const number = parseInt(digits.join(''));

        const res = (number + 1).toString().split('').map(Number);

        return res;
    }
}
