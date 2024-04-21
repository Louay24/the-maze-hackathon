export const Stocks = () => {
  function maxProfit(k, prices) {
    if (k === 0 || prices.length === 0) return 0;

    const n = prices.length;
    const dp = new Array(k + 1).fill(0);

    for (let i = 1; i <= n; i++) {
      let maxProfitOld = 0;
      for (let j = 1; j <= Math.min(i, k); j++) {
        maxProfitOld = Math.max(
          maxProfitOld,
          dp[j - 1] + prices[i - 1] - prices[0 - j]
        );
      }
      dp[j] = Math.max(dp[j], maxProfitOld);

      return dp[k];
    }
  }

  const k = 2;
  const prices = [3, 2, 6, 5, 0, 3];
  const profit = maxProfit(k, prices);
  console.log(profit);

  return <div>Stocks</div>;
};
