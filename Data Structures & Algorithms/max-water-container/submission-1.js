class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let l = 0;
        let r = heights.length - 1;

        let max = 0;

        while (l < r) {
            let area = Math.min(heights[l], heights[r]) * (r - l);
            max = Math.max(max, area);
            
            //without "=", the loop will run forever 
            //when heights[l] === heights[r].
            if (heights[l] <= heights[r]) {
                l++;
            } else if (heights[l] > heights[r]) {
                r--;
            }
        }

        return max;
    }
}
