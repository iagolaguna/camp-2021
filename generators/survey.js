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

async function* survey() {
  try {
    const name = await question("Qual o seu nome ? ")
    const age = await question("Qual a sua idade ? ")
    const height = await question("Qual é sua altura ? ")
    const weight = await question("Qual é o seu peso ? ")
    yield `Nome:${name}`;
    yield `Idade:${age}`
    yield `Altura:${height}`
    yield `Peso:${weight}`
    rl.close()
  } catch (error) {
    console.log("error", error)
  }
}


async function run() {
  const generator = survey()
  
  for await (const value of generator){
    console.log(value)
  }
}
run()