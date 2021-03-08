const delay = (milliseconds) =>
  new Promise((resolve, rejected) => {
    setTimeout(() => resolve(1), milliseconds)
  })

async function run() {
  const promise = await delay(2000)
  console.log(`Promise:`, promise)
}

run()

// console.log(`Promise:`, Promise.resolve(1))
// console.log(`Promise:`, Promise.reject())

// promise
//   .then(() => console.log(`Promise then block:`, promise))
//   .finally(() => console.log(`Promise finally block:`, promise))
// console.log(`Promise final:`, promise)

// setInterval(() => console.log(`Promise interval:`, promise), 100)
