/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

//Sorting

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {

      let sorted = intervals.sort((a,b) => a.start - b.start);
    
      //sorted[length + 1] is undefined.
      for (let i = 0; i < sorted.length - 1; i++) {
         
          if (sorted[i].end > sorted[i+1].start) {
            return false;
          }
      }
      return true;
    }
}
