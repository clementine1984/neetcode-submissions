public class Solution {
    public int FindMin(int[] nums) {
        
        int l =0, r = nums.Length - 1;
        int res= nums[0];

        while(l <= r){
            //Check if the current search subarray is sorted in ascending order. 
            if(nums[l] < nums[r]) {
                res = Math.Min(res, nums[l]);
                break;
            }
            
            //Compute the middle point 
            //Instead of (l + r) / 2, use this to avoid integer overflow. 
            int m = l + (r - l) / 2;
            res = Math.Min(res, nums[m]);
            
            //If the right half contains the rotation point,
            //Discard the left portion and keep searching the right portion 
            //where the true minimum hides.
            if(nums[m] >= nums[l]) {
                l = m + 1;
            } else {
                r = m - 1;
            }
        }
        return res;
    }
}
