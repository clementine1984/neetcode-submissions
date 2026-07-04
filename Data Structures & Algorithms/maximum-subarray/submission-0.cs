public class Solution {
    public int MaxSubArray(int[] nums) {
        
        //Kadane’s Algorithm：
        //if the running sum becomes negative, 
        //keeping it will only reduce the sum of any future subarray.
        int maxSub = nums[0], curSum = 0; 
        foreach(int num in nums) {
            if(curSum < 0) {
                curSum = 0;
            }
            curSum += num;
            maxSub = Math.Max(maxSub, curSum);
        }
        return maxSub; 
    }
}
