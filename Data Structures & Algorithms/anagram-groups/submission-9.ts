class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {


        const res : Object = {};

        for (let word of strs) {
            const count = new Array(26).fill(0);
            for (let c of word) {
                count[c.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
            }
            const key = count.join(',');
            if (!res[key]) {
                res[key] = [];
            }
            res[key].push(word);
        }
        return Object.values(res);
    }
}
