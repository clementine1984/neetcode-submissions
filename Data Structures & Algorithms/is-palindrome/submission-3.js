class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {

        let filtered = s.toLowerCase().replace(/[^a-z0-9]/g, '');
        
        let l = 0, r = filtered.length - 1;
        while (l < r) {
            if (filtered[l] !== filtered[r]) {
                return false;
            }
           l++;
           r--;
        }

        return true;
    }
}
