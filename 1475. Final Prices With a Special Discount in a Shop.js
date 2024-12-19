var finalPrices = function (prices) {
  const length = prices.length;
  const result = [...prices];

  for (let i = 0; i < length; i++) {
    for (let j = i + 1; j < length; j++) {
      if (prices[j] <= prices[i]) {
        result[i] = prices[i] - prices[j];
        break;
      }
    }
  }

  return result;
};

console.log(finalPrices([8, 4, 6, 2, 3]));
