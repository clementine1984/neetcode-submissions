class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number}
     */
    hammingWeight(n) {
        let res = 0;
        //n      = 1011 0100
        //n - 1  = 1011 0011
        //n&(n-1)= 1011 0000
        while (n !== 0) {
            //每执行一次,n 就少一个1。所以循环次数恰好等于1的个数
            //n 归零时循环结束。
            n &= n - 1;
            res++;
        }
        return res;
    }
}
