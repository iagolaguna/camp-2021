function* fibonacci() {
  let n1 = 1
  let n2 = 1
  while (true) {
    let current = n2
    n2 = n1
    n1 = n1 + current
    let reset = yield current
    if (reset) {
      n1 = 1
      n2 = 1
    }
  }
}

const sequence = fibonacci();
console.log(sequence.next().value);     // 1
console.log(sequence.next().value);     // 1
console.log(sequence.next().value);     // 2
console.log(sequence.next().value);     // 3
console.log(sequence.next().value);     // 5
console.log(sequence.next().value);     // 8
console.log(sequence.next().value);     // 13
console.log(sequence.next(true).value); // 1
console.log(sequence.next().value);     // 1
console.log(sequence.next().value);     // 2
console.log(sequence.next().value);     // 3