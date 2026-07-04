public class Solution {
    public int[][] Merge(int[][] intervals) {
        
        //Compare two intervals based on their start value.
        Array.Sort(
            intervals, (a,b) => a[0].CompareTo(b[0])
        );

        List<int[]> output = new List<int[]>();
        output.Add(intervals[0]);

        foreach(int[] interval in intervals){
            int start = interval[0];
            int end = interval[1];
            int lastEnd = output[output.Count - 1][1];

            //Checking if current start is earlier than the current end,
            //if it is, check if the current end is later than lastEnd,
            //then update the end if its later.
            if(start <= lastEnd) {
                output[output.Count - 1][1] = Math.Max(lastEnd, end);
            //else there's no overlap between current interval to the output.
            } else {
                output.Add(new int[]{start, end});
            }
        }
        return output.ToArray();
    }
}
