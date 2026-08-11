class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {

        const res = [];

        const n = nums.length;

        let prefix = 1, suffix = 1;
        for (let i = 0; i < n; i++) {
            res[i] = prefix;
            prefix *= nums[i];
        }

        for (let j = n - 1; j >=0; j--){
            res[j] *= suffix;
            suffix *= nums[j];
        }

        return res;
    }
}
