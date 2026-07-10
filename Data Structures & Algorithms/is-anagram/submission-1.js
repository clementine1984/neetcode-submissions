class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        if (s.length !== t.length) {
            return false;
        }

        //text.split("")     // Split on characters
        //text.split(","(    // Split on commas
        //text.split(" ")    // Split on spaces
        //text.split("|")    // Split on pipe
        const sRes = s.split('').sort().join();
        const tRes = t.split('').sort().join();

        return sRes == tRes;
    }
}
