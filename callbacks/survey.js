const { Resolver } = require("dns")
const readline = require("readline")
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})

const question = (question) =>
  new Promise((resolve, reject) =>
    rl.question(question, (answer) => resolve(answer))
  )

question("teste").then((answer) => console.log("teste, answer:", answer))

rl.question("Qual o seu nome ? ", function (name) {
  rl.question("Qual a sua idade ? ", function (age) {
    rl.question("Qual é sua altura ? ", function (height) {
      rl.question("Qual é o seu peso ? ", function (weight) {
        console.log(`Nome:${name}`)
        console.log(`Idade:${age}`)
        console.log(`Altura:${height}`)
        console.log(`Peso:${weight}`)
        rl.close()
      })
    })
  })
})

rl.on("close", function () {
  console.log("\nBYE BYE !!!")
  process.exit(0)
})

// rl.question("Where do you live ? ", function (country) {
//   console.log(`${name}, is a citizen of ${country}`)
//   rl.close()
// })
