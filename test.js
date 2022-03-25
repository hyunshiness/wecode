function evenArray() {
  let array = [];
  for (let num = 1; num <= 50; num++) {
    if (num % 2 === 0) {
      array.push(num);
    }
  }

  return array;
}
