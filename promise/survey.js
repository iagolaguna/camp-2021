// const readline = require("readline")
import readline from "readline"

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
})


const question = (question) =>
  new Promise((resolve, reject) => {
    rl.question(question, (answer) => resolve(answer))
    rl.on("close", reject)
  })

function survey() {
  let name, age, height, weight

  question("Qual o seu nome ? ")
    .then((answer) => (name = answer))
    .then(() => question("Qual a sua idade ? "))
    .then((answer) => (age = answer))
    .then(() => question("Qual é sua altura ? "))
    .then((answer) => (height = answer))
    .then(() => question("Qual é o seu peso ? "))
    .then((answer) => (weight = answer))
    .then(() => {
      console.log(`Nome:${name}`)
      console.log(`Idade:${age}`)
      console.log(`Altura:${height}`)
      console.log(`Peso:${weight}`)
    })
    .then(() => rl.close())
    .catch((r) => console.log("rejected", r))
}

survey()

// rl.question("Qual o seu nome ? ", function (name) {
//   rl.question("Qual a sua idade ? ", function (age) {
//     rl.question("Qual é sua altura ? ", function (height) {
//       rl.question("Qual é o seu peso ? ", function (weight) {
//         console.log(`Nome:${name}`)
//         console.log(`Idade:${age}`)
//         console.log(`Altura:${height}`)
//         console.log(`Peso:${weight}`)
//         rl.close()
//       })
//     })
//   })
// })

// rl.on("close", function () {
//   console.log("\nBYE BYE !!!")
//   process.exit(0)
// })

// rl.question("Where do you live ? ", function (country) {
//   console.log(`${name}, is a citizen of ${country}`)
//   rl.close()
// })
