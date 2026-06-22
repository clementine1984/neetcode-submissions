class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums: number[], target: number): number {
      
         let l = 0;
         let r = nums.length - 1; 

         while(l <= r){
             let m = l + Math.floor((r-l)/ 2);
             if(nums[m] == target){
                return m;
             }
             if(nums[m] < target){
                l = m + 1;
             }
             if(nums[m] > target){
                r = m - 1;
             }
         }
         return -1;
        
    }
}
