async function* increase() {
  let index = 0
  while (true) {
      await delay(500)
      yield index++
    }
}

const gen = increase() // "Generator { }"

console.log(await gen.next().value) // 0
console.log(await gen.next().value) // 1
console.log(await gen.next().value) // 2
// ...
