public class Solution {
    public int[] ProductExceptSelf(int[] nums) {
        
        int[] res = new int[nums.Length];

        //Note: division breaks when there's a zero in the array.
        
        int prefix = 1;
        for(int i = 0; i < nums.Length; i++){
             res[i] = prefix;
             prefix *= nums[i];
        }

        int suffix = 1;
        for(int j = nums.Length - 1; j >= 0; j--){
            res[j] *= suffix;
            suffix *= nums[j];
        }

        return res;
    }
}
