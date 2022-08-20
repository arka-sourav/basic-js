function finalBill(discount, ...prices) {
  const total = prices.reduce((acc, curr) => {
    return acc + curr;
  });
  return total * (1 - discount);
}

//discount of 10% on 2 items of price $10 and $20.
const amountToPay = finalBill(0.1, 10, 20);
console.log(amountToPay); //--> 27
