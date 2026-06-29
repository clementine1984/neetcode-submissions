public class Solution {
    public int[] TopKFrequent(int[] nums, int k) {
        
        Dictionary<int, int> count = new Dictionary<int, int>();
 
        //Build a frequency map
        // e.g. nums=[1,1,1,2,2,3] → {1:3, 2:2, 3:1}
        foreach(int num in nums) {
            if(count.ContainsKey(num)) count[num]++;
            else count[num] = 1;
        }
 
        //Convert to a list of [frequency, number] pairs
        // → [[3,1], [2,2], [1,3]]
        List<int[]> arr = count.Select(entry => 
        new int[]{entry.Value, entry.Key}).ToList();

        //Sort by frequency descending
        // → [[3,1], [2,2], [1,3]]
        arr.Sort((a,b) => b[0].CompareTo(a[0]));

        //Take the top k numbers
        int[] res = new int[k];
        for(int i=0; i<k; i++){
            res[i] = arr[i][1];
        }
        return res;
    }
}
