public class Solution {
    public int HammingWeight(uint n) {
        
        int res = 0;
        while( n != null){
            res += n % 2;
            n >> 1;
        }
        return res;
    }
}
