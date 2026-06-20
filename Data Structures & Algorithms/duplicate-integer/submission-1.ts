class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums: number[]): boolean {
        let inNums: number[] = [];
        for (let i = 0; i < nums.length; i++){
              if(inNums.indexOf(nums[i]) !== -1){
                  return true;
              }else{
                inNums.push(nums[i])
              }    
        }
        return false;
    }
}
