class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */

    characterReplacement(s, k) {

    //The direction of replacing the most frequent substring
    //is irrelevent as we have to count every character
    //and its frequency.

        let l = 0, res = 0, maxf = 0;
        const count = new Map();

        for (let r = 0; r < s.length; r++) {
           
           count.set(s[r], (count.get(s[r]) || 0) + 1);

        //recompute the true max frequency in the current window,
        //which is expensive.
        //let maxf = Math.max(...count.values());

           maxf = Math.max(maxf, count.get(s[r]));

           while (r - l + 1 - maxf > k) {
               count.set(s[l], count.get(s[l]) - 1);
               //if (count.get(s[l]) === 0) count.delete(s[l]);// keep map clean
               l++;
               //maxf = Math.max(...count.values());  // re-sync after each removal
            }

           res = Math.max(res, r - l + 1);
        }
        
        return res;
    }
}
