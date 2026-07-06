public class Solution {
    public int[][] Insert(int[][] intervals, int[] newInterval) {
        
        //Linear search

        var res = new List<int[]>();

        for(int i = 0; i < intervals.Length; i++){
           //There are only ever three possible relationships 
           //between newInterval and the current intervals[i].
           if(newInterval[1] < intervals[i][0]) {
            res.Add(newInterval);
            //No overlap with intervals[i],
            //copy the rest of the untouched intervals (intervals[i] through the end) 
            //straight into the result, unchanged.
            res.AddRange(intervals.AsEnumerable().Skip(i).ToArray());

            return res.ToArray();
           }

           else if(newInterval[0] > intervals[i][1]) {
             res.Add(intervals[i]);

           } else {
            //They must overlap. Merge them by expanding newInterval to cover both, 
            //and keep checking,the merged interval might also overlap the next one(s).
             newInterval[0] = Math.Min(intervals[i][0], newInterval[0]);
             newInterval[1] = Math.Max(intervals[i][1], newInterval[1]);
           }
        }

        res.Add(newInterval);
        return res.ToArray();
    }
}
