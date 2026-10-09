class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

        let numMap = new Map();

        for (let i = 0; i < nums.length; i++) {
            if (!numMap.has(nums[i])){
                numMap.set(nums[i], 1);
            } 
            let n = numMap.get(nums[i]);
            numMap.set(nums[i], n + 1);
        }

        let val = numMap.values();
        console.log(val.sort());
    }
}
