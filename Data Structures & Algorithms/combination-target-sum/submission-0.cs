public class Solution {
    List<List<int>> res;
    public List<List<int>> CombinationSum(int[] nums, int target) {
        
        res = new List<List<int>>(); 
        Array.Sort(nums);
        dfs(0, new List<int>(), 0, nums, target);
        return res;
    }

    private void dfs(int i, List<int> cur, int total, int[] nums, int target) {
        //if base case reached,
        //save a COPY of the current path and return.
        if(total == target){
            res.Add(new List<int>(cur));
            return;
        }

        for(int j = i; j < nums.Length; j++){
            //Base Case (Failure/Out of Bounds): 
            //Exceeded the target, or ran out of candidates
            if(total + nums[j] > target) {
                return;
            }
            // pick this number
            cur.Add(nums[j]);
            // recurse (allowed to reuse j)
            dfs(j, cur, total + nums[j], nums, target);
            // undo the pick, try the next j
            cur.RemoveAt(cur.Count - 1);
        }
    }
}
