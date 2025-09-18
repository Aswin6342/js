function prime(no) {
  for (i = 2; i < no; i++) {
    if (no % i == 0) {
      console.log("not prime");
      break;
    } else {
      console.log("prime");
      break;
    }
  }
}
prime(56);
