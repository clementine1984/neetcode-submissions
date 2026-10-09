public class Solution {
    public int MissingNumber(int[] nums) {
        if(nums.Length == 0) {
            return 0;

        } else{
        for(int i = 0; i < nums.Length; i++){
             if(nums[i] == null) return nums[i];
        }
        }
    }
}
