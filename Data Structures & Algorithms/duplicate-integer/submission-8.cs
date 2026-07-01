public class Solution {
    public bool hasDuplicate(int[] nums) {
        
        //As the HashSet only contains unique elements.
        return new HashSet<int>(nums).Count < nums.Length;
    }
}