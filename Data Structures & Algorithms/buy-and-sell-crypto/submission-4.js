class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {

        //Set minBuy to the first price.
        let minBuy = prices[0];
        let maxP = 0;

        for (let sell of prices) {
            //Calculate maxP before updating minBuy
            //to enforce "buy before sell".
            maxP = Math.max(maxP, sell - minBuy);
            minBuy = Math.min(minBuy, sell);
        }

        return maxP;
    }
}
