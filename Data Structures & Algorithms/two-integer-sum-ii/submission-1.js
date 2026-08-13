class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        const n = numbers.length;

        let i = 0,
            j = n - 1;
        while (i < j) {
            let res = numbers[i] + numbers[j];

            //console.log("numbers[i]", numbers[i]);
            //console.log("numbers[j]", numbers[j]);
            if (res < target) {
                i++;
            } else if (res > target) {
                j--;
            } else {
                return [i + 1, j + 1];
            }
        }
    }
}
