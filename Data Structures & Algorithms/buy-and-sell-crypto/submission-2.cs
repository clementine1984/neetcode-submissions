public class Solution {

    //Two pointers

    public int MaxProfit(int[] prices) {
        
        int l = 0, r = 1;
        int maxP = 0; 

        while(r < prices.Length){
            if(prices[r] > prices[l]) {
                int profit = prices[r] - prices[l];
                //Ensure the profit is at least 0. 
                maxP = Math.Max(maxP, profit);
            } else {
                l = r;
            }
            r++;
        }
        return maxP;
    }
}
