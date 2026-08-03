class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        let l = 0,
            r = nums.length - 1;

        //When l === r, final candidate gets tested.
        while (l <= r) {
            //middle point should be a POSITION, not a WIDTH.
            //let mid = Math.floor((r - l) / 2).
            let mid = Math.floor(l + (r - l) / 2);
            if (target > nums[mid]) {
                l = mid + 1; //Exclude non target boundry.
            } else if (target < nums[mid]) {
                r = mid - 1; //Exclude non target boundry.
            } else {
                return mid;
            }
        }
        return -1;
    }
}
