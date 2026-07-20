class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        
        let res = {};//Being used as a hashmap.
        
        //for...of iterates over values of an iterable 
        //(arrays, strings, maps, sets, etc.).
        //for...in iterates over enumerable keys/indices 
        //(property names) of an object.
        for(let s of strs){
            //Use the sorted version of a string as a signature(key).
            const sortedS = s.split('').sort().join('');
            if(!res[sortedS]){
                res[sortedS] = [];
            }
            res[sortedS].push(s);
        }
 
       return Object.values(res);
    }
}
