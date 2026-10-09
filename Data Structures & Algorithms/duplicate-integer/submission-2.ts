class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
         let inNum: number[] = [];
         for(let i =0;i<= nums.length; i++){
            if(inNum.indexOf(i) == -1 ){
                inNum.push(nums[i]);
            }else{
                return true;
            }
         }
         return false;
    }
}
