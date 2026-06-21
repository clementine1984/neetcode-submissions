class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {

        let filtered = s.toLowerCase().replace(/[^a-z0-9]/g, '');
        
        let left = 0;
        let right = filtered.length -1;

        while(left < right){
                    if (filtered[left] !== filtered[right]) {
            return false;
        }
        left++;
        right--;
        }
        return true;
    }
}
