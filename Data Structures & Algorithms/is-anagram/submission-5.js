class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
 
    // Hash Set

    isAnagram(s, t) {

        if (s.length !== t.length) return false;
     
        const sSet = {}, tSet = {};

        for (let i = 0; i < s.length; i++){
            sSet[s[i]] = (sSet[s[i]] || 0) + 1;
            tSet[t[i]] = (tSet[t[i]] || 0) + 1;
        }
 
        for (const key in sSet) {
            if (sSet[key] !== tSet[key]) {
                return false;
            }
        }
        
        return true;
    }
}
