/**
 * Definition of Interval:
 * public class Interval {
 *     public int start, end;
 *     public Interval(int start, int end) {
 *         this.start = start;
 *         this.end = end;
 *     }
 * }
 // 
 // public record struct Interval(int Start, int End);
 */

public class Solution {
    public bool CanAttendMeetings(List<Interval> intervals) {
         
         intervals.Sort((i1,i2) => i1.start.CompareTo(i2.start));

         for(int i = 1; i<intervals.Count; i++){
            //Interval A = intervals[i];
            //Interval B = intervals[i+1];

            Interval A = intervals[i-1];
            Interval B = intervals[i];

            if(A.end > B.start){
                return false;
            }
         }
         return true;
    }
}
