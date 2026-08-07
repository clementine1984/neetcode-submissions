class Solution {
    /**
     * @param {number[]} digits
     * @return {number[]}
     */
    plusOne(digits) {
        //Actually a wrong answer:

        //const number = parseInt(digits.join(''));

        //const res = (number + 1).toString().split('').map(Number);

        //return res;

        //when a problem is about an array of digits rather than an integer, that's the problem that the value doesn't fit in a native numeric type.

        //Walk right to left. At each digit: if it's under 9, increment it and return. If it's a 9, set it to 0 and repeat on the next digit left. If you run off the left edge, every digit was a 9, so prepend a 1.

        for (let i = digits.length - 1; i >= 0; i--) {
            if (digits[i] < 9) {
                digits[i]++;
                return digits;
            }
            digits[i] = 0;
        }
        return [1, ...digits];
    }
}
