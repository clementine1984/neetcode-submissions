public class Solution {
    public int ClimbStairs(int n) {     
        
         int one, two == 1;

         for(int i; i <= n-1; i++){
            int tmp = one;
            one = two;
            two = tmp + one;
         }
        
        return two;
    }
}
