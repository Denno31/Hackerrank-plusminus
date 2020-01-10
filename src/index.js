function plusMinus(arr) {
  const totalElements = arr.length;

  const positiveNumbers = arr.filter(n => n > 0).length;

  const negativeNumbers = arr.filter(n => n < 0).length;

  const zeros = arr.filter(n => n === 0).length;
  console.log((positiveNumbers / totalElements).toFixed(6));
  console.log((negativeNumbers / totalElements).toFixed(6));
  console.log((zeros / totalElements).toFixed(6));
}

plusMinus([0, 2, 3, 7, -9]);
