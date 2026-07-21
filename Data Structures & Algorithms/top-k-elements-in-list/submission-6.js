class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */

    //Bucket sort

    topKFrequent(nums, k) {

        const count = {};

        //reating an array of a given size where 
        //each slot holds its own independent empty array 
        //(often used for bucket sort, adjacency lists, or grouping by value.
        const freq = Array.from({length: nums.length + 1}, () => []);

        for (const n of nums){
            count[n] = (count[n] || 0) + 1;
        }
   
        //keys from for...in are always strings
        //
        for (const n in count) {
            freq[count[n]].push(parseInt(n));
        }

        const res = [];
        for (let i = freq.length - 1; i > 0; i--) {
            for (const n of freq[i]) {
                res.push(n);
                if (res.length === k) {
                    return res;
                }
            }
        }
    
        return sortedMap;
    }
}
