class Range {
  constructor(min, max) {
    this.i = min
    this.min = min
    this.max = max
  }

  [Symbol.iterator] = function () {
    return {
      min: this.min,
      max: this.max,
      i: this.min,
      next() {
        if (this.max >= this.i) {
          return { value: this.i++, done: false }
        }
        return { value: undefined, done: true }
      },
    }
  }
}

const iterable = new Range(0, 10)
for (const value of iterable) {
  console.log(value)
}
// 0
// 1
// 2
