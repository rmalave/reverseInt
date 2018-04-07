function reverse(int) {
  let num = 0;
  let result = 0;

  while(int !== 0) {
    num = int % 10;
    result = result * 10 + num;
    int = Math.floor(int / 10);
  }

  return result;
}
