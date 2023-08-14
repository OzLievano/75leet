/*
given an array of prices where price is a given stock on the ith day 
you want to maximize your prift by choosing a single day to buy one stock and choosing a different day to sell
that stock

return the maximum profit you can achieve from thsi transcation 
if you cannot achieve any profit return 0;

input [7,1,5,3,6,4];
output : 5

iterate through the array 
subtract sell price from buy price 
day 1 is 7 , 1-7 , profit = -6 ; 5 - 7 , profit = -2 ; 3 - 7, profit = -4, 6 - 7 = -1 .... .... ... 
if currProfit > maxProfit then currProfit becomes maxProfit 
if maxProfit <= 0 .. return 0;
*/

const maxProfit = (prices) => {
    let maxProfit = 0;
    let minPrice = prices[0];
    for (let i = 1; i < prices.length; i++) {
        const currentPrice = prices[i];
        const currentProfit = currentPrice - minPrice;
        if (currentProfit > maxProfit) {
            maxProfit = currentProfit;
        }
        if (currentPrice < minPrice) {
            minPrice = currentPrice;
        }
    }
    return maxProfit;
}

maxProfit([7,1,5,6,3,4]);