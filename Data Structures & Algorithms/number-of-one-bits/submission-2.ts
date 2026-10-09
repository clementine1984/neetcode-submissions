class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number}
     */
    hammingWeight(n: number): number {

        let res:number = 0;
        while(n){
            res += n % 2;
            n >> 1;
        }
        return res;
    }
}
