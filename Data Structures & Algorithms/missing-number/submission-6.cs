public class Solution {
    public int MissingNumber(int[] nums) {
        
        int res = nums.Length;
        for( i = 0; i < nums.length-1; i++){
            res += i - nums[i];
        }
        return res;
    }
}
