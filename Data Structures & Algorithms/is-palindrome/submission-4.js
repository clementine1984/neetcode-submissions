class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {

        //The trim method is used to 
        //remove whitespace from only START and END.
        
        //const trim = s.trim();

        const cleanString = s.toLowerCase().replace(/[^a-z0-9]/g, '');

        let l = 0;
        let r = cleanString.length - 1;

        while (l < r) {
            if (cleanString[l] !== cleanString[r]) {
               return false;
            } 
            l++;
            r--;
        } 

        //while (l < r) {
        //    if (cleanString[l] === cleanString[r]) {
        //        l++;
        //        r--;
        //    } else {
        //        return false;
        //    }
        //} 

        return true;
    }
}
