class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {

        //let numArr = new Array();
        //for (let i = 0; i < nums.length; i++) {
        //    if (numArr.indexOf(nums[i]) !== -1){
        //        return true;
        //    }
        //    numArr.push(nums[i]);
        //}
        //return false;
        
        //Single call of numArr.indexOf(nums[i]) is O(n),
        //worst case O(n²).
        //While Set.has() is O(1) per check, worst case is O(n).

        let numSet = new Set();
        for (let i = 0; i < nums.length; i++) {
            if (numSet.has(nums[i])){
                return true;
            }
            numSet.add(nums[i]);
        }
        return false;
    }
}
