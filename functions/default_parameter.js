//make sure, the default value params should be in the end
function interest(principal, rate = 3.5, years = 5) {
  return principal * (rate / 100) * years;
}

console.log(interest(10000));
