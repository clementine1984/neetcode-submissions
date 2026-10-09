class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        let inNums: number[] = [];
        for(let i =0;i<=nums.length;i++){
            if(inNums.indexOf(i) !== -1){
                return false;
            } else {
                inNums.push(nums[i]);
            }
        }
        return false;
    }
}
