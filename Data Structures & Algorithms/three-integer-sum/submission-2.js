class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {

        const sorted = nums.sort((a,b) => a - b);

        let res = [];

        if (sorted[0] > 0) return [];

        for (let i = 0; i < sorted.length - 2; i++){

            let j = i + 1;
            let k = sorted.length - 1;

            if (sorted[i - 1] == sorted[i]) continue;

            while (j < k) {
                let sum = sorted[i] + sorted[j] + sorted[k];
                if (sum == 0) {
                  res.push([sorted[i],sorted[j],sorted[k]]);
                  j++;
                  k--;
                } else if (sum < 0){
                  j++;
                } else {
                  k--;
                }           
            }
            
        }
        return res;
    }
}