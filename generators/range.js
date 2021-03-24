function* range(min, max) {
  let i = min

  while (max >= min) {
    yield i++
  }
}

const iterator = range(0, 10)

console.log(iterator.next().value) // 0
console.log(iterator.next().value) // 1
console.log(iterator.next().value) // 2
console.log(iterator.next().value) // 3
console.log(iterator.next().value) // 4
console.log(iterator.next().value) // 5
console.log(iterator.next().value) // 6
console.log(iterator.next().value) // 7
console.log(iterator.next().value) // 8
console.log(iterator.next().value) // 9
console.log(iterator.next().value) // 10
