public class Solution {
    public int MissingNumber(int[] nums) {
        
        for(int i = 0; i < nums.Length; i++){
             if(nums[i] == null) return nums[i];
        }
    }
}
