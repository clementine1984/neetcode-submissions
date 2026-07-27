class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */

    twoSum(nums, target) {

        for (let i = 0; i < nums.length; i++){
            let diff = target - nums[i];
            //indexOf scans the array from the start until it finds a match,
            //total time complexity would be O(n2)
            if (nums.indexOf(diff) !== -1 && i != nums.indexOf(diff)) {
                return [i, nums.indexOf(diff)];
            }
        }
        return [];
    }
}
