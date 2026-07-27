class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

        for (let i = 0; i < nums.length; i++){
            let diff = target - nums[i];
            if (nums.indexOf(diff) !== -1) {
                return [i, nums.indexOf(diff)];
            }
        }
        return [];
    }
}
