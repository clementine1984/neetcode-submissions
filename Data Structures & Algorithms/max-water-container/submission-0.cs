public class Solution {
    public int MaxArea(int[] heights) {
        
        int res = 0;
        //Use two pointers to reduce the time complexity to O(n).
        int l = 0, r = heights.Length - 1; 

        while(l < r){
            int area = (Math.Min(heights[l], heights[r])) * (r - l);
            res = Math.Max(area, res);

            //Always moving the shorter bar INWARD 
            //as there'll be a chance to increase the area by meeting a taller bar
            if(heights[l] <= heights[r]){
                l++;
            } else {
                r--;
            }
        }
        return res;
    }
}
