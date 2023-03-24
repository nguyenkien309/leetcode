prices = [7, 1, 5, 3, 6, 4];

const maxProfit = (prices) => {
  let max = 0;
  for (let i = 0; i < prices.length; i++) {
    let start = prices[i];
    for (let j = i + 1; j < prices.length; j++) {
      let end = prices[j];
      if (end - start > max) max = end - start;
    }
  }
  return max;
};
console.log(maxProfit(prices));
