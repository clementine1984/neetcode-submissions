class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

        if (s.length !== t.length) return false;

        const sSort = s.split('').sort().join('');
        const tSort = t.split('').sort().join('');

        //Nested loop won't work as it alwasy compare 
        //the first character in sSort 
        //against every other character in tSort.

        //for (let ss of sSort) {
        //    for (let ts of tSort) {
        //        if (ss != ts) {
        //            return false;
        //        }
        //    }
        //}

        return sSort === tSort;
    }
}
