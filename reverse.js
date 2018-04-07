function reverse(int) {
  let result = 0;

  while(int !== 0) {
    result = result * 10 + int % 10;
    int = Math.floor(int / 10);
  }

  return result;
}
