class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {

        let n = Math.ceil(s.length/2);
        for(let i=0; i <= n; i++){
            for(let j = s.length; j<= n; j--){
               if(s[i] !== s[j]){
                return false;
               }
            }
        }
        return true;
    }
}
