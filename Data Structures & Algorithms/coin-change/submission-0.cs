public class Solution {
    public int CoinChange(int[] coins, int amount) {
        
        int[] dp = new int[amount + 1];
        //It can never actually need more than amount coins (worst case, all coins are 1), 
        //any real answer will always be ≤ amount. 
        Array.Fill(dp, amount + 1);
        dp[0] = 0; 
        //If starts at i = 0, dp[0 - coin] will be a negative index.
        for(int i = 1; i<= amount; i++){
            foreach(int coin in coins){
              if(coin <= i){
                dp[i] = Math.Min(dp[i], dp[i - coin] + 1);
              }
            }
        }
        //The true answer can never exceed amount. 
        return dp[amount] > amount ? -1 : dp[amount];
    }
}
