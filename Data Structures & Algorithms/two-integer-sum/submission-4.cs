public class Solution {
    public int[] TwoSum(int[] nums, int target) {

        Dictionary<int, int> preMap = new Dictionary<int, int>();

        for (int i = 0; i < nums.Length; i++){
            int diff = target - nums[i];
            if(preMap.ContainsKey(diff)){
                return new int[] {preMap[diff], i};
            }
            //Key: num, Value: index
            preMap[nums[i]] = i;
        }
        
        return null;
    }
}
