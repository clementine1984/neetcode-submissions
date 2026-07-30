/**
 * Definition of Interval:
 * class Interval {
 *   constructor(start, end) {
 *     this.start = start;
 *     this.end = end;
 *   }
 * }
 */

class Solution {
    /**
     * @param {Interval[]} intervals
     * @returns {boolean}
     */
    canAttendMeetings(intervals) {

        //const sorted = intervals.sort((a, b) => {a[0] - b[0]})
        //with {}, the result will be computed and then discarded.
        const sorted = intervals.sort((a, b) => a[0] - b[0]);

        //use start and end as the definition. 
        for (let i = sorted.length - 1; i > 0; i--) {
            if (sorted[i].start < sorted[i-1].end) {
                return false;
            }
        }
        return true;
    }
}
