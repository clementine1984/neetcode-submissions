class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {

        nums.sort((a, b) => a - b);

        const res = [];

        if (nums[0] > 0) return [];

        for (let i = 0; i < nums.length - 2; i++){

            let j = i + 1;
            let k = nums.length - 1;

            if (nums[i - 1] == nums[i]) continue;

            while (j < k) {
                let sum = nums[i] + nums[j] + nums[k];
                if (sum == 0) {
                  res.push([nums[i],nums[j],nums[k]]);
                  j++;
                  k--;
                  if (nums[j] == nums[j - 1]) j++;
                  if (nums[k] == nums[k - 1]) k--;
                } else if (sum < 0){
                  j++;
                } else {
                  k--;
                }           
            }
            
        }
        return res;
    }
}