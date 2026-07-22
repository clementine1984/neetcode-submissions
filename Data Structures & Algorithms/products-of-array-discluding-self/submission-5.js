class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */

    //Prefix and suffix optimal

    productExceptSelf(nums) {

        const n = nums.length;

        const res = new Array(n);
        
        let prefix = 1;  
        for (let i = 0; i < n; i++) {
            res[i] = prefix;
            prefix *= nums[i];
        }

        let suffix = 1;
        //Need to update the first element in res,
        //so j could be 0.
        for (let j = n - 1; j >= 0; j--){
            res[j] *= suffix;
            suffix *= nums[j];
        }

        return res;
    }
}
